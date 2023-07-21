import { Outlet, Link } from "react-router-dom";
import "./Social.css";
const Layout = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
         
   <p>         <Link to="/" className="Link">Home</Link> </p>
         
   <p>     <Link to="/about" className="Link">About</Link> </p>
        
            <p>  <Link to="/contact" className="Link">Contact</Link> </p>
        
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;