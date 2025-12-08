import "./App.css";

import { Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./hello-world/hello-world-component";
import OurPromisesComponent from "./our-promises/our-promises";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import PropsPractice from "./props-practice/props-practice";
function App() {
  const arr1 = [
    { name: "sai", mobile: "1234" },
    { name: "ragu", mobile: "5678" },
  ];
  return (
    <div>
      <Routes>
        {/* <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/" element={<TrustedbyComponent />} /> */}
        <Route path="/leetcode" element={<HelloWorldComponent />}>
          <Route path="/" index element={<PropsPractice />} />
          <Route path="/trusted-by" element={<TrustedbyComponent />} />
          <Route path="/our-promise" element={<OurPromisesComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
