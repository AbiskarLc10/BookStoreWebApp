// quote  css import ..........
import "./Quote.css";
// import title props/............
import TitleTypeTwo from "../../UI/TitileTypeTwo/TitileTypeTwo";
// quote data import .......
import { quoteData } from "../../Data/Data";
export default function Quote() {
  return (
    <section className="Quote">
      <div className="container quote-container">
        <TitleTypeTwo Title={"Quote of the day"} className="quote-title" />
        {quoteData.map(({ quote, speaker }, index) => {
          return (
            <article key={index}>
              <p>{quote}</p>
              <h5>{speaker}</h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}
