"use strict";

const express    = require('express');
const bodyParser = require('body-parser');
const helmet     = require('helmet');
const cors 	 = require('cors')
const middlewares = require('./middlewares');

const auth  = require('./routes/auth');
const me    = require('./routes/me')
const user  = require('./routes/user')
const group = require('./routes/group')
const testRoute = require('./routes/test')
const search = require('./routes/search')
const home = require('./routes/home')
const api = express();

// Adding Basic Middlewares
api.use(helmet());
api.use(cors())
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(middlewares.allowCrossDomain);

// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'It works!'
    });
});

// API routes
api.use('/auth'  , auth)
api.use('/me'    , me)
api.use('/user' , user)
api.use('/group', group)

api.use('/test', testRoute)

api.use('/search', search)
api.use('/home', home)
module.exports = api;
