import AllHijo from "../components/all/AllHijo";
import AllPadre from "../components/all/AllPadre";
import AllProfesor from "../components/all/AllProfesor";
import SalonList from "../components/list/SalonList";
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
