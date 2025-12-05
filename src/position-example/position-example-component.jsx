import React from "react";
import { PostionExampleStyle } from "./position-exmaple-style";
const PositionExampleComponent = () => {
  return (
    <PostionExampleStyle>
      <div className="box">
        <div className="box__content">
          <div className="value">100</div>
          <div className="name">Colleges</div>
        </div>
        <div className="box__color"></div>
      </div>
    </PostionExampleStyle>
  );
};
export default PositionExampleComponent;
