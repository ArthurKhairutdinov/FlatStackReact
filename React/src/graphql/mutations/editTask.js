import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
    mutation editTask($input: EditTaskInput!) {
        editTask(input: $input) {
            ...TaskFragment
        }
    }
    ${task}
`;