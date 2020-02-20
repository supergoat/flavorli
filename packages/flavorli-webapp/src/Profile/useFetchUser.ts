import {useQuery} from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';
import {IUser} from '../types';
import {useParams} from 'react-router';

const useFetchUserQuery = graphql`
  query useFetchUserQuery($id: String!) {
    user(id: $id) {
      id
      lastName
      email
      cookbooks {
        id
        recipes {
          id
          image
        }
      }
    }
  }
`;

function useFetchUser() {
  const {profileId} = useParams();

  const data = useQuery(
    useFetchUserQuery,
    {id: profileId},
    {
      fetchPolicy: 'store-or-network', //default
      networkCacheConfig: undefined,
    },
  );

  const error = data.error;
  const props = data.props as {user: IUser};

  let result = {
    loading: false,
    user: null,
    error: null,
  };

  const user = props?.user;

  if (user) {
    return {
      ...result,
      user,
    };
  } else if (error) {
    return {
      ...result,
      error,
    };
  }
  return {
    ...result,
    loading: true,
  };
}

export default useFetchUser;
