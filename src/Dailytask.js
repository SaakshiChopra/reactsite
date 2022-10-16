import { FormControlLabel, FormGroup } from "@mui/material";
import { Button, Card } from "antd";
import { Checkbox } from "@mui/material";
import { Divider } from "antd";

const Dailytask = () => {
  return (
    <>
      <Card hoverable>
        <div className="Dailytask">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="./images/Icon Block.png"
              style={{ width: "48px", height: "48px", marginTop: "25px" }}
            />
            <div>
              <h6 className="DailyHeader">Daily Tasks</h6>
              <p className="DailyData">
                Select the sub modules that the client can use.
              </p>
            </div>
            <Button
              style={{
                backgroundColor: "#153AC7",
                color: "white",
                borderRadius: "5px",
                marginLeft: "200px",
                marginTop: "20px",
              }}
            >
              <img src="./images/Click.png" />
              &ensp; Visible to Client
            </Button>
          </div>
          <Divider />
          <div
            style={{
              marginLeft: "100px",
              width: "240px",
              fontFamily: "Nunito Sans",
              fontStyle: "normal",

              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#030037",
            }}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Show All Sub Modules"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Summary"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="View Tasks"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Create New Task"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      "&.Mui-checked": {
                        color: "#153AC7",
                      },
                    }}
                  />
                }
                label="Logbook"
              />
              <div style={{ marginLeft: "27px" }}>
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#153AC7",
                        },
                      }}
                    />
                  }
                  label="Daily"
                />
                <br />
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#153AC7",
                        },
                      }}
                    />
                  }
                  label="Activity Wise"
                />
              </div>
            </FormGroup>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Dailytask;
