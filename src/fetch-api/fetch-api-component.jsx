import React, { useState } from "react";
import axios from "axios";
const FetchApiComponent = () => {
  const [data, setData] = useState([]);
  const fun1 = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
    // console.log("The data from api:", data);
  };
  return (
    <div>
      <h1>API Fetch</h1>
      {
        data.length === 0 ? (
        //   <button onClick={fun1}>Fetch Data</button>
        <h1>No data is existing</h1>
        ) : (
            data.map((item)=>{
                
            })
        )
      }
    </div>
  );
};
export default FetchApiComponent;
