const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');


const app = express();

app.use(express.json());

//DB config

const db = config.get('mongoURI');

//Connect to Mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => { console.log("mongodb connected !!!") })
    .catch(err => console.log(err));


//Use Routes

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

//Serve static asset if in production

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

    })
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App are listened on port ${port}`));



