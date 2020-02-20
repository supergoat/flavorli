/* tslint:disable */
/* eslint-disable */
/* @relayHash 4d62ba8aea0441ad0d44d53577b8a83e */

import {ConcreteRequest} from 'relay-runtime';
export type useFetchUserQueryVariables = {
  id: string;
};
export type useFetchUserQueryResponse = {
  readonly user: {
    readonly id: string;
    readonly lastName: string | null;
    readonly email: string | null;
    readonly cookbooks: ReadonlyArray<{
      readonly id: string;
      readonly recipes: ReadonlyArray<{
        readonly id: string | null;
        readonly image: string | null;
      }>;
    }>;
  };
};
export type useFetchUserQuery = {
  readonly response: useFetchUserQueryResponse;
  readonly variables: useFetchUserQueryVariables;
};

/*
query useFetchUserQuery(
  $id: String!
) {
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
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: 'LocalArgument',
        name: 'id',
        type: 'String!',
        defaultValue: null,
      },
    ],
    v1 = {
      kind: 'ScalarField',
      alias: null,
      name: 'id',
      args: null,
      storageKey: null,
    },
    v2 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'user',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'id',
            variableName: 'id',
          },
        ],
        concreteType: 'User',
        plural: false,
        selections: [
          v1 /*: any*/,
          {
            kind: 'ScalarField',
            alias: null,
            name: 'lastName',
            args: null,
            storageKey: null,
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'email',
            args: null,
            storageKey: null,
          },
          {
            kind: 'LinkedField',
            alias: null,
            name: 'cookbooks',
            storageKey: null,
            args: null,
            concreteType: 'Cookbook',
            plural: true,
            selections: [
              v1 /*: any*/,
              {
                kind: 'LinkedField',
                alias: null,
                name: 'recipes',
                storageKey: null,
                args: null,
                concreteType: 'Recipe',
                plural: true,
                selections: [
                  v1 /*: any*/,
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'image',
                    args: null,
                    storageKey: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'useFetchUserQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v2 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchUserQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: v2 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchUserQuery',
      id: null,
      text:
        'query useFetchUserQuery(\n  $id: String!\n) {\n  user(id: $id) {\n    id\n    lastName\n    email\n    cookbooks {\n      id\n      recipes {\n        id\n        image\n      }\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = '84e2d7e18def059e7b34978ea820c442';
export default node;
