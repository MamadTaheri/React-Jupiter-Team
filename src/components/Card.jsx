import { Link } from "react-router-dom";
import "../styles/Card.css";
import ToggleSwitch from "./ToggleSwitch";

const Card = ({ person }) => {
  const { id, fullName, jobTitle } = person;
  const isActive = Math.floor(Math.random() * 10) % 2 === 0;

  return (
    <div className={isActive ? "container-card" : "container-card-inactive"}>
      <div className="header-card">
        <label className="title-card">{fullName}</label>
        <ToggleSwitch />
      </div>
      <label className="text-card">
        {jobTitle.length <= 102
          ? jobTitle
          : `${jobTitle.substring(0, 102)} ...`}
      </label>
    </div>
  );
};

export default Card;
