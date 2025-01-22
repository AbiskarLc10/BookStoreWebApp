// import not found css
import "./NotFound.css";
// import link react......
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section>
      <div className="container not-found-container">
        <h1>404</h1>
        <h3>this page is under renovation.</h3>
        <Link to={"/"} className="btn btn-border">
          Go to Home.
        </Link>
      </div>
    </section>
  );
}
