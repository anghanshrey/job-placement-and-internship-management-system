const express = require('express');
const app = express();

app.use((req, res, next) => {
    next();
});

app.set("view engine", "ejs");

app.get('/', function (req, res){
    res.render(index);
});

// app.get('/profile', (req, res) => {
//     res.render('Hello From profile .');
// });

// app.get('/profile/:username', (req, res) => {
//     res.render(`Hello from ${req.params.username}`);
// });




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});