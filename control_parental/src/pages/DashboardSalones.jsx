import Sidebar from "../components/SideBar";
import SalonList from "../components/list/SalonList";
import DialogSalon from "../components/table/dialog/DialogSalon";

const DashboardSalones = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-10 overflow-auto">
        <div className="flex flex-row items-center justify-between">
          <span className="text-xl font-semibold">Salones</span>
          <DialogSalon />
        </div>
        <SalonList />
      </div>
    </div>
  );
};

export default DashboardSalones;
