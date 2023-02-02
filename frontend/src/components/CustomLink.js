import { Link, useResolvedPath, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

const CustomLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={`hover:text-gray-600 ${isActive ? "text-gray-300" : ""}`}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};

export default CustomLink;
