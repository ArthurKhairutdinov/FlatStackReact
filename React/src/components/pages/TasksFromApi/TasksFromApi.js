import useTasks from "../../../hooks/query/useTasks";
import ToDoList from "../../molecules/ToDoList";

const TaskPage = () => {

    const {tasks} = useTasks();
    console.log(tasks)
    return (
        <div>
            <ToDoList list={tasks}  />
        </div>
    )
}

export default TaskPage;