import React, { useState, useCallback } from 'react'
import CheckBox from "../Checkbox";
import {Link} from "react-router-dom";

export const Task = ( { task } ) => {
    const { title, id } = task;
    const [check, setCheck] = useState(false);

    const handleCheck = useCallback(() => {
        setCheck(!check);
    }, [check]);

    return(
        <Task check={check}>
            <CheckBox onChange={handleCheck} />
            <Link to={`tasks/${id}`}>
                <span>{title}</span>
            </Link>
        </Task>
    )
}

export default Task;