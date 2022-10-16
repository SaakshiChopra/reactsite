import StepCounter from "./StepCouter";
import VerticalMenu from "./VerticalMenu";
import AddClient from "./AddClient";
import ThemeSetup from "./ThemeSetup";
const Screen4 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AddClient />
            <StepCounter />
            <ThemeSetup />
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen4;
