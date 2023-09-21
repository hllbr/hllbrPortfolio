import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query {
    projects {
      title
      id
      tags
      image {
        url
      }
      source
      createdBy {
        id
      }
      description
    }
  }
`;
