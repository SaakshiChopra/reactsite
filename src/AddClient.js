import { Breadcrumb, Button } from "antd";

const AddClient = () => {
  return (
    <>
      <div className="AddClient">
        <p className="AddClientHeader">Add Client</p>
        <Breadcrumb>
          <Breadcrumb.Item>Client Master</Breadcrumb.Item>
          <Breadcrumb.Item>Add Client</Breadcrumb.Item>
          <Breadcrumb.Item>Create Profile</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};
export default AddClient;
