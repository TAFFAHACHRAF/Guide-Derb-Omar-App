import { ReactComponent as LogoDark } from "../assets/images/logos/an7ys-nlmg7.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/dachbord/starter">
      <LogoDark />
    </Link>
  );
};

export default Logo;
