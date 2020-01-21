/* tslint:disable */
/* eslint-disable */
/* @relayHash 1c1ba4695d512ca8b366cb6bc9755947 */

import {ConcreteRequest} from 'relay-runtime';
export type useFetchRecipeQueryVariables = {
  id: string;
};
export type useFetchRecipeQueryResponse = {
  readonly recipe: {
    readonly id: string | null;
    readonly author: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly preparation: number | null;
    readonly cooking: number | null;
    readonly portions: string | null;
    readonly difficulty: string | null;
    readonly tasks: ReadonlyArray<{
      readonly name: string | null;
      readonly ingredients: ReadonlyArray<{
        readonly qty: string | null;
        readonly name: string | null;
      } | null> | null;
      readonly steps: ReadonlyArray<string | null> | null;
    } | null> | null;
  } | null;
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
    preparation
    cooking
    portions
    difficulty
    tasks {
      name
      ingredients {
        qty
        name
      }
      steps
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
            name: 'preparation',
            args: null,
            storageKey: null,
          },
          {
            kind: 'ScalarField',
            alias: null,
            name: 'cooking',
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
            name: 'tasks',
            storageKey: null,
            args: null,
            concreteType: 'Task',
            plural: true,
            selections: [
              v1 /*: any*/,
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
              {
                kind: 'ScalarField',
                alias: null,
                name: 'steps',
                args: null,
                storageKey: null,
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
        'query useFetchRecipeQuery(\n  $id: String!\n) {\n  recipe(id: $id) {\n    id\n    author\n    name\n    image\n    preparation\n    cooking\n    portions\n    difficulty\n    tasks {\n      name\n      ingredients {\n        qty\n        name\n      }\n      steps\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = 'e6900f6f4aba2cdf693f918516adb239';
export default node;
