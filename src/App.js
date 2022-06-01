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
      <div className="flex">
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path="/" exact={true} component={Home} />
            <Route path="/sales" exact={true} component={Sales} />
            <Route path="/clients" exact={true} component={Clients} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
