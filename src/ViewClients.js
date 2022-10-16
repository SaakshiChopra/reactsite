import { Breadcrumb } from "antd";

import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DownOutlined, VerticalAlignBottomOutlined } from "@ant-design/icons";
import Table1 from "./Table1";

const ViewClients = () => {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <div className="ViewClient">
        <p className="ViewClientHeader">View Clients</p>
        <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>View Clients</Breadcrumb.Item>
        </Breadcrumb>
        <br />
        <div
          style={{
            width: "82%",
            height: "62px",
            background: "#FFFFFF",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: "400px", borderRadius: "8px", marginLeft: "5px" }}
            onChange={onSearch}
          />
          <Button style={{ marginLeft: "850px" }}>
            Columns
            <DownOutlined />
          </Button>

          <Button type="link">
            <VerticalAlignBottomOutlined />
            Export
          </Button>
        </div>
        <Table1 />
      </div>
    </>
  );
};
export default ViewClients;
