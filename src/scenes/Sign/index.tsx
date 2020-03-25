import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
const GET_DOG_PHOTO = gql`
  query Character($id: ID!) {
   character(id: $id) {
        id
        name
        image
      }
    }
`;
//https://egghead.io/lessons/react-use-uselazyquery-to-manually-execute-a-query-with-apollo-react-hooks
export default function DelayedQuery() {
  //const [character, setDog] = useState(null);
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return <p>Loading ...</p>;


  return (
    <div>
      {data && data.character ? (data.character.name) :null }
      <button onClick={() => getDog({ variables: { id: 5 } })}>
        Click me!
      </button>
    </div>
  );
}