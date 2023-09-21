import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmjj5zgu06i901rt8olp14ac/master', // GraphQL API URL
  cache: new InMemoryCache(),
});

export default client;