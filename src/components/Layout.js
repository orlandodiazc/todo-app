import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="wrapper container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
