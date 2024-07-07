import Sidebar from "../components/SideBar";
import AllPadre from "../components/all/AllPadre";

const DashboardPadre = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-10">
        <AllPadre />
      </div>
    </div>
  );
};

export default DashboardPadre;
