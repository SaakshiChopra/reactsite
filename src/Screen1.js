import VerticalMenu from "./VerticalMenu";
import ViewClients from "./ViewClients";

const Screen1 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <ViewClients />
        </div>
      </div>
    </>
  );
};
export default Screen1;
