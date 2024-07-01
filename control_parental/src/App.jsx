import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Create from "./pages/CreatePage"
import { Navigate } from "react-router-dom"
import ResponsiveAppBar from "./components/NavBar"
import SalonDetail from "./pages/SalonDetail"

function App() {

  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route path = "/" element = {<Navigate to="/auth/login" replace={true} />}/>
        <Route path = "/auth/login" element ={<Login/>}/>
        <Route path = "/dashboard" element ={<Dashboard/>}/>
        <Route path = "/create/*" element = {<Create/>}/>
        <Route path = "/salon/:id" element = {<SalonDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

//https://reactrouter.com/en/main/components/navigate
//mvn spring-boot:run