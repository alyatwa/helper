import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache()
const link = new HttpLink({
    uri:'https://rickandmortyapi.com/graphql',
     fetch
    })
const client = new ApolloClient({
  link,
  cache
});
/*client
  .query({
    query: gql`
      {
        characters(page: 2, filter: { name: "rick" }) {
            info {
              count
            }
            results {
              name
            }
          }
          character(id: 1) {
            id
          }
      }
    `
  })
  .then(result => console.log(result));*/

export default client;