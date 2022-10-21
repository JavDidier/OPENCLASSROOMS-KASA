import React from "react";

// STYLE
import "./Collapse.css";

// IMG BASE
import collapseDown from "./CollapseDown.png";

const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <div className={"container-collapse " + props.className}>
      {/* <div className={`container-collapse ${props.className}`}> */}

      <button className="collapse-btn">
        <div
          className="collapse-div "
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? true : false} {props.textBtn}
          <span
            className={`icon-collapse ${
              isCollapsed ? "collapsed" : "expanded"
            }`}
          >
            {<img src={collapseDown} alt="" />}
          </span>
        </div>
      </button>

      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        <p>{props.children}</p>
      </div>
    </div>
  );
};

export default Collapse;
