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
    const { email, code} = req.body;
    console.log(email);
    console.log(code);
})

app.listen(port, ()=>{
    console.log(`api listening on port ${port}`);
});