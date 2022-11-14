import { Grid } from "@mui/material"
import { usePreloadedQuery } from "react-relay";
import { homeAllQuotesQuery } from "../../pages/Home";
import Quote from "../Quote"
import type { PreloadedQuery as PreloadedQueryType } from "react-relay";
import type {
    AppAllQuotesQuery as AppAllQuotesQueryType
} from '../../relay/quotes/__generated__/AppAllQuotesQuery.graphql';

interface RenderQuotesProps {
    queryReference: PreloadedQueryType<AppAllQuotesQueryType>;
    refresh: any;
}

export default function RenderQuotes(props: RenderQuotesProps) {
    const data: any = usePreloadedQuery(homeAllQuotesQuery, props.queryReference);

    return data.queryAllQuotes.map(
            (data: any) => (<Grid key={data.id} item xs={12} md={4}>
                    <Quote
                    id={data.id}
                    refresh={props.refresh}
                    author={data.author}
                    quote={data.quote}/>
                </Grid>))

}