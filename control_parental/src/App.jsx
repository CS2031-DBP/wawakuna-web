import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Create from "./pages/CreatePage"
import { Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Navigate to="/auth/login" replace={true} />}/>
        <Route path = "/auth/login" element ={<Login/>}/>
        <Route path = "/dashboard" element ={<Dashboard/>}/>
        <Route path = "/create/*" element = {<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

//https://reactrouter.com/en/main/components/navigate