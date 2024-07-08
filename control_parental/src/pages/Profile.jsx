import PatchAdmin from "../components/patch/PatchAdmin";
import Sidebar from "../components/SideBar";



const Profile = () => {
    return (
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-grow p-10">
            <PatchAdmin/>
          </div>
        </div>
      );
}


export default Profile;