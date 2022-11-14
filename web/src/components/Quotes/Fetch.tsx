import { useQueryLoader } from "react-relay"
import type {
    HomeAllQuotesQuery as HomeAllQuotesQueryType
} from '../../pages/__generated__/HomeAllQuotesQuery.graphql';
import { homeAllQuotesQuery } from "../../pages/Home";
import RenderQuotes from "./Render";
import { useCallback } from "react";

interface QuotesProps {
    queryReference: any;
}

export default function FetchQuotes(props: QuotesProps) {
    const [quotesQueryReference, loadQuotesQuery, disposeQuery] = useQueryLoader<HomeAllQuotesQueryType>(
        homeAllQuotesQuery, props.queryReference)

    const onQuotesFetch = () => {
        loadQuotesQuery({})
    }

    const refresh = useCallback(() => {
        const {variables} = props.queryReference;
        loadQuotesQuery(variables, {fetchPolicy: 'network-only'});
    }, [])

    return (
        quotesQueryReference!= null ?
            <RenderQuotes
                refresh={refresh}
                queryReference={quotesQueryReference}/> : <></>
        )
}