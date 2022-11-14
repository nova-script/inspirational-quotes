import { PreloadedQuery, useQueryLoader } from "react-relay"
import type { PreloadedQuery as PreloadedQueryType } from "react-relay";
import type {
    AppAllQuotesQuery as AppAllQuotesQueryType
} from '../../relay/quotes/__generated__/AppAllQuotesQuery.graphql';
import { homeAllQuotesQuery } from "../../pages/Home";
import RenderQuotes from "./Render";
import { useCallback } from "react";
import AddQuote from "../AddQuote";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

interface QuotesProps {
    queryReference: any;
}

export default function QuotesFetcher(props: QuotesProps) {
    const [quotesQueryReference, loadQuotesQuery] = useQueryLoader
    <AppAllQuotesQueryType>(
        homeAllQuotesQuery,
        props.queryReference)

    const onQuotesFetch = () => {
        loadQuotesQuery({})
    }

    const refresh = useCallback(() => {
        const {variables} = props.queryReference;
        loadQuotesQuery(variables, {fetchPolicy: 'network-only'});
    }, [])

    return (
        quotesQueryReference!= null ?
        (<Container maxWidth="xl" sx={{ mt: 10 }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} md={4}>
                <AddQuote refresh={refresh}/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
            <RenderQuotes
            refresh={refresh}
            queryReference={quotesQueryReference}/>
            </Grid>
        </Container>): <></>)
}