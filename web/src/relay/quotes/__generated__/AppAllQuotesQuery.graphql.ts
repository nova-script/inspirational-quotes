/**
 * @generated SignedSource<<021d3b4120bda031a98a33a7e32d14be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppAllQuotesQuery$variables = {};
export type AppAllQuotesQuery$data = {
  readonly queryAllQuotes: ReadonlyArray<{
    readonly author: string | null;
    readonly id: string | null;
    readonly quote: string | null;
  } | null> | null;
};
export type AppAllQuotesQuery = {
  response: AppAllQuotesQuery$data;
  variables: AppAllQuotesQuery$variables;
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
    "name": "AppAllQuotesQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppAllQuotesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2eb74cb6cbd1b4a38a6be449853076db",
    "id": null,
    "metadata": {},
    "name": "AppAllQuotesQuery",
    "operationKind": "query",
    "text": "query AppAllQuotesQuery {\n  queryAllQuotes {\n    id\n    quote\n    author\n  }\n}\n"
  }
};
})();

(node as any).hash = "c0ef16621692e6b26c50bd257dc2e414";

export default node;
