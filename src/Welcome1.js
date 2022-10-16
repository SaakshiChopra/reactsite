import { Button, Input, Tag } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./App.css";

const Welcome1 = () => {
  let nav = useNavigate();
  let [userName, setUserName] = useState();
  let [password1, setPassword] = useState();
  let user = {
    // email: "eve.holt@reqres.in",
    // password: "5cityslicka",
    email: userName,
    password: password1,
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    console.log(userName, " ", password1);
    try {
      const response = await axios.post("https://reqres.in/api/login", user);
      const data = response.data;
      console.log(data);

      if (data.token) {
        nav("./Screen1");
      }
    } catch (e) {
      toast.error("login unsuccessfull", { duration: 2000 });
    }
  };
  return (
    <>
      <div className="Page1">
        <div className="WelcomeForm">
          <h4> Welcome</h4>
          <p>Enter your Username and Password.</p>
          <br />
          <Input
            placeholder="Username"
            style={{ borderRadius: "8px" }}
            prefix={<img src="\images\Vector.png" />}
            onChange={handleUserName}
          />
          <br />
          <br />
          <Input.Password
            placeholder="Password"
            style={{ borderRadius: "8px" }}
            prefix={<img src="\images\pass.png" />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={handlePassword}
          />
          <br />
          <br />
          <Button
            style={{ backgroundColor: " #1334B3", color: "white" }}
            onClick={handleLogin}
            block
          >
            Login
          </Button>

          <Button type="text" block>
            Forgot Password?
          </Button>

          <p style={{ marginTop: "180px" }}>
            Terms of Use Privacy Policy
            <br />© Punctualiti 2022. All rights reserved
          </p>
        </div>
        <div className="WelcomeRight">
          <img
            src=".\images\Group 2.png"
            width="620px"
            height="506px"
            style={{ marginLeft: "175px", marginTop: "50px" }}
          />
          <h4>360° Solution for Asset Management</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};
export default Welcome1;
