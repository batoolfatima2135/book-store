import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>
    <Outlet />
  </div>
);
export default Navbar;
