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
        {jobTitle}
      </label>
      <Link to={`/staff/${id}`} className="btn btn-primary more-info-btn">More Info...</Link>
    </div>
  );
};

export default Card;
