import { Grid } from '@mui/material'
import { usePreloadedQuery } from 'react-relay'
import { homeAllQuotesQuery } from '../../pages/Home'
import Quote from './Index'
import type { PreloadedQuery as PreloadedQueryType } from 'react-relay'
import type {
  HomeAllQuotesQuery as HomeAllQuotesQueryType
} from '../../pages/__generated__/HomeAllQuotesQuery.graphql'
import { Suspense } from 'react'
import { Container } from '@mui/system'
import AddQuote from './Add'

interface RenderQuotesProps {
  queryReference: PreloadedQueryType<HomeAllQuotesQueryType>
  refresh: any
}

export default function RenderQuotes (props: RenderQuotesProps): JSX.Element {
  const data: any = usePreloadedQuery(homeAllQuotesQuery, props.queryReference)

  return (
        <Suspense fallback="Loading query...">
            <Container maxWidth="xl" sx={{ mt: 10 }}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12} md={4}>
                    <AddQuote refresh={props.refresh}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {data.queryAllQuotes.map(
                      (data: any) => (<Grid key={data.id} item xs={12} md={4}>
                            <Quote
                            id={data.id}
                            refresh={props.refresh}
                            author={data.author}
                            quote={data.quote}/>
                        </Grid>))}
                </Grid>
            </Container>
        </Suspense>)
}
