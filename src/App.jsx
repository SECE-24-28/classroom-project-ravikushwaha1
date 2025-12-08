import "./App.css";
import FlexBoxComponent from "./flex-box/flex-box-component";
import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
import HelloWorldComponent from "./hello-world/hello-world-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import OurPromisesComponent from "./our-promises/our-promises";
import PositionExampleComponent from "./position-example/position-example-component";
import PostionComponent from "./positioning/position-component";
import PropsPractice from "./props-practice/props-practice";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";

function App() {
  return (
    <div>
      {/* <HelloWorldComponent /> */}
      {/* <FlexBoxComponent /> */}
      {/* <LeadersTomorrowComponent /> */}
      {/* <SymbolOfExcellenceComponent /> */}
      {/* <PostionComponent /> */}
      {/* <TrustedbyComponent /> */}
      {/* <FlexWrapComponent /> */}
      {/* <OurPromisesComponent /> */}
      {/* <PositionExampleComponent /> */}
      <PropsPractice name="Sai" mobile="14234423243" />
      <PropsPractice name="Ragu" mobile="232332231231" />
    </div>
  );
}

export default App;
