import { Button, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const ThemeSetup = () => {
  let nav = useNavigate();
  const handleModulesSetup = () => {
    nav("/Screen5");
  };
  return (
    <>
      <div className="ThemeSetup">
        <h6>Theme Setup</h6>
        <p>
          Add information about the client to give them a personalized
          experience.
        </p>
        <TextField
          label="Primary Color"
          id="t1"
          defaultValue="#153AC7"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="./images/Icon Set1.png" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src="./images/Icon Set2.png" />
              </InputAdornment>
            ),
          }}
          style={{
            width: "71%",
            marginLeft: "50px",
            fontFamily: "Nunito Sans",
            fontStyle: "normal",
          }}
        />
        <p>Add Hex Value.</p>
        <br />
        <p
          style={{
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "19px",
            color: "#030037",
          }}
        >
          Login Theme
        </p>
        <p>Select the look and feel of the login page.</p>
        <Radio
          checked
          style={{
            color: "#030037",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            marginLeft: "50px",
          }}
        >
          Use Color
        </Radio>
        <br />
        <TextField
          id="t2"
          defaultValue="#F8F9FD"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src="./images/Icon Set3.png" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <img src="./images/Icon Set2.png" />
              </InputAdornment>
            ),
          }}
          style={{
            marginLeft: "70px",
            fontFamily: "Nunito Sans",
            fontStyle: "normal",
          }}
        />
        <br />
        <br />
        <p
          style={{
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "19px",
            color: "#030037",
          }}
        >
          Where Should be the login modal?
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "50px",
            position: "absolute",
            width: "120px",
            height: "84px",
          }}
        >
          <img src="./images/Left.png" />
          <img style={{ marginLeft: "20px" }} src="./images/Right.png" />
          <img style={{ marginLeft: "20px" }} src="./images/Center.png" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "80px" }}
        >
          <Radio.Group defaultValue={3}>
            <Radio value={1}>Left</Radio>
            <Radio value={2} style={{ marginLeft: "80px" }}>
              Right
            </Radio>
            <Radio value={3} style={{ marginLeft: "60px" }}>
              Center
            </Radio>
          </Radio.Group>
        </div>
        <br />
        <Button
          onClick={handleModulesSetup}
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
export default ThemeSetup;
