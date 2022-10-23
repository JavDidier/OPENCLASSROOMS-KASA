// IMPORT UTILS
import React from "react";

// IMPORT STYLE
import "./Collapse.css";

// IMPORT IMAGE COLLAPSE
import collapseDown from "./CollapseDown.png";


// COMPONENT COLLAPSE
const Collapse = (props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <div className={"container-collapse "}>
      {/* équivalent à <div className={`container-collapse`}> */}

      <button className="collapse-btn">
        <div
          className="collapse-div "
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? true : false} {props.titleCollapse}
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
