// Title css import
import "./TitileTypeTwo.css";
// victor image import
import victor from "../../assets/victor.png";
export default function TitileTypeTwo({ className, Title }) {
  return (
    <div className={`titleTypeTwo $(Classname)`}>
      <h2>{Title}</h2>
      <img src={victor} alt="" className="victor" />
    </div>
  );
}
