const express  = require('express');
const app = express();
const schema = require('./schema/schema');
const graphQl = require('express-graphql');
const mongoose = require('mongoose');


// Connect to mlab
mongoose.connect('mongodb://vd02:dogra%40123@ds241668.mlab.com:41668/gql-react');
mongoose.connection.once('open', ()=> {
    console.log('connected to dB');
});
app.use('/graphql', graphQl({
    schema,
    graphiql: true
}));
app.listen(4000, () =>{
    console.log('Listening for request on port 4000');
});

