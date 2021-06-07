import React from "react";
import EditTaskForm from "../../molecules/EditTaksForm";
import {useParams} from "react-router-dom";
import useTask from "../../../hooks/query/useTask";
import ToDoListItem from "../../atoms/ToDoListItem";
import useUpdateTask from "../../../hooks/mutation/useUpdateTask";

export const EditPage = () => {

    const { id: id } = useParams();
    const {task} = useTask(id);
    const { edit } = useUpdateTask();

    return (
        <>
            <div>
                <ToDoListItem id={id} checked={false} info={task?.createdAt}>{task?.title} </ToDoListItem>
                <EditTaskForm onSubmit={edit} task={task}>

                </EditTaskForm>
            </div>
        </>
    )
}

export default EditPage;