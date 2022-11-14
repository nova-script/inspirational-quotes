import { useState, useEffect } from 'react';
import {
  QueryRenderer,
  graphql,
  useQueryLoader,
  usePreloadedQuery,
  loadQuery
} from 'react-relay';
import { Box, Button, Grid, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Quote from '../components/Quote';
import RelayEnvironment from '../relay/relayEnvironment';
import { HomeStyle } from '../assets/styles/Home';
import { AppAllQuotesQuery } from '../relay/quotes/AppAllQuotesQuery';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddQuote from '../components/AddQuote';
import { RecoilRoot, atom, useRecoilState } from 'recoil';
import relayEnvironment from '../relay/relayEnvironment';
import RenderQuotes from '../components/Quotes/Render';
import QuotesFetcher from '../components/Quotes/Fetcher';

import type {
  AppAllQuotesQuery as AppAllQuotesQueryType
} from '../relay/quotes/__generated__/AppAllQuotesQuery.graphql';

export const refetchAtom = atom({
  key: 'refetch',
  default: false,
});

export const homeAllQuotesQuery = graphql`
query HomeAllQuotesQuery {
  queryAllQuotes {
    id
    quote
    author
  }
}`;

const queryReference: any = loadQuery(
  relayEnvironment,
  homeAllQuotesQuery,
  {}
)


export default function Home(props: any) {
  const preloadedQuery = usePreloadedQuery<AppAllQuotesQueryType>(
    homeAllQuotesQuery, queryReference);

  return (
      <div>
        <HomeStyle/>
        <ResponsiveAppBar/>
        <QuotesFetcher queryReference={preloadedQuery}/>
      </div>
  )
}