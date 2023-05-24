import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  
  const handleClick = (e, page) => {
    e.preventDefault();
    navigate("/" + page);
  };

  return (
    <div className="header">
      <div
        className="header-div header-left"
        onClick={(e) => handleClick(e, "home")}
      >
        ROSARIO SEMOLETTA
      </div>
      <div className="header-right">
        <div className="header-div" onClick={(e) => handleClick(e, "about")}>
          {" "}
          ABOUT{" "}
        </div>
        <div className="header-div" onClick={(e) => handleClick(e, "projects")}>
          {" "}
          PROJECTS{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
