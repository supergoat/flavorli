/* tslint:disable */
/* eslint-disable */
/* @relayHash 6ebf85badd366d8eb33bc6ee362620f7 */

import {ConcreteRequest} from 'relay-runtime';
export type StepType = 'MISE_EN_PLACE' | 'PREPARATION' | '%future added value';
export type useFetchStepByStepRecipeQueryVariables = {
  id: string;
};
export type useFetchStepByStepRecipeQueryResponse = {
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
      readonly name: string;
      readonly qty: string;
    }>;
    readonly items: ReadonlyArray<{
      readonly name: string;
      readonly qty: string;
    }>;
    readonly steps: ReadonlyArray<{
      readonly no: number;
      readonly type: StepType;
      readonly links: ReadonlyArray<{
        readonly heading: string;
        readonly name: string;
        readonly from: string;
        readonly timerId: string | null;
      } | null> | null;
      readonly tag: {
        readonly color: string;
        readonly text: string;
      };
      readonly ingredients: ReadonlyArray<{
        readonly qty: string;
        readonly name: string;
      } | null> | null;
      readonly items: ReadonlyArray<{
        readonly name: string;
        readonly qty: string;
      } | null> | null;
      readonly tasks: ReadonlyArray<string>;
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
    }>;
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
    }
    items {
      name
      qty
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
      }
      items {
        name
        qty
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
    v4 = [v2 /*: any*/, v3 /*: any*/],
    v5 = {
      kind: 'LinkedField',
      alias: null,
      name: 'items',
      storageKey: null,
      args: null,
      concreteType: 'Item',
      plural: true,
      selections: v4 /*: any*/,
    },
    v6 = [
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
            selections: v4 /*: any*/,
          },
          v5 /*: any*/,
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
                selections: [v3 /*: any*/, v2 /*: any*/],
              },
              v5 /*: any*/,
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
      selections: v6 /*: any*/,
    },
    operation: {
      kind: 'Operation',
      name: 'useFetchStepByStepRecipeQuery',
      argumentDefinitions: v0 /*: any*/,
      selections: v6 /*: any*/,
    },
    params: {
      operationKind: 'query',
      name: 'useFetchStepByStepRecipeQuery',
      id: null,
      text:
        'query useFetchStepByStepRecipeQuery(\n  $id: String!\n) {\n  recipe(id: $id) {\n    id\n    author\n    name\n    image\n    preparationTime\n    cookingTime\n    portions\n    difficulty\n    ingredients {\n      name\n      qty\n    }\n    items {\n      name\n      qty\n    }\n    steps {\n      no\n      type\n      links {\n        heading\n        name\n        from\n        timerId\n      }\n      tag {\n        color\n        text\n      }\n      ingredients {\n        qty\n        name\n      }\n      items {\n        name\n        qty\n      }\n      tasks\n      timer {\n        id\n        name\n        minutes\n        seconds\n      }\n      images {\n        src\n        alt\n      }\n    }\n  }\n}\n',
      metadata: {},
    },
  };
})();
(node as any).hash = '86696d85c5c18d2bba410b5f34c4e02d';
export default node;
