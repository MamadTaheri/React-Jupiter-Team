import axios from "axios";
import ResponseStatuses from "./ResponseStatuses";

const GetStaffByIdService = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:3333/staff/${id}`)
      .then((response) => {
        //Success
        resolve([ResponseStatuses.Success, response.data]);
      })
      .catch((error) => {
        //Error
        reject([ResponseStatuses.Error, []]);
      });
  });
};

export default GetStaffByIdService;
