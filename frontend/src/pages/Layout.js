import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
          <NavBar/>

          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ContactForm/>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;