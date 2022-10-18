import React from 'react';

// STYLE
import './Collapse.css';

// IMG BASE
import collapseDown from './CollapseDown.png';

const Collapse = ({ collapsed, children, textBtn }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

    textBtn  = "Générique";

    return (
    <div className="container-collapse">
        <button className="collapse-btn">
            <div className="collapse-div"
            onClick={() => setIsCollapsed(!isCollapsed)}
            >
            {isCollapsed ? true : false} {textBtn}
            <span className={`icon-collapse ${isCollapsed ? 'collapsed' : 'expanded'}`}>{<img src={collapseDown} alt="" />}</span>
            </div>
        </button>
        
        <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
    </div>

    );
  };


  export default Collapse;