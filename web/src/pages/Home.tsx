import { useState, useEffect } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Box, Grid } from '@mui/material'
import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Quote from '../components/Quote';
import RelayEnvironment from '../relay/relayEnvironment';
import { HomeStyle } from '../assets/styles/Home';
import { AppAllQuotesQuery } from '../relay/quotes/AppAllQuotesQuery';

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

export default function Home(props: any) {
    return (
      <div>
        <HomeStyle/>
        <ResponsiveAppBar/>
        <Box sx={{ mt: 10 }}>
          
        </Box>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <QueryRenderer
              environment={RelayEnvironment}
              query={AppAllQuotesQuery}
              render={renderQuotes}
              variables={{}}
            />
          </Grid>
        </Container>
      </div>
    )
}