import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Query } from '@apollo/react-components';
import { withApollo, WithApolloClient } from "@apollo/react-hoc";

const SUBSCRIPTIONS_QUERY = gql`
  query Character($id: ID!) {
   character(id: $id) {
        id
        name
      }
    }
`;
interface MyProps {
  something: boolean;
}
class Sign extends React.Component<WithApolloClient<{}>> {
  runQuery() {
    this.props.client.query({
      query: SUBSCRIPTIONS_QUERY,
      variables: { "id":5 },
    }).then((data) => {
      console.log(data.data.character)
    });
  }

  render() { 
    return (
    <div onClick={() => this.runQuery()}>{"jkjk"}</div>
  );}
}

export default withApollo(Sign);

