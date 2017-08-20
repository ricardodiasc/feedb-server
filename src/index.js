import {graphqlExpress, graphiqlExpress} from 'graphql-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import bodyParser from 'body-parser';
import {schema} from './schema';

import express from 'express';


import cors from 'cors';



const PORT = process.env.PORT || 4000;

const server = express();

server.use('*', cors({origin:'http://localhost:3000'}));

server.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

server.use('/graphiql', graphiqlExpress({endpointURL:'/graphql'}));

server.listen(PORT, ()=>{
    console.log(`GraphQL Server is now runnig on http://localhost:${PORT}`);
});