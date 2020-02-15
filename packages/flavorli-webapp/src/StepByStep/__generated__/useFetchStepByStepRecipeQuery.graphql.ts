/* tslint:disable */
/* eslint-disable */
/* @relayHash b4eca9a7c2accab934e1fcbebbdd7848 */

import {ConcreteRequest} from 'relay-runtime';
export type StepType = 'MISE_EN_PLACE' | 'PREPARATION' | '%future added value';
export type useFetchStepByStepRecipeQueryVariables = {
  id: string;
};
export type useFetchStepByStepRecipeQueryResponse = {
  readonly recipe: {
    readonly id: string | null;
    readonly author: string | null;
    readonly name: string | null;
    readonly image: string | null;
    readonly preparationTime: number | null;
    readonly cookingTime: number | null;
    readonly portions: string | null;
    readonly difficulty: string | null;
    readonly ingredients: ReadonlyArray<{
      readonly name: string | null;
      readonly qty: string | null;
      readonly notes: string | null;
      readonly link: string | null;
    } | null> | null;
    readonly items: ReadonlyArray<{
      readonly name: string | null;
      readonly qty: string | null;
      readonly notes: string | null;
      readonly link: string | null;
    } | null> | null;
    readonly steps: ReadonlyArray<{
      readonly no: number | null;
      readonly type: StepType | null;
      readonly links: ReadonlyArray<{
        readonly heading: string | null;
        readonly name: string;
        readonly from: string;
        readonly timerId: string | null;
      } | null> | null;
      readonly tag: {
        readonly color: string;
        readonly text: string;
      } | null;
      readonly ingredients: ReadonlyArray<{
        readonly qty: string | null;
        readonly name: string | null;
        readonly notes: string | null;
        readonly link: string | null;
      } | null> | null;
      readonly items: ReadonlyArray<{
        readonly name: string | null;
        readonly qty: string | null;
        readonly notes: string | null;
        readonly link: string | null;
      } | null> | null;
      readonly tasks: ReadonlyArray<string | null> | null;
      readonly timer: {
        readonly id: string;
        readonly name: string;
        readonly minutes: number;
        readonly seconds: number;
      } | null;
      readonly images: ReadonlyArray<{
        readonly src: string;
        readonly alt: string | null;
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
    preparationTime
    cookingTime
    portions
    difficulty
    ingredients {
      name
      qty
      notes
      link
    }
    items {
      name
      qty
      notes
      link
    }
    steps {
      no
      type
      links {
        heading
        name
        from
        timerId
      }
      tag {
        color
        text
      }
      ingredients {
        qty
        name
        notes
        link
      }
      items {
        name
        qty
        notes
        link
      }
      tasks
      timer {
        id
        name
        minutes
        seconds
      }
      images {
        src
        alt
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
      name: 'qty',
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
      name: 'link',
      args: null,
      storageKey: null,
    },
    v6 = [v2 /*: any*/, v3 /*: any*/, v4 /*: any*/, v5 /*: any*/],
    v7 = {
      kind: 'LinkedField',
      alias: null,
      name: 'items',
      storageKey: null,
      args: null,
      concreteType: 'Item',
      plural: true,
      selections: v6 /*: any*/,
    },
    v8 = [
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
            selections: v6 /*: any*/,
          },
          v7 /*: any*/,
          {
            kind: 'LinkedField',
            alias: null,
            name: 'steps',
            storageKey: null,
            args: null,
            concreteType: 'Step',
            plural: true,
            selections: [
              {
                kind: 'ScalarField',
                alias: null,
                name: 'no',
                args: null,
                storageKey: null,
              },
              {
                kind: 'ScalarField',
                alias: null,
                name: 'type',
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
                    name: 'heading',
                    args: null,
                    storageKey: null,
                  },
                  v2 /*: any*/,
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'from',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'timerId',
                    args: null,
                    storageKey: null,
                  },
                ],
              },
              {
                kind: 'LinkedField',
                alias: null,
                name: 'tag',
                storageKey: null,
                args: null,
                concreteType: 'Tag',
                plural: false,
                selections: [
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'color',
                    args: null,
                    storageKey: null,
                  },
                  {
                    kind: 'ScalarField',
                    alias: null,
                    name: 'text',
                    args: null,
                    storageKey: null,
                  },
                ],
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
                  v3 /*: any*/,
                  v2 /*: any*/,
                  v4 /*: any*/,
                  v5 /*: any*/,
                ],
              },
              v7 /*: any*/,
              {
                kind: 'ScalarField',
                alias: null,
                name: 'tasks',
                args: null,
                storageKey: null,
              },
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
      selections: v8 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchStepByStepRecipeQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: v8 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchStepByStepRecipeQuery',
      id: null,
      text:
        'query useFetchStepByStepRecipeQuery(\n  $id: String!\n) {\n  recipe(id: $id) {\n    id\n    author\n    name\n    image\n    preparationTime\n    cookingTime\n    portions\n    difficulty\n    ingredients {\n      name\n      qty\n      notes\n      link\n    }\n    items {\n      name\n      qty\n      notes\n      link\n    }\n    steps {\n      no\n      type\n      links {\n        heading\n        name\n        from\n        timerId\n      }\n      tag {\n        color\n        text\n      }\n      ingredients {\n        qty\n        name\n        notes\n        link\n      }\n      items {\n        name\n        qty\n        notes\n        link\n      }\n      tasks\n      timer {\n        id\n        name\n        minutes\n        seconds\n      }\n      images {\n        src\n        alt\n      }\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = '62c55913e4b1d8ac514e3a670ed45c57';
export default node;
