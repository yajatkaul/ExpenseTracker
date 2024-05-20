import { gql } from "@apollo/client";

export const GET_AUTHENTICATETED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`;
