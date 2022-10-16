import AddClient from "./AddClient";
import CreateProfile from "./CreateProfile";
import StepCounter from "./StepCouter";
import VerticalMenu from "./VerticalMenu";
const Screen2 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AddClient />
            <StepCounter />
            <CreateProfile />
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen2;
