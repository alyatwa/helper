import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "@apollo/react-hoc";

const HERO_QUERY = gql`
query Character($id: ID!) {
 character(id: $id) {
      id
      name
    }
  }
`;

type Character = {
  name: string;
  id: number;
};

type Response = {
  character: Character;
};

type Variables = {
  id: number;
};

type ChildProps = ChildDataProps<{}, Response, Variables>;
//Typing Higher Order Components

// Note that the first parameter here is an empty Object, which means we're
// not checking incoming props for type safety in this example. The next
// example (in the "Options" section) shows how the type safety of incoming
// props can be ensured.
const withCharacter = graphql<{}, Response, Variables, ChildProps>(HERO_QUERY, {
  options: () => ({
    variables: { id:4 }
  })
});

export default withCharacter(({ data: { loading,character, error } }) => {
  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;
  return (
    <div>{JSON.stringify(character)}</div>
  );
});