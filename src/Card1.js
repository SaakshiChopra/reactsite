import { Button, Card } from "antd";
const { Meta } = Card;
const Card1 = ({ d }) => {
  return (
    <>
      <div className="Card1">
        <Card
          style={{
            width: "250px",
            marginLeft: "15px",
            marginTop: "30px",
            borderRadius: "15px",
          }}
          cover={
            <img
              src={d.imageLoc}
              style={{
                height: "96px",
                width: "96px",
                bordeRadius: "60px",
                marginLeft: "80px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          }
        >
          <div>
            <p
              style={{
                color: "#030037",
                fontWeight: "700",
                fontize: "18px",
                lineHeight: "24px",
              }}
            >
              {d.name}
            </p>

            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#686687",
              }}
            >
              {d.info}
            </p>
          </div>
          <Button type="link">{d.buttonData}</Button>
          <br />
          <Button type="text">View All</Button>
        </Card>
      </div>
    </>
  );
};
export default Card1;
