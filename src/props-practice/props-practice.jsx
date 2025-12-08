import React from "react";
// const PropsPractice = (props) => {
//   return (
//     <div>
//       <h1>Heading</h1>
//       <div>{props.name}</div>
//       <div>{props.mobile}</div>
//     </div>
//   );
// };
const PropsPractice = (props) => {
  return (
    <div>
      <h1>Heading</h1>
      <div>{props?.name}</div>
      <div>{props?.mobile}</div>
    </div>
  );
};
export default PropsPractice;

const arr1 = [{ name: "sai", mobile: "1234" }, { name: "ragu" }];
