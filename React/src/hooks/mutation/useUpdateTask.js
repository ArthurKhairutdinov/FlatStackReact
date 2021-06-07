import { useMutation } from '@apollo/client';
import getLists from '../../graphql/queries/getLists';
import editTask from '../../graphql/mutations/editTask';

const useUpdateTask = () => {
    const [mutation, { data, error, loading }] = useMutation(editTask, {
        refetchQueries: [{ query: getLists }],
    });

    const edit = async (id, title) => {
        await mutation({ variables: { input: { id, title } } });
    };

    return {
        edit,
        data,
        error,
        loading,
    };
};

export default useUpdateTask;