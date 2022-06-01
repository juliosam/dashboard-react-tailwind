import { Link } from "react-router-dom";

const Sidebar = () => {
  return ( 
    <div className="sidebar w-64 bg-gray-200">
      <ul>
        <li className="my-2">
          <Link to="/">Inicio</Link>
        </li>
        <li className="my-2">
          <Link to="/sales">Ventas</Link>
        </li>
        <li className="my-2 ">
          <Link to="/clients">Clientes</Link>
        </li>
      </ul>
    </div>
   );
}
 
export default Sidebar;