import { Table, Dropdown, Menu, Image, Button } from "antd";

import { Pagination } from "antd";
const Table1 = () => {
  const onMenuClick = (e) => {
    console.log("click", e);
  };
  const menu = (
    <Menu
      onClick={onMenuClick}
      items={[
        {
          key: "1",
          label: "View Details",
        },
        {
          key: "2",
          label: "Edit",
        },
        {
          key: "3",
          label: "Block Access",
        },
        {
          key: "4",
          label: "Delete",
        },
      ]}
    />
  );
  const columns = [
    {
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Company Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Contact Person",
      dataIndex: "person",
      key: "person",
    },
    {
      title: "Facilitator",
      dataIndex: "facilitator",
      key: "facilitator",
    },
    {
      title: "Sities",
      dataIndex: "sities",
      key: "sities",
    },
    {
      title: "Tenants",
      dataIndex: "tenants",
      key: "tenants",
    },
    {
      title: "Tenants Groups",
      dataIndex: "tenantsgroups",
      key: "tenantsgroups",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  const data = [
    {
      key: "1",
      image: <Image src="./images/cn1.png" />,
      name: "Infosys",
      email: "management@infosys.com",
      phone: "+91 9563214587",
      person: "Vijayent Roy ",
      facilitator: "--",
      sities: "12",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "2",
      image: <Image src="./images/cn2.png" />,
      name: "Wipro",
      email: "management@wipro.com",
      phone: "+91 9834687423",
      person: "Kalpit Soni ",
      facilitator: "--",
      sities: "8",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "3",
      image: <Image src="./images/cn3.png" />,
      name: "Accenture ",
      email: "management@accenture .com",
      phone: "+91 8732654789",
      person: "Drishti Sane",
      facilitator: "--",
      sities: "4",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "4",
      image: <Image src="./images/cn4.png" />,
      name: "Capgemini ",
      email: "management@capgemini  .com",
      phone: "+91 8432657995",
      person: "Aisha Keer ",
      facilitator: "--",
      sities: "6",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "5",
      image: <Image src="./images/cn5.png" />,
      name: "Lodha",
      email: "management@lodha.com",
      phone: "+91 9642357894",
      person: "Kanika Khare",
      facilitator: "--",
      sities: "24",
      tenants: "16",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "6",
      image: <Image src="./images/cn6.png" />,
      name: "Tata Consultancy Services",
      email: "management@tcs.com",
      phone: "+91 9632457468",
      person: "Prabhat Rao ",
      facilitator: "--",
      sities: "10",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "7",
      image: <Image src="./images/cn7.png" />,
      name: "HCL",
      email: "management@hcl.com",
      phone: "+91 9452136487",
      person: "Venkat Pant",
      facilitator: "--",
      sities: "5",
      tenants: "2",
      tenantsgroups: "1",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "8",
      image: <Image src="./images/cn8.png" />,
      name: "Redington ",
      email: "management@redington.com",
      phone: "+91 9326571865",
      person: "Samir Yadav",
      facilitator: "--",
      sities: "1",
      tenants: "1",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "9",
      image: <Image src="./images/cn9.png" />,
      name: "Mphasis",
      email: "management@mphasis.com",
      phone: "+91 9874621547",
      person: "Sweta Chawla",
      facilitator: "--",
      sities: "1",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
    {
      key: "10",
      image: <Image src="./images/cn10.png" />,
      name: "Larsen & Toubro",
      email: "management@larsentoubro.com",
      phone: "+91 9547154964",
      person: "Abhishek Kumar",
      facilitator: "--",
      sities: "16",
      tenants: "--",
      tenantsgroups: "--",
      action: <Dropdown.Button overlay={menu} />,
    },
  ];
  return (
    <>
      <div className="Table1">
        <Table
          size="small"
          pagination={false}
          columns={columns}
          dataSource={data}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Pagination defaultCurrent={1} total={49} />
          <div style={{ marginLeft: "750px" }}>
            <Button type="text">Previous</Button>
            <Button type="text">Next</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table1;
