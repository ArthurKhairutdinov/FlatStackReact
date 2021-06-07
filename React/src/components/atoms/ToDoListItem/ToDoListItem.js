import React from "react";
import {Link} from "react-router-dom";
import routes from "../../../config/routes";


const ToDoListItem = ({ checked, children, info, onRemove, id, isTask }) => (
    <li checked={ checked }>
        <h4>{children}</h4>
        <li> { info } </li>
        {isTask &&
        <>
            <Link to={routes.LISTS}><a onClick={() => onRemove(id)}>remove</a></Link>
            <Link to={`edit/${id}`}><a>edit</a></Link>
        </>
        }
    </li>
);

export default ToDoListItem;
