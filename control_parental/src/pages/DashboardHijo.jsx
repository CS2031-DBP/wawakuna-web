import AllHijo from "../components/all/AllHijo";
import Sidebar from "../components/SideBar";

const DashboardHijo = () => {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <div className="flex-grow p-10">
        <AllHijo />
      </div>
    </div>
  );
};

export default DashboardHijo;
