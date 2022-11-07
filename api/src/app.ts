import Koa from 'koa';
import mount from 'koa-mount';
import { graphqlHTTP } from 'koa-graphql';
import cors from '@koa/cors';
import mongoose from 'mongoose';

import GraphQLSchema from './graphql/schema';

mongoose.connect(
    'mongodb://inspirational-quotes-db:27017/graphql',
    {
        authSource: "admin",
        user: "root",
        pass: "rootpassword",
    }, (err) => {
        if (err) process.exit(1)
    });

mongoose.connection.once('open', (err) => {
    console.log('Successfully connected to database!');
});

const app = new Koa();

app.use(cors());
app.use(
    mount('/',
        graphqlHTTP({
            schema: GraphQLSchema,
            graphiql: true,
            pretty: true,}))
);

app.listen(8000);