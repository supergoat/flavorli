/* tslint:disable */
/* eslint-disable */
/* @relayHash 512cdfb7a9c18c0f59ca50ea54b4c6f6 */

import {ConcreteRequest} from 'relay-runtime';
export type useFetchRecipeQueryVariables = {
  id: string;
};
export type useFetchRecipeQueryResponse = {
  readonly recipe: {
    readonly id: string;
    readonly author: string;
    readonly name: string;
    readonly image: string;
    readonly preparationTime: number;
    readonly cookingTime: number;
    readonly portions: string;
    readonly difficulty: string;
    readonly ingredients: ReadonlyArray<{
      readonly qty: string;
      readonly name: string;
    }>;
  };
};
export type useFetchRecipeQuery = {
  readonly response: useFetchRecipeQueryResponse;
  readonly variables: useFetchRecipeQueryVariables;
};

/*
query useFetchRecipeQuery(
  $id: String!
) {
  recipe(id: $id) {
    id
    author
    name
    image
    preparationTime
    cookingTime
    portions
    difficulty
    ingredients {
      qty
      name
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
      name: 'name',
      args: null,
      storageKey: null,
    },
    v2 = [
      {
        kind: 'LinkedField',
        alias: null,
        name: 'recipe',
        storageKey: null,
        args: [
          {
            kind: 'Variable',
            name: 'id',
            variableName: 'id',
          },
        ],
        concreteType: 'Recipe',
        plural: false,
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
          v1 /*: any*/,
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
          {
            kind: 'LinkedField',
            alias: null,
            name: 'ingredients',
            storageKey: null,
            args: null,
            concreteType: 'Ingredient',
            plural: true,
            selections: [
              {
                kind: 'ScalarField',
                alias: null,
                name: 'qty',
                args: null,
                storageKey: null,
              },
              v1 /*: any*/,
            ],
          },
        ],
      },
    ];
  return {
    kind: 'Request',
    fragment: {
      kind: 'Fragment',
      name: 'useFetchRecipeQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v2 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchRecipeQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: v2 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchRecipeQuery',
      id: null,
      text:
        'query useFetchRecipeQuery(\n  $id: String!\n) {\n  recipe(id: $id) {\n    id\n    author\n    name\n    image\n    preparationTime\n    cookingTime\n    portions\n    difficulty\n    ingredients {\n      qty\n      name\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = '33c11122aba63fc79c0751f651ecf111';
export default node;
