import Sidebar from "../components/SideBar";
import AllProfesor from "../components/all/AllProfesor";


  const DashboardProfesor = () => {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow p-10 overflow-auto">
          <AllProfesor />
        </div>
      </div>
    );
};

export default DashboardProfesor;
