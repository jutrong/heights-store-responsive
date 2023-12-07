import "./header.scss";
import logo from "../../asset/image/logo.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerWrap">
        <img className="headerLogo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
