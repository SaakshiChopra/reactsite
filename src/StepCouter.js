import { Steps } from "antd";
import { useState } from "react";
import CreateProfile from "./CreateProfile";
const { Step } = Steps;
const StepCounter = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <>
      <div
        style={{ backgroundColor: "white", marginLeft: "10px", width: "95%" }}
      >
        <Steps
          type="navigation"
          current={current}
          onChange={onChange}
          className="site-navigation-steps"
        >
          <Step status="process" title="01 CREATE PROFILE"></Step>
          <Step status="process" title="02 PAYMENT SETUP"></Step>
          <Step status="process" title="03 THEME SETUP" />
          <Step status="process" title="04 MODULES SETUP" />
        </Steps>
      </div>
    </>
  );
};
export default StepCounter;
