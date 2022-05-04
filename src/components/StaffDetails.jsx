import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const StaffDetails = ({employee}) => {

    const now = new Date();
    const timeLabel = now.getHours() + " : " + now.getMinutes();

    return (
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
                <a href={employee.linkedin} className="btn btn-primary m-2" target="_blank" rel="noreferrer">
                  <FaLinkedin /> Linkedin Page
                </a>
                <a href={employee.github} className="btn btn-primary m-2" target="_blank" rel="noreferrer">
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
    );
};

export default StaffDetails;