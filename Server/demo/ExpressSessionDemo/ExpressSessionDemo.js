const express = require('express');
// const knex = require('../knex');
const app = express();
const cors = require('cors');

// We only need to store hashed password in db. No need to store salt any more.

app.use(express.json());
app.use(cors());

const bcrypt = require('bcrypt'); // need to install bcrypt: npm install bcrypt
const saltRounds = 10;  // this variable is used to make the salt. Bcrypt handles the salt things for us.
const session = require('express-session');

app.use(session({
    secret: 'your_secret_key', // A secret key for signing the session ID cookie.
    resave: false, // Do not force the session to be saved back to the session store.
    saveUninitialized: false, // Do not force a session that is "uninitialized" to be saved to the store.
    cookie: { secure: true, maxAge: 60000 } // Cookie settings, `secure: true` should be used for HTTPS.
  }));

const users = [
    {
        id: 1,
        user_name: '',
        passwordHash: ''
    },
];



app.post("/register", async(req, res) => {
    // in req body:
    // {
    //     'name': 'gujiaxian',
    //     'plainPassword': 'gujiaxian0101'
    // }
    try {
        users[0].user_name = req.body.name;
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.plainPassword, salt, function(err, hash) {
                console.log(hash);
                users[0].passwordHash = hash
                res.status(200).send(hash);
            });
        });
    } catch (error) {
        console.error(error.message);
    } 
})

app.get("/", (req, res) => {
    res.status(200).send(users);
});

async function authenticateUser(userName, password) {
    const user = users[0];
    const userMatched = await bcrypt.compare(password, user.passwordHash);
    if (userMatched) {
        return (user);
    } else return null;
}

app.post('/login', async(req, res) => {
    // in req body:
    // {
    //     'name': 'gujiaxian',
    //     'plainPassword': 'gujiaxian0101'
    // }
    const user = await authenticateUser(req.body.name, req.body.plainPassword);
    if(user) {
        req.session.userId = user.id;
        res.redirect("/profilePage");
    } else {
        res.status(401).send('Authentication failed');
    }
})

app.get('/profilePage', (req, res) => {
    res.status(200).send("login Successed!");
})

function checkAuthenticated(req, res, next) {
    if(req.session.userId) {
        next();
    } else {
        res.status(403).send("user not authenticated");
    }
}

app.get("/anyEndpointUserWantToGoAsLoggedIn", checkAuthenticated, (req, res)=> {
    res.send("You are logged in!");
})

app.listen(8000, () => {
    console.log("Server listening on Port: ", 8000)
})

