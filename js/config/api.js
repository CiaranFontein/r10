import {ApolloClient} from 'apollo-boost';
import gql from 'graphql-tag';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

export const QUERY_ALL_CONDUCTS = gql`
  query getAllConducts($order: ConductOrderByInput) {
    allConducts(orderBy: $order) {
      id
      description
      title
      order
    }
  }
`;

export const QUERY_ALL_SESSIONS = gql`
  query {
    allSessions {
      startTime
      title
      location
    }
  }
`;

export const QUERY_ALL_SPEAKERS = gql`
  query {
    allSpeakers {
      id
      name
      session
    }
  }
`;

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://r10.academy.red/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

export default new ApolloClient({
  link,
  cache,
});
