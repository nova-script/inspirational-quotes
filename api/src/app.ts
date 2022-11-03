import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';

import mongoose from 'mongoose';

import GraphQLSchema from './graphql/schema';

mongoose.connect('mongodb://localhost:27017/graphql')
mongoose.connection.once('open', () => {
    console.log('Successfully connected to database!');
});

const app = new Koa();

app.use(
    mount('/',
        graphqlHTTP({
            schema: GraphQLSchema,
            graphiql: true,
            pretty: true,}))
);

app.listen(3000);