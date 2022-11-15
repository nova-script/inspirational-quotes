import { graphql, loadQuery } from "react-relay";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { createGlobalStyle } from "styled-components";
import relayEnvironment from "../relay/relayEnvironment";
import FetchQuotes from "../components/Quotes/Fetch";

export const HomeStyle = createGlobalStyle`
  body {
    background: #e1f5fe;
  }
`;

export const homeAllQuotesQuery = graphql`
  query HomeAllQuotesQuery {
    queryAllQuotes {
      id
      quote
      author
    }
  }
`;

const queryReference: any = loadQuery(relayEnvironment, homeAllQuotesQuery, {});

export default function Home(props: any): JSX.Element {
  return (
    <div>
      <HomeStyle />
      <ResponsiveAppBar />
      <FetchQuotes queryReference={queryReference} />
    </div>
  );
}
