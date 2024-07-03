import AllHijo from "../components/all/AllHijo";
import Sidebar from "../components/SideBar";

const DashboardHijo = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <AllHijo />
      </div>
    </div>
  );
};

export default DashboardHijo;
