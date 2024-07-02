import Sidebar from "../components/SideBar";
import AllPadre from "../components/all/AllPadre";

const DashboardPadre = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow">
        <AllPadre />
      </div>
    </div>
  );
};

export default DashboardPadre;
