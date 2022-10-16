import { Route, Routes } from "react-router-dom";
import AddClient from "./AddClient";
import CreateProfile from "./CreateProfile";
import ModuleSetup from "./ModuleSetup";
import PaymentSetup from "./PaymentSetup";
import Success from "./Success";
import ThemeSetup from "./ThemeSetup";
import VerticalMenu from "./VerticalMenu";
import ViewClients from "./ViewClients";
import Welcome1 from "./Welcome1";
import toast, { Toaster } from "react-hot-toast";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";

const Home = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Welcome1 />} />
        <Route path="/Screen1" element={<Screen1 />} />
        <Route path="/Screen2" element={<Screen2 />} />
        <Route path="/Screen3" element={<Screen3 />} />
        <Route path="/Screen4" element={<Screen4 />} />
        <Route path="/Screen5" element={<Screen5 />} />
        <Route path="/Screen6" element={<Screen6 />} />
      </Routes>
    </>
  );
};
export default Home;
