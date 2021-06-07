import { useMutation } from '@apollo/client';
import getLists from '../../graphql/queries/getLists';
import removeTask from '../../graphql/mutations/removeTask';

const useRemoveTask = () => {
    const [mutation, { data, error, loading }] = useMutation(removeTask, {
        refetchQueries: [{ query: getLists }],
    });

    const remove = async (id) => {
        await mutation({ variables: { input: { id } } });
    };

    return {
        remove,
        data,
        error,
        loading,
    };
};

export default useRemoveTask;