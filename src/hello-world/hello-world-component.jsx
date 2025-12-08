import { Outlet } from "react-router-dom";

const HelloWorldComponent = () => {
  return (
    <>
      <HelloWorldStyle>
        <div className="parent">
          <div className="square__child"></div>
          <div className="square__child"></div>
          <div className="square__child"></div>
          <div className="square__child"></div>
          <div className="square__rectangle"></div>
        </div>
      </HelloWorldStyle>

      <Outlet />
    </>
  );
};

export default HelloWorldComponent;
