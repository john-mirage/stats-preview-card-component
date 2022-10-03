import { FunctionComponent } from "react";
import Stat from "@components/Stat";
import "./style.css";

const stats = [
  {
    name: "companies",
    value: "10k+",
  },
  {
    name: "templates",
    value: "314",
  },
  {
    name: "queries",
    value: "12m+",
  }
];

const Card: FunctionComponent = () => {
  return (
    <main className="card">
      <div className="card__header"></div>
      <div className="card__body">
        <h1 className="card__title">Get <span className="card__titleEmphase">insights</span> that help your business grow.</h1>
        <p className="card__subtitle">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
        <ul className="card__statList">
          {stats.map((stat) => (
            <Stat
              key={stat.name}
              className="card__stat"
              statName={stat.name}
              statValue={stat.value}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Card;