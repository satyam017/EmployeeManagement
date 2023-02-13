import "./App.css";
import Login from "./component/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Protected from "./component/protected/Protected";
import User from "./component/User/User";
import Attendance from "./component/attendance/Attendance";
import SideBar from "./component/sidebar/SideBar";
import { ThemeContext } from "./component/context/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? "dark" : ""}>

      <BrowserRouter>
        {window.localStorage.getItem("login") === "true" ? <SideBar /> : ""}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Protected Cmp={Dashboard} />} />
          <Route path="/attendance" element={<Protected Cmp={Attendance} />} />
          <Route path="/users" element={<Protected Cmp={User} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
