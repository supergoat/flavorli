/* tslint:disable */
/* eslint-disable */
/* @relayHash 0cb79d3e784b189d410123ad9fd5a440 */

import {ConcreteRequest} from 'relay-runtime';
export type useFetchStepByStepRecipeQueryVariables = {
  id: string;
};
export type useFetchStepByStepRecipeQueryResponse = {
  readonly recipe: {
    readonly id: string | null;
    readonly author: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly video: string | null;
    readonly preparationTime: number | null;
    readonly cookingTime: number | null;
    readonly portions: string | null;
    readonly difficulty: string | null;
    readonly notes: ReadonlyArray<string | null> | null;
    readonly ingredients: ReadonlyArray<{
      readonly for: string | null;
      readonly list: ReadonlyArray<{
        readonly name: string | null;
        readonly qty: string | null;
        readonly notes: string | null;
        readonly link: string | null;
      } | null> | null;
    } | null> | null;
    readonly items: ReadonlyArray<{
      readonly name: string | null;
      readonly qty: string | null;
      readonly notes: string | null;
      readonly link: string | null;
    } | null> | null;
    readonly steps: ReadonlyArray<{
      readonly for: string | null;
      readonly heatLevel: string | null;
      readonly ovenTemperature: string | null;
      readonly links: ReadonlyArray<{
        readonly from: number;
        readonly name: string;
        readonly timerId: string | null;
      } | null> | null;
      readonly notes: ReadonlyArray<string | null> | null;
      readonly video: string | null;
      readonly images: ReadonlyArray<{
        readonly src: string;
        readonly alt: string | null;
      } | null> | null;
      readonly tasks: ReadonlyArray<{
        readonly name: string;
        readonly notes: ReadonlyArray<string | null> | null;
        readonly timer: {
          readonly id: string;
          readonly name: string;
          readonly minutes: number;
          readonly seconds: number;
        } | null;
      } | null> | null;
    } | null> | null;
  };
};
export type useFetchStepByStepRecipeQuery = {
  readonly response: useFetchStepByStepRecipeQueryResponse;
  readonly variables: useFetchStepByStepRecipeQueryVariables;
};

/*
query useFetchStepByStepRecipeQuery(
  $id: String!
) {
  recipe(id: $id) {
    id
    author
    name
    image
    video
    preparationTime
    cookingTime
    portions
    difficulty
    notes
    ingredients {
      for
      list {
        name
        qty
        notes
        link
      }
    }
    items {
      name
      qty
      notes
      link
    }
    steps {
      for
      heatLevel
      ovenTemperature
      links {
        from
        name
        timerId
      }
      notes
      video
      images {
        src
        alt
      }
      tasks {
        name
        notes
        timer {
          id
          name
          minutes
          seconds
        }
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
    v2 = {
      kind: 'ScalarField',
      alias: null,
      name: 'name',
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: 'ScalarField',
      alias: null,
      name: 'video',
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: 'ScalarField',
      alias: null,
      name: 'notes',
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: 'ScalarField',
      alias: null,
      name: 'for',
      args: null,
      storageKey: null,
    },
    v6 = [
      v2 /*: any*/,
      {
        kind: 'ScalarField',
        alias: null,
        name: 'qty',
        args: null,
        storageKey: null,
      },
      v4 /*: any*/,
      {
        kind: 'ScalarField',
        alias: null,
        name: 'link',
        args: null,
        storageKey: null,
      },
    ],
    v7 = [
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
          v1 /*: any*/,
          {
            kind: 'ScalarField',
            alias: null,
            name: 'author',
            args: null,
            storageKey: null,
          },
          v2 /*: any*/,
          {
            kind: 'ScalarField',
            alias: null,
            name: 'image',
            args: null,
            storageKey: null,
          },
          v3 /*: any*/,
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
          v4 /*: any*/,
          {
            kind: 'LinkedField',
            alias: null,
            name: 'ingredients',
            storageKey: null,
            args: null,
            concreteType: 'Ingredient',
            plural: true,
            selections: [
              v5 /*: any*/,
              {
                kind: 'LinkedField',
                alias: null,
                name: 'list',
                storageKey: null,
                args: null,
                concreteType: 'IngredientItem',
                plural: true,
                selections: v6 /*: any*/,
              },
            ],
          },
          {
            kind: 'LinkedField',
            alias: null,
            name: 'items',
            storageKey: null,
            args: null,
            concreteType: 'Item',
            plural: true,
            selections: v6 /*: any*/,
          },
          {
            kind: 'LinkedField',
            alias: null,
            name: 'steps',
            storageKey: null,
            args: null,
            concreteType: 'Step',
            plural: true,
            selections: [
              v5 /*: any*/,
              {
                kind: 'ScalarField',
                alias: null,
                name: 'heatLevel',
                args: null,
                storageKey: null,
              },
              {
                kind: 'ScalarField',
                alias: null,
                name: 'ovenTemperature',
                args: null,
                storageKey: null,
              },
              {
                kind: 'LinkedField',
                alias: null,
                name: 'links',
                storageKey: null,
                args: null,
                concreteType: 'Link',
                plural: true,
                selections: [
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'from',
                    args: null,
                    storageKey: null,
                  },
                  v2 /*: any*/,
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'timerId',
                    args: null,
                    storageKey: null,
                  },
                ],
              },
              v4 /*: any*/,
              v3 /*: any*/,
              {
                kind: 'LinkedField',
                alias: null,
                name: 'images',
                storageKey: null,
                args: null,
                concreteType: 'Image',
                plural: true,
                selections: [
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'src',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'alt',
                    args: null,
                    storageKey: null,
                  },
                ],
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
                  v2 /*: any*/,
                  v4 /*: any*/,
                  {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'timer',
                    storageKey: null,
                    args: null,
                    concreteType: 'Timer',
                    plural: false,
                    selections: [
                      v1 /*: any*/,
                      v2 /*: any*/,
                      {
                        kind: 'ScalarField',
                        alias: null,
                        name: 'minutes',
                        args: null,
                        storageKey: null,
                      },
                      {
                        kind: 'ScalarField',
                        alias: null,
                        name: 'seconds',
                        args: null,
                        storageKey: null,
                      },
                    ],
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
      name: 'useFetchStepByStepRecipeQuery',
      type: 'Query',
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v7 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchStepByStepRecipeQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: v7 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchStepByStepRecipeQuery',
      id: null,
      text:
        'query useFetchStepByStepRecipeQuery(\n  $id: String!\n) {\n  recipe(id: $id) {\n    id\n    author\n    name\n    image\n    video\n    preparationTime\n    cookingTime\n    portions\n    difficulty\n    notes\n    ingredients {\n      for\n      list {\n        name\n        qty\n        notes\n        link\n      }\n    }\n    items {\n      name\n      qty\n      notes\n      link\n    }\n    steps {\n      for\n      heatLevel\n      ovenTemperature\n      links {\n        from\n        name\n        timerId\n      }\n      notes\n      video\n      images {\n        src\n        alt\n      }\n      tasks {\n        name\n        notes\n        timer {\n          id\n          name\n          minutes\n          seconds\n        }\n      }\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = 'ba2825a47c97162f9583c305cc5c3657';
export default node;
