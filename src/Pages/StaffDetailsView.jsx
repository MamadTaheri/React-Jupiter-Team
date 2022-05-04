import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import spinner from "../assets/images/spinner.gif";
import GetStaffByIdService from "../Services/GetStaffByIdService";
import ResponseStatuses from "../Services/ResponseStatuses";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const StaffDetailsView = () => {
  const { id } = useParams();

  const now = new Date();
  const timeLabel = now.getHours() + " : " + now.getMinutes();

  const [employee, setEmployee] = useState({});
  const [status, setStatus] = useState("init");

  useEffect(() => {
    GetStaffByIdService(id).then((response) => {
      console.log(response);
      const [status, data] = response;
      setEmployee(data);
      setStatus(status);
    });
  }, []);

  return (
    <div className="container">
      {status === "init" && <img src={spinner} alt="spinner" width={300} />}
      {status === ResponseStatuses.Error && (
        <h1>Error On Loading Data... Please Call Admin</h1>
      )}
      {status === ResponseStatuses.Success && (
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">Employee # {employee.id}</div>
              <div className="card-body" style={{ minHeight: "400px" }}>
                <h3 className="card-title text-primary">{employee.fullName}</h3>
                <h5 className="card-title text-muted">{employee.jobTitle}</h5>
                <MdEmail
                  className="text-primary"
                  style={{ fontSize: "28px", marginRight: "5px" }}
                />
                <span>{employee.email}</span>
                <br />
                <a href={employee.linkedin} className="btn btn-primary m-2" target="_blank">
                  <FaLinkedin /> Linkedin Page
                </a>
                <a href={employee.github} className="btn btn-primary m-2" target="_blank">
                  <FaGithub /> GitHub Account
                </a>
                <p className="card-text">About me:</p>
                <p className="card-text">{employee.About}</p>
              </div>
              <div className="card-footer text-muted">
                current Time: {timeLabel}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetailsView;
