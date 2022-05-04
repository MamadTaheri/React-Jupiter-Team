import { useEffect, useState } from "react";
import GetStaffService from "../Services/GetStaffService";
import ResponseStatuses from "../Services/ResponseStatuses";
import spinner from "../assets/images/spinner.gif";
import Card from "../components/Card";

const HomeView = () => {
  const [staff, setStafff] = useState([]);
  const [status, setStatus] = useState("init");

  useEffect(() => {
    GetStaffService.then((response) => {
      const [status, data] = response;
      setStafff(data);
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
        <div className="row">
          <div className="col-md-12 text-primary">
            <h1>Staff</h1>
          </div>
          {staff.map((person) => (
            <div key={person.id} className="col-md-4">
              <Card person={person} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeView;
