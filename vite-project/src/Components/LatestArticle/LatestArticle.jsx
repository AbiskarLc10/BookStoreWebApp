// latest article  css import
import "./LatestArticle.css";
// import title props.....
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
// import article data ......
import { lettestArticleData } from "../../Data/Data";
// link import from react router dom......
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

export default function LatestArticle() {
  return (
    <section className="latestArticle">
      <div className="container latest-article-container">
        <TitleTypeOne Title={"LatestArticle"} TitleTop={"Read Our Articles"} />
        <div className="latest-article-content">
          {lettestArticleData.map(
            (
              {
                titLink,
                title,
                date,
                instLink,
                fbLink,
                twitalink,
                inspiration,
                image,
              },
              index
            ) => {
              return (
                <article className="latest-article" key={index}>
                  <div className="article-image">
                    <img src={image} alt="" />
                  </div>
                  <div className="article-info">
                    <h5>{date}</h5>
                    <Link to={titLink}>
                      <h3>{title}</h3>
                    </Link>
                  </div>
                  <div className="latest-article-socials">
                    <p>{inspiration}</p>
                    <div className="article-social">
                      <a href={fbLink}>
                        <FaFacebookF />
                      </a>
                      <a href={instLink}>
                        <FaInstagramSquare />
                      </a>
                      <a href={twitalink}>
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>
        <Link to={"*"} className="btn btn-border">
          Read all articles
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
