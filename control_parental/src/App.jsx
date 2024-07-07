import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import DashboardHijo from "./pages/DashboardHijo"
import Create from "./pages/CreatePage"
import { Navigate } from "react-router-dom"
import ResponsiveAppBar from "./components/NavBar"
import SalonDetail from "./pages/SalonDetail"
import DashboardPadre from "./pages/DashboardPadre"
import DashboardProfesor from "./pages/DashboardProfesor"
import DashboardSalones from "./pages/DashboardSalones"
import NotFound from "./pages/NotFound"



function App() {

  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path = "/" element = {<Navigate to="/auth/login" replace={true} />}/>
        <Route path = "/auth/login" element ={<Login/>}/>
        <Route path = "/dashboard" element ={<Navigate to="/dashboard/salones" replace={true} />}/>
        <Route path = "/dashboard/hijos" element ={<DashboardHijo/>}/>
        <Route path = "/dashboard/padres" element ={<DashboardPadre/>}/>
        <Route path = "/dashboard/profesores" element ={<DashboardProfesor/>}/>
        <Route path = "/dashboard/salones" element ={<DashboardSalones/>}/>
        <Route path = "/*" element = {<NotFound/>}/>

        <Route path = "/create/*" element = {<Create/>}/>
        <Route path = "/salon/:id/:name" element = {<SalonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

//https://reactrouter.com/en/main/components/navigate
//mvn spring-boot:run