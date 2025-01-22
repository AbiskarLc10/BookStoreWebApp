// import link from  react router
import { Link } from "react-router-dom";
// ......features book css import
import "./FeaturesBooks.css";
// props tytle import .....
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
// import swiper react components swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import features book data ............
import { featuredBooksData } from "../../Data/Data";
//react icon import
import { BsArrowReturnRight } from "react-icons/bs";
// Swiper break points.............

const breakpoints = {
  // when window width is<=1024px
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  // when width is <=768
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  // when window width is<=480px
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  // when window width is<=0px
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

export default function FeaturesBooks() {
  return (
    <section className="Featured">
      <div className="container features-book-container">
        {/* ...title props......... */}
        <TitleTypeOne TitleTop={"Some quality items"} Title={"Featured Book"} />
        {/* .features slider..... */}
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map(
            ({ img, imgLink, name, nameLink, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featurebook-box">
                    <Link to={imgLink} className="featurebook">
                      <img src={img} alt="" />
                    </Link>
                    <div className="featurebook-info">
                      <Link to={nameLink}>
                        <h4>{name}</h4>
                      </Link>
                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="feature-border container"></div>
          {/* ......swiper pagination */}
          <div className="swiper-pagination"></div>
          {/* ......swiper pagination */}
          <Link to="*" className="btn feature-btn">
            view all products
            <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}
