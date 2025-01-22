// best selli ng book .css import
import "./BestSellingBook.css";
// import title props....
import TitileTypeTwo from "../../UI/TitileTypeTwo/TitileTypeTwo";
// import tree shape
import TreeShape from "../../assets/treeShape.png";
// import best selling datas
import { sellingBooksData } from "../../Data/Data";
// link import .........
import { Link } from "react-router-dom";
// import react icon.......
import { BsArrowRight } from "react-icons/bs";
export default function BestSellingBook() {
  return (
    <section className="BestSellingBook">
      {/*  */}
      <div className="treeShape">
        <img src={TreeShape} alt="" />
      </div>
      {/* selling book content.... */}
      {sellingBooksData.map(
        ({ img, infoTitle, infoTitleTop, desc, price, shopbtnLink }) => {
          return (
            <div className="container bestselling-container">
              {/* ....left..... */}
              <div className="selling-book-left">
                <img src={img} alt="" />
              </div>
              {/* .....right..... */}
              <div className="selling-book-right">
                <TitileTypeTwo
                  className="sellingBookTitle"
                  Title={"Best selling Book "}
                />
                <div>
                  <small>{infoTitleTop}</small>
                  <h3>{infoTitle}</h3>
                  <p>{desc}</p>
                  <h5>
                    <span>{price}</span>
                  </h5>
                  <Link to={shopbtnLink} className="btn">
                    <small>shop it now</small>
                    <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}
