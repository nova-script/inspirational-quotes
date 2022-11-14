/**
 * @generated SignedSource<<b77c1f1c35a4a814578f2e5bf6757e2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeAllQuotesQuery$variables = {};
export type HomeAllQuotesQuery$data = {
  readonly queryAllQuotes: ReadonlyArray<{
    readonly author: string | null;
    readonly id: string | null;
    readonly quote: string | null;
  } | null> | null;
};
export type HomeAllQuotesQuery = {
  response: HomeAllQuotesQuery$data;
  variables: HomeAllQuotesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Quote",
    "kind": "LinkedField",
    "name": "queryAllQuotes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quote",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "author",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeAllQuotesQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeAllQuotesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "112528376bd9a06b0e5e06ba4e162bce",
    "id": null,
    "metadata": {},
    "name": "HomeAllQuotesQuery",
    "operationKind": "query",
    "text": "query HomeAllQuotesQuery {\n  queryAllQuotes {\n    id\n    quote\n    author\n  }\n}\n"
  }
};
})();

(node as any).hash = "1547251f38490ca2e34e8edcfb0e9c01";

export default node;
