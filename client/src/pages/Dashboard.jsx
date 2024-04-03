import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='dashboard-page navbar'>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
