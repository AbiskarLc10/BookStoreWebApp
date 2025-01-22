const express = require("express");
const CustomerClient = require("../grpc-client/customerClient");
const grpc = require("@grpc/grpc-js");
require("dotenv").config();
const customErrorHandler = require("../errors/customError");
const validate = require("../utils/validateData");
const { signUpCustomerSchema } = require("../utils/validationSchema");
console.log(process.env.STRIPE_PAYMENT_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_PAYMENT_SECRET_KEY);
const router = express.Router();

router.route("/sign-up").post(async (req, res, next) => {
  const { fullName, email, password, address, dateOfBirth } = req.body;

  try {
    validate(req.body, signUpCustomerSchema);
    const response = await new Promise((resolve, reject) => {
      CustomerClient.SignUpCustomer(
        {
          fullName,
          email,
          password,
          address,
          dateOfBirth,
        },
        (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        }
      );
    });

    return res.status(201).json(response);
  } catch (error) {
    return customErrorHandler(
      {
        details: error.details || error.message,
        code: error.code,
      },
      next
    );
  }
});

router.route("/sign-in").post(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const response = await new Promise((resolve, reject) => {
      CustomerClient.SignInCustomer({ email, password }, (error, response) => {
        if (error) {
          reject({
            details: error.details,
            code: error.code,
          });
        }
        resolve(response);
      });
    });

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return customErrorHandler(
      {
        details: error.details || error.message,
        code: error.code || 500,
      },
      next
    );
  }
});

router.route("/order-book/:bookId").post(async (req, res, next) => {
  if (!req.headers.authorization) {
    return customErrorHandler(
      {
        details: "Token not found.Please login!",
        code: 404,
      },
      next
    );
  }
  const metadata = new grpc.Metadata();
  metadata.add("token", req.headers.authorization);
  const { bookId } = req.params;
  let { quantity } = req.body;
  if (!bookId) {
    return customErrorHandler(
      {
        details: "Failed to get url params",
        code: 400,
      },
      next
    );
  }
  try {
    const response = await new Promise((resolve, reject) => {
      CustomerClient.OrderBook(
        { bookId, quantity },
        metadata,
        (error, response) => {
          if (error) {
            reject(error);
          }
          resolve(response);
        }
      );
    });

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return customErrorHandler(
      {
        details: error.details || error.message,
        code: error.code || 500,
      },
      next
    );
  }
});

router.route("/cancel-order/:orderId").delete(async (req, res, next) => {
  const { orderId } = req.params;
  const token = req.headers.authorization;
  if (!token) {
    return customErrorHandler(
      {
        details: "Token not found.Please login!",
        code: 401,
      },
      next
    );
  }
  const metadata = new grpc.Metadata();
  metadata.add("token", token);
  try {
    const response = await new Promise((resolve, reject) => {
      CustomerClient.CancelBookOrder(
        { orderId },
        metadata,
        (error, response) => {
          if (error) {
            console.log(error);
            reject({
              details: error.details,
              code: error.code,
            });
          }
          resolve(response);
        }
      );
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return customErrorHandler(
      {
        details: error.details || error.message,
        code: error.code || 500,
      },
      next
    );
  }
});

router.route("/get-order/:orderId").get(async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const token = req.headers.authorization;
    if (!token) {
      return customErrorHandler(
        {
          details: "Token not found.Please login!",
          code: 401,
        },
        next
      );
    }
    const metadata = new grpc.Metadata();
    metadata.add("token", token);
    const response = await new Promise((resolve, reject) => {
      CustomerClient.GetOrderDetails(
        { orderId },
        metadata,
        (error, response) => {
          if (error) {
            console.log(error);
            reject({
              details: error.details,
              code: error.code,
            });
          }
          resolve(response);
        }
      );
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return customErrorHandler(
      {
        details: error.details || error.message,
        code: error.code || 500,
      },
      next
    );
  }
});

router
  .route("/order-payment/initiate/:orderId")
  .post(async (req, res, next) => {
    try {
      const { orderId } = req.params;

      const token = req.headers.authorization;
      const metadata = new grpc.Metadata();
      metadata.add("token", token);
      if (!token) {
        return customErrorHandler(
          {
            details: "Token not found.Please login!",
            code: 401,
          },
          next
        );
      }

      const response = await new Promise((resolve, reject) => {
        CustomerClient.InitiateBookPayment(
          { orderId },
          metadata,
          (error, response) => {
            if (error) {
              reject({
                details: error.details,
                code: error.code,
              });
            }
            resolve(response);
          }
        );
      });

      if (response.success) {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: response.bookName,
                  metadata: {
                    orderId: orderId,
                    bookName: response.bookName,
                  },
                },
                unit_amount: response.price * 100,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: "http://localhost:8000/complete-payment",
          cancel_url: "http://localhost:8000/cancel-payment",
        });

        console.log(session);
        return res.status(200).json({ ...response, url: session.url });
      }
    } catch (error) {
      console.log(error);
      return customErrorHandler(
        {
          details: error.details || error.message,
          code: error.code || 500,
        },
        next
      );
    }
  });
module.exports = router;
