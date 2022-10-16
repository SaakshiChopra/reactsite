import { Checkbox } from "@mui/material";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dailytask from "./Dailytask";

const ModuleSetup = () => {
  let nav = useNavigate();
  const handleSuccess = () => {
    nav("/Screen6");
  };

  return (
    <>
      <div className="ModuleSetup">
        <h6>Module Setup</h6>
        <p>Select the modules that the client can use..</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "240px",

              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#030037",
              marginLeft: "70px",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Home / Dashboard"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Helpdesk"
              />
              <Button
                className="b1"
                type="text"
                style={{
                  borderRadius: "5px",
                  textAlign: "left",
                  height: "50px",
                  marginLeft: "-10px",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#030037",
                }}
              >
                <Checkbox
                  defaultChecked
                  style={{ marginLeft: "-15px" }}
                  sx={{
                    color: "#153AC7",
                    "&.Mui-checked": {
                      color: "#153AC7",
                    },
                  }}
                />
                Assets&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&gt;
              </Button>
              <Button
                className="b1"
                type="text"
                style={{
                  borderRadius: "5px",
                  textAlign: "left",
                  height: "50px",
                  marginLeft: "-10px",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#030037",
                }}
              >
                <Checkbox
                  defaultChecked
                  style={{ marginLeft: "-15px" }}
                  sx={{
                    color: "#153AC7",
                    "&.Mui-checked": {
                      color: "#153AC7",
                    },
                  }}
                />
                Daily Tasks&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&gt;
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="PPM"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Employees"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Profile"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#153AC7",
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Transactions"
              />
            </FormGroup>
          </div>
          <br />
          <br />
          <div style={{ marginLeft: "50px", width: "900px", height: "400px" }}>
            <Dailytask />
          </div>
        </div>
        <br />
        <Button
          onClick={handleSuccess}
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
export default ModuleSetup;
