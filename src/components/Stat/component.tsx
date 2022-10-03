import { FunctionComponent } from "react";
import "./style.css";

interface Props {
  className: string;
  statName: string;
  statValue: string;
}

const Stat: FunctionComponent<Props> = ({ className, statName, statValue }) => {
  return (
    <li className={`stat ${className}`}>
      <h2 className="stat__name">{statName}</h2>
      <p className="stat__value">{statValue}</p>
    </li>
  );
}

export default Stat;