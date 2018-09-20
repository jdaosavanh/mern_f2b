const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

const app = express();

app.use(express.json());

// DB Configs

const db = require('./config/keys').mongoURI;


// Connect to MongoDB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
    ];

    res.json(customers);
});

//Use Routes

app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/post',post);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Sever started on port ${port}`));