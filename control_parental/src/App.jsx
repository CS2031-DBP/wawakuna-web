import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Create from "./pages/Create"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/auth/login" element ={<Login/>}/>
        <Route path = "/dashboard" element ={<Dashboard/>}/>
        <Route path = "/create" element = {<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
