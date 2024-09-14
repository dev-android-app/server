let express = require('express');
let app = express();
let path = require('path');
const port = 8080;
var sql = require('mysql');
var bodyParser = require('body-parser');
//importante
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const db = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CL"
});
app.use(express.urlencoded({ extended:true}))
app.get('/', (req, res)=>{
    res.json({sucess:true, title:'teste!!!'});
});
app.post('/post', async(req, res)=>{
    const { user, email, pass} = req.body;
    console.log(user);
    console.log(email);
    console.log(pass);
    const str = `INSERT INTO usuarios SET ?`,
    values = {user:user, email:email, pass:pass};
    try {
        db.query(str, values, (err, result)=>{
            console.log(result);
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, ()=>{
    console.log(`api listening on port ${port}`);
});