import {ApolloClient} from 'apollo-boost';
import gql from 'graphql-tag';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';

export const QUERY_CONDUCTS = gql`
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
      id
      description
      location
      startTime
      title
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

export const QUERY_ALL_SPEAKERS = gql`
  query {
    allSpeakers {
      id
      bio
      image
      name
      url
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
