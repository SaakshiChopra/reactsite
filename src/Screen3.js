import PaymentSetup from "./PaymentSetup";
import StepCounter from "./StepCouter";
import VerticalMenu from "./VerticalMenu";
import AddClient from "./AddClient";
const Screen3 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VerticalMenu />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <AddClient />
            <StepCounter />
            <PaymentSetup />
          </div>
        </div>
      </div>
    </>
  );
};
export default Screen3;
