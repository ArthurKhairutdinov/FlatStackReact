import { useMutation } from '@apollo/client';
import getLists from '../../graphql/queries/getLists';
import createList from '../../graphql/mutations/createList';

const useRemoveTask = () => {
    const [mutation, { data, error, loading }] = useMutation(createList, {
        refetchQueries: [{ query: getLists }],
    });

    const create = async ( title ) => {
        await mutation({ variables: { input: { title } } });
    };

    return {
        create,
        data,
        error,
        loading,
    };
};

export default useRemoveTask;