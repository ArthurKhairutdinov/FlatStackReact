import {Link, useParams} from 'react-router-dom'
import routs from "../../../config/routes";
import React from "react";
import ToDoListItem from "../../atoms/ToDoListItem";
import useTask from "../../../hooks/query/useTask";
import useRemoveTask from "../../../hooks/mutation/useRemoveTask";

const TaskPage = () => {
    const { id: id } = useParams();
    const {task} = useTask(id);
    const {remove} = useRemoveTask();

    return (
        <>
            <div>
                <> <ToDoListItem id={id} isTask onRemove={remove} checked={false}
                                           info={task?.createdAt}>{task?.title} </ToDoListItem>
                    <div>
                    <Link  link={routs.LISTS}> Back </Link>
                    </div>
                </>

            </div>
        </>
    )
}


export default TaskPage;