import gql from 'graphql-tag'

export const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            placeName
            amount
            username
            passport
            persons
        }
    }
`;