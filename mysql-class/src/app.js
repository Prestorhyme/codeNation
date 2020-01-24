const express = require('express');
const mysql = require('mysql');
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.set('view engine', 'hbs');
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    port: 3306,          //port mysql
    database: 'users_db',
});
db.connect( (error) => {
    if(error) {
        console.log( error );
    } else {
        console.log('MySQL connected');
    }
});
app.get('/', (req, res) => {
    db.query("SELECT * FROM users", (error, result) => {
        if(error) {
            console.log('Error in the query')
        } else {
            console.log(result)
            res.render('index', {
                data: result
            })
        }
    });
})
app.get('/register', (req, res) => {
    res.render('register');
})
app.post('/register', (req, res) => {
    const name = req.body.theUserName;
    const email = req.body.theUserEmail;
    const password = req.body.theUserPassword;
    let sqlQueryEmail = 'SELECT email FROM users WHERE email = ?';
    let sql = 'INSERT INTO users SET user_name = ?, email = ?, user_password = ?';
    let user = [ name, email, password ];
    let query1 = db.query(sqlQueryEmail, email, (error, result) => {
        if(error) {
            console.log('Error in the query');
        } else {
            if(result.length > 0) {
                res.send('<h1>Sorry that email has been taken</h1>');
            } else {
                let query = db.query(sql, user, (error, result) => {
                    if(error) {
                        console.log('Error in the query');
                    } else {
                        res.send('<h1>User Registered</h1>');
                    }
                });
            }
        }
    });
})

app.post('/edit/:id', (req, res) => {
    const userId = req.params.id;
    const method = req.body._method;
    const newName = req.body.editName;

    let sql = 'UPDATE users SET username = ? WHERE id =?';
    let userUpdate = [newName, userId];
    if(method =='put') {
        db.query(sql, userUpdate, (err, rows) => {
            if(err) {
                console.log('there is an error in your query');
            } else {
                res.send('Your username has been updated');
            }
        })
    }
})

app.post('/post/:id', (req, res) => {
    const userId = req.params.id;
    const method = req.body._method;
    const user_post = req.body.post;

    let sql = 'UPDATE users SET post = ? WHERE id =?';
    if(method == 'put') {
        db.query(sql, user_post, (err, rows) => {
            if(err) {
                console.log('there is an arror in your query');
            } else{
                res.send('You have made a new post');
            }
        })
    }
})

app.listen(3000, () => {
    console.log("server is running");
});