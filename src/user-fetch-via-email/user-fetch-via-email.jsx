import React, { useState } from "react";
import axios from "axios";
const UserFetchViaEmail = () => {
  const [userDetails, setUserDetails] = useState([]);
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("The email value frontend:", email);

    try {
      const pushDetails = await axios.get(
        `http://localhost:21000/api/v1/User/getUserDetails/${email}`
      );
      // console.log("The push details:", pushDetails);

      if (pushDetails.data.success === true) {
        //console.log("The process is successful");
        setUserDetails(pushDetails.data.data);
      } else {
        console.log("Error occured");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  console.log("The email DETAILS:", userDetails);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UserFetchViaEmail;
