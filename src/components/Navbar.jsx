import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <div className="panel-bg row align-items-center my-4">
      <span className="Bookstore-CMS Text-Style-3 col-3">
        Bookstore CMS
      </span>
      <span className="BOOKS Text-Style-6 col-1">
        <NavLink className="link" to="/">BOOKS</NavLink>
      </span>
      <span className="CATEGORIES Text-Style-6 col-2">
        <NavLink className="link" to="/categories">CATEGORIES</NavLink>
      </span>
      <span className="col-1 ms-auto">
        <div className="Oval d-flex align-items-center justify-content-center rounded-circle">
          <i className="fas fa-user" />
        </div>
      </span>
    </div>
    <Outlet />
  </div>
);
export default Navbar;
