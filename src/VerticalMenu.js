import { Button, Input } from "antd";

import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

const VerticalMenu = () => {
  let nav = useNavigate();
  const handleViewClients = () => {
    nav("/Screen1");
  };
  const handleAddClients = () => {
    nav("/Screen2");
  };
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="VerticalMenu">
        <h3>Company name</h3>

        <Input
          placeholder="Search modules"
          prefix={<SearchOutlined />}
          style={{ width: 200, borderRadius: "8px" }}
          onChange={onSearch}
        />
        <br />
        <br />
        <h4>CLIENT MASTER</h4>
        <Button type="text" onClick={handleViewClients}>
          View Clients
        </Button>
        <br />
        <Button type="text" onClick={handleAddClients}>
          Add Client
        </Button>
      </div>
    </>
  );
};
export default VerticalMenu;
