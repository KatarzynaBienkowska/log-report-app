import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const Navbar = () => (
  <nav className="bg-blue-400 flex justify-between py-4 px-20 text-lg text-white font-medium items-center">
    <Link to="/" className="text-3xl">
      Log Report
    </Link>
    <div className="space-x-14 flex">
      <CustomLink to="/">Add New Log</CustomLink>
      <CustomLink to="/searchLogs">Search For Logs</CustomLink>
    </div>
  </nav>
);

export default Navbar;
