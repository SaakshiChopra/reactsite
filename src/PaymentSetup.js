import { Button, Checkbox, Input, Radio, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { useNavigate } from "react-router-dom";

const PaymentSetup = () => {
  let nav = useNavigate();
  const handleThemeSetup = () => {
    nav("/Screen4");
  };

  const plainOptions = ["UPI", "Net Banking", "Cash", "Cheque", "Other"];
  return (
    <>
      <div className="PaymentSetup">
        <h6>Payment Setup</h6>
        <p>Set up payments for the client. </p>
        <Input
          placeholder="Billing Address*"
          style={{ borderRadius: "8px", width: "81%", marginLeft: "50px" }}
        />
        <br />
        <br />
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <Select
            style={{
              width: "40%",
              borderRadius: "8px",
            }}
            placeholder="Select State *"
          >
            <Option>List Item</Option>
            <Option>List Item</Option>
          </Select>
          <Select
            style={{
              width: "30%",
              borderRadius: "8px",
              marginLeft: "20px",
            }}
            placeholder="Select City *"
          >
            <Option>List Item</Option>
            <Option>List Item</Option>
          </Select>
          <Input
            placeholder="Pincode*"
            style={{ borderRadius: "8px", width: "11%", marginLeft: "20px" }}
          />
        </div>
        <br />
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <Select
            style={{
              width: "41%",
              borderRadius: "8px",
            }}
            placeholder="Select Number of Site Access *"
          >
            <Option>List Item</Option>
            <Option>List Item</Option>
          </Select>

          <Input
            placeholder="Payable Amount per Site *"
            prefix="Rs."
            suffix="Total: Rs 00000"
            style={{ borderRadius: "8px", width: "41%", marginLeft: "20px" }}
          />
        </div>
        <br />
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <Input
            placeholder="Discount (%)*"
            style={{ borderRadius: "8px", width: "41%" }}
          />

          <Input
            placeholder="Reason *"
            style={{ borderRadius: "8px", width: "41%", marginLeft: "20px" }}
          />
        </div>
        <br />
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <p
            style={{
              height: "19px",
              fontWeight: "700",
              fontSize: "14px",
              color: "#030037",
            }}
          >
            Payment Mode
          </p>

          <p
            style={{
              marginLeft: "600px",
              height: "19px",
              fontWeight: "700",
              fontSize: "14px",
              color: "#030037",
            }}
          >
            Payment Status
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <Checkbox.Group options={plainOptions} />
          <Radio.Group style={{ marginLeft: "300px" }}>
            <Radio value={1}>Paid</Radio>
            <Radio value={2}>Pending</Radio>
          </Radio.Group>
        </div>
        <br />
        <br />
        <Button
          onClick={handleThemeSetup}
          style={{
            backgroundColor: "#153AC7",
            color: "white",
            borderRadius: "5px",
            marginLeft: "50px",
          }}
        >
          Save & Continue &ensp;&gt;
        </Button>
        &ensp;&ensp;
        <Button type="text">
          <img src="./images/reset.png" />
          &ensp; Reset
        </Button>
      </div>
    </>
  );
};
export default PaymentSetup;
