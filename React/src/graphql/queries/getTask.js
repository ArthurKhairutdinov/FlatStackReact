import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
    query getTask($taskId: Int!) {
        task(id: $taskId) {
            ...TaskFragment
        }
    }
    ${task}
`;