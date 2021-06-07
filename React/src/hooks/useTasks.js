import { useQuery } from '@apollo/client';
import getTodos from '../graphql/getTasks';

const useTasks = () => {
    const { data, loading, error } = useQuery(getTodos);

    return {
        tasks: data?.tasks,
        loading,
        error,
    };
};

export default useTasks;
