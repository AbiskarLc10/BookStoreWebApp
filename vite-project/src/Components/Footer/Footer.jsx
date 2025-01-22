// import footer csss ........;
import "./Footer.css";
// import footer datas ......
import { FootersLinksData } from "../../Data/Data";
// import react link..........
import { Link } from "react-router-dom";
// import copyright and footer icons..........
import CopyRight from "../CopyRight/CopyRight";
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/* ......about parms....... */}
        <div>
          <h4>About us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ...... Discover parms....... */}
        <div>
          <h4> Discover us</h4>
          <ul className="discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ...... Myaccount parms....... */}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ...... Help parms....... */}
        <div>
          <h4>Helps</h4>
          <ul className="Help-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
