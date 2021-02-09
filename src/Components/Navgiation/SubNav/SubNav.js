import React from 'react'

import "./SubNav.css";

/* Here i am using SVG with No Image Tag */
import {ReactComponent as Add} from "../../../assets/Add.svg";

const SubNav = (props) => {
    return (
        <div className="subnav">
            <div className="action" onClick={props.openModel}>  
                <Add className="addIcon" />
                <div>Add New Task</div>
            </div>
        </div>
    )
}

export default SubNav;
