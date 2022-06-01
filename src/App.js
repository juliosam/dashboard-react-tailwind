import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Clients from "./pages/Clients";


const App = () => {

  return (
    <Router>
      <Navbar/>
      <div className="flex w-full h-screen">
        <Sidebar/>
        <div className="w-full bg-gray-200 font-bold">
          <Routes>
            <Route path="/" exact={true} element={<Home/>} />
            <Route path="/sales" exact={true} element={<Sales/>} />
            <Route path="/clients" exact={true} element={<Clients/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
