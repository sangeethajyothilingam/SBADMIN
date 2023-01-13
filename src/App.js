import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import "./sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DomPlatform } from "chart.js";
import Login from "./Login.";
import Userlist from "./Userlist";
import Usercreate from "./Usercreate";
import Portal from "./Portal";
import { Chart } from "react-chartjs-2";
import Charts from "./Charts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="usercreate" element={<Usercreate />} />
          <Route path="charts" element={<Charts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
