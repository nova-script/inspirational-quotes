import {
  graphql,
  loadQuery
} from 'react-relay';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { HomeStyle } from '../assets/styles/Home';
import relayEnvironment from '../relay/relayEnvironment';;
import FetchQuotes from '../components/Quotes/Fetch';


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
  return (
      <div>
        <HomeStyle/>
        <ResponsiveAppBar/>
        <FetchQuotes queryReference={queryReference}/>
      </div>
  )
}