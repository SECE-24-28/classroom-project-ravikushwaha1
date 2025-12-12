import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
const SignupFormComponent = () => {
  const [getDetails, setGetDetails] = useState([]);
  const [change, setChange] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("=>(The value:)>=", e.target.email.value);
    // console.log("The first name:", e.target.firstname.value);
    try {
      console.log("CHECK ENTRY 2381");

      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userRegister",
        {
          firstName: e.target.firstname.value,
          email: e.target.email.value,
          secondName: e.target.secondname.value,
          mobile: e.target.mobile.value,
          password: e.target.password.value,
        }
      );
      console.log("The push details:", pushDetails);

      if (pushDetails.data.success === true) {
        console.log("The process is successful");
        setChange(!change);
      } else {
        console.log("Error occured");
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Something went wrong";
      toast.error(msg);
      // console.log("Backend Error:", msg);
    }
  };
  const getDetailsFunction = async () => {
    try {
      const getDetails = await axios.get(
        "http://localhost:21000/api/v1/User/getUsers"
      );
      setGetDetails(getDetails.data.getUsers);
    } catch (e) {
      console.log("Error:", e);
    }
  };
  const deleteFunction = async (id) => {
    try {
      const getDetails = await axios.delete(
        `http://localhost:21000/api/v1/User/deleteUsers/${id}`,
        {
          // query: {
          //   id: id,
          // },
        }
      );
      if (getDetails.data.success === true) {
        setChange(!change);
        console.log("Data is deleted successfully");
      } else {
        console.log("Data is not deleted");
      }
      // setGetDetails(getDetails.data.getUsers);
    } catch (e) {
      console.log("Error:", e);
    }
  };
  useEffect(() => {
    getDetailsFunction();
  }, [change]);
  console.log("The main data:", getDetails);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" />
        <label htmlFor="secondname">Second name</label>
        <input type="text" id="secondname" />
        <label htmlFor="mobile">Mobile number</label>
        <input type="number" id="mobile" />
        <label htmlFor="password">Password</label>
        <input type="number" id="password" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {getDetails?.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item?.firstName}</h1>
              <h2>{item?.email}</h2>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteFunction(item._id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SignupFormComponent;
