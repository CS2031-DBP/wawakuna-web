import Sidebar from "../components/SideBar";
import SalonCard from "../components/card/SalonCard";

const DashboardSalones = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <SalonCard />
      </div>
    </div>
  );
};

export default DashboardSalones;
