import { useMutation } from '@apollo/client';
import createTask from "../../graphql/mutations/createTask";
import getLists from "../../graphql/queries/getLists";


const useCreateTask = () => {
    const [mutation, { data, error, loading }] = useMutation(createTask, {
        refetchQueries: [{ query: getLists }],
    });

    const create = async (title, id) => {
        await mutation({ variables: { input: { title, listId: +id } } });
    };

    return {
        create,
        data,
        error,
        loading,
    };
};

export default useCreateTask;