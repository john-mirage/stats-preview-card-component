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
      <p className="stat__value">{statValue}</p>
      <p className="stat__name">{statName}</p>
    </li>
  );
}

export default Stat;