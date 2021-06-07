import React from 'react'
import Task from "../../atoms/Task";
import CreateTaskForm from "../CreateTaskForm";

const TaskList = ({ list }) => {
    const { tasks, title, id } = list;

    return (
        <div>
            <title>{title}</title>
            <ul>
                {tasks.map(( task ) => (
                    <Task task={ task } />
                ))}
            </ul>
            <CreateTaskForm listId={id} />
        </div>
    );
}

export default TaskList;