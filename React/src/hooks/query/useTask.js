import { useQuery } from "@apollo/client";
import getTask from "../../graphql/queries/getTask";

const useTask = id => {
    const taskId = +id;
    const { data, error, loading } = useQuery(getTask, {
        variables: { taskId }} );
    console.log(data?.task, error, id)
    return {
        task: data?.task || [],
        loading,
    }
}

export default useTask;