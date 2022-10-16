import VerticalMenu from "./VerticalMenu";
import AddClient from "./AddClient";
import Success from "./Success";
const Screen6 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AddClient />
            <Success />
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen6;
