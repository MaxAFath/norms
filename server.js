// server packages
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

// session packages
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
require('dotenv').config();

// handlebars packages
const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');
const hbs = exphbs.create({/* helpers */});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});