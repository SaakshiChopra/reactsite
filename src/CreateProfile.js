import { Button, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";

import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  let nav = useNavigate();
  const handlePaymentSetup = () => {
    nav("/Screen3");
  };
  return (
    <>
      <div className="CreateProfile">
        <h6>Create Client Profile</h6>
        <p>Add some basic information related to the client.</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "20px",
            alignItems: "center",
          }}
        >
          <img
            src="./images/Clogo.png"
            style={{ width: "90px", height: "90px" }}
          />
          <div>
            <p
              style={{
                width: "120px",
                height: "20px",
                color: "#030037",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              &ensp; Company Logo
            </p>

            <p
              style={{
                width: "320px",
                height: "12px",

                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "16px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
              }}
            >
              &ensp; Logo ratio should be 1:1 and should be 120px X 120 px
            </p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "600px", height: "300px", marginLeft: "50px" }}>
            <Input
              placeholder="Company Name*"
              style={{ borderRadius: "8px" }}
            />
            <br />
            <br />
            <Select
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
              placeholder="Select Business Category *"
            >
              <Option>List Item</Option>
              <Option>List Item</Option>
            </Select>
            <br />
            <br />
            <Input
              placeholder="Company Email Address *"
              style={{ borderRadius: "8px" }}
            />
            <br />
            <br />
            <Select
              style={{
                borderRadius: "8px",
                width: "100%",
              }}
              placeholder="Select State *"
            >
              <Option>List Item</Option>
              <Option>List Item</Option>
            </Select>
            <br />
            <br />
            <Input placeholder="GST Number *" style={{ borderRadius: "8px" }} />
            <br />
            <br />
          </div>
          <div style={{ width: "600px", height: "300px", marginLeft: "50px" }}>
            <Input placeholder="Website" style={{ borderRadius: "8px" }} />
            <br />
            <br />
            <Select
              style={{
                borderRadius: "8px",
                width: "100%",
              }}
              placeholder="Select Facility Management Company*"
            >
              <Option>None</Option>
              <Option>Company 1</Option>
              <Option>Company 2</Option>
            </Select>
            <br />
            <br />
            <Input
              placeholder="Mobile Number *"
              style={{ borderRadius: "8px" }}
            />

            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Select
                style={{
                  borderRadius: "8px",
                  width: "100%",
                }}
                placeholder="Select City *"
              >
                <Option>List Item 1</Option>
                <Option>List Item 2</Option>
              </Select>
              <Input
                placeholder="Pincode *"
                style={{ borderRadius: "8px", marginLeft: "50px" }}
              />
            </div>
            <br />

            <Input placeholder="Fax Number" style={{ borderRadius: "8px" }} />
          </div>
        </div>
        <Button
          onClick={handlePaymentSetup}
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
export default CreateProfile;
