import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import Card1 from "./Card1";
const { Meta } = Card;
let data = [
  {
    imageLoc: "./images/User1.png",
    name: "ISS Facility Services",
    info: "4 Clients",
    buttonData: "Add FCM",
  },
  {
    imageLoc: "./images/User2.png",
    name: "Infosys",
    info: "--",
    buttonData: "Add Client",
  },
  {
    imageLoc: "./images/User3.png",
    name: "Sites",
    info: "--",
    buttonData: "Go To Config",
  },
];

const Success = () => {
  let nav = useNavigate();
  const handleAddmore = () => {
    nav("/Screen2");
  };
  return (
    <>
      <div className="Success">
        <Card
          style={{
            position: "absolute",
            width: "84%",
            height: "88px",
            marginLeft: "10px",
            top: "100px",
            borderRadius: "15px",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src="./images/Success.png" />
              &ensp;&ensp;
              <h3>you have successfully added Infosys.</h3>
              <div style={{ marginLeft: "750px" }}>
                <Button type="link" style={{ color: "#153AC7" }}>
                  Go to Client Master
                </Button>
                <Button
                  onClick={handleAddmore}
                  style={{
                    backgroundColor: "#153AC7",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  Add More Clients
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",

            textAlign: "center",

            marginTop: "90px",
          }}
        >
          {data.map((item) => (
            <Card1 d={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Success;
