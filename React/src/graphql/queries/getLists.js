import { gql } from '@apollo/client';
import task from '../fragments/task';

export default gql`
    query getLists {
        lists {
            title
            id
            tasks {
                ...TaskFragment
            }
        }
    }
    ${task}
`;