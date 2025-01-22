// .....import of header css.......
import "./Header.css";
// .........import of datas book ......
import { headerBooks } from "../../Data/Data";
// import swiper react components swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

// react arrow import.......
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

// sape sgv import ......
import headerShape from "../../assets/header-shape.svg";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        {/* ...header swiper slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
        >
          {headerBooks.map(({ title, info, img, btnlink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="header-wraper container">
                  {/* .......Header left.......... */}
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    {/* <Link className="btn btn-border" to={btnlink}>
                      {" "}
                      LearnMore
                    </Link> */}
                    <a href={btnlink} className="btn btn-border">
                      Learn more
                    </a>
                  </div>
                  {/*....... Header right.......... */}
                  <div className="header-right">
                    <img src={img} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* .........header pagination.... */}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>
          {/* .........header pagination.... */}
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
        {/* ........header shape */}
        <div className="header-shape">
          <img src={headerShape} alt="" />
        </div>
      </div>
    </header>
  );
}
