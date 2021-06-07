import { gql } from '@apollo/client';

export default gql`
    mutation createList($input: CreateListInput!) {
        createList(input: $input) {
            title
            id
        }
    }
`;