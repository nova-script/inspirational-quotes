import { useState, useEffect } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
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

const renderQuotes = ({error, props}) => {
  if (error)
    return <div>{error.message}</div>
  else if (props)
    return (
        props.queryAllQuotes.map((data: any) =>
          <Grid item xs={12} md={4}>
              <Quote
              id={data.id}
              author={data.author}
              quote={data.quote}
              key={data.id}/>
          </Grid>))
  return <div> Loading </div>
}

export const refetchAtom = atom({
  key: 'refetch',
  default: false,
});

export default function Home(props: any) {
  const [refetchHome, setRefetchHome] = useRecoilState(refetchAtom);


  return (
      <div>
        <HomeStyle/>
        <ResponsiveAppBar/>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <AddQuote/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <QueryRenderer
              environment={RelayEnvironment}
              query={AppAllQuotesQuery}
              render={renderQuotes}
              variables={{refetch: refetchHome}}/>
          </Grid>
        </Container>
      </div>
  )
}