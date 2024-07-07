import Sidebar from "../components/SideBar";
import SalonList from "../components/list/SalonList";
import DialogSalon from "../components/table/dialog/DialogSalon";
import UploadPublicacion from "../components/upload/UploadPublicacion";

const DashboardSalones = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-10">
        <div className="flex flex-row">
          <span className='flex-1 sx'>Salones</span>
          <div className='flex-1 flex justify-end'>
            <DialogSalon/>
          </div>
        </div>
        <SalonList/>
      </div>
    </div>
  );
};

export default DashboardSalones;
