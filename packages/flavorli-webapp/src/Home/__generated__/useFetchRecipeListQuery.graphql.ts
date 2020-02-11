/* tslint:disable */
/* eslint-disable */
/* @relayHash 89f99c426640739d4390cce9ce5d5ff4 */

import {ConcreteRequest} from 'relay-runtime';
export type useFetchRecipeListQueryVariables = {};
export type useFetchRecipeListQueryResponse = {
  readonly recipes: ReadonlyArray<{
    readonly id: string | null;
    readonly author: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly preparationTime: number | null;
    readonly cookingTime: number | null;
    readonly portions: string | null;
    readonly difficulty: string | null;
  }>;
};
export type useFetchRecipeListQuery = {
  readonly response: useFetchRecipeListQueryResponse;
  readonly variables: useFetchRecipeListQueryVariables;
};

/*
query useFetchRecipeListQuery {
  recipes {
    id
    author
    name
    image
    preparationTime
    cookingTime
    portions
    difficulty
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
    {
      kind: 'LinkedField',
      alias: null,
      name: 'recipes',
      storageKey: null,
      args: null,
      concreteType: 'Recipe',
      plural: true,
      selections: [
        {
          kind: 'ScalarField',
          alias: null,
          name: 'id',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'author',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'name',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'image',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'preparationTime',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'cookingTime',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'portions',
          args: null,
          storageKey: null,
        },
        {
          kind: 'ScalarField',
          alias: null,
          name: 'difficulty',
          args: null,
          storageKey: null,
        },
      ],
    },
  ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'useFetchRecipeListQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchRecipeListQuery',
      argumentDefinitions: [],
      selections: v0 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchRecipeListQuery',
      id: null,
      text:
        'query useFetchRecipeListQuery {\n  recipes {\n    id\n    author\n    name\n    image\n    preparationTime\n    cookingTime\n    portions\n    difficulty\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = 'cdbf3246c4ead59b049c08e6520e341e';
export default node;
