import Sidebar from "../components/SideBar";
import SalonList from "../components/list/SalonList";

const DashboardSalones = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <SalonList/>
      </div>
    </div>
  );
};

export default DashboardSalones;
