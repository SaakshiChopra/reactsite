import StepCounter from "./StepCouter";
import VerticalMenu from "./VerticalMenu";
import AddClient from "./AddClient";
import ModuleSetup from "./ModuleSetup";
const Screen5 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AddClient />
            <StepCounter />
            <ModuleSetup />
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen5;
