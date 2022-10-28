const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require("cookie-parser");
const port = 3000

app.use(cookieParser());
app.use(session({
    key: 'session',
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:10000000
    }
  }))

app.listen(port, () => {
    console.log(`Example app listening at <http://localhost>:${port}`)
})



app.get('/',(req, res) =>{

    req.session.user={
        userId:1
    }
    console.log("Session ID: "+req.session.id)
    //console.log(req.cookies.session.split(':'))
    let arr = req.cookies.session.split(':')
    let arr2 = arr[1].split('.')
    //console.log(arr[1].split('.'))
    console.log("Cookie Id: "+arr2[0])
    res.send("<h1>Hellor World</h1>")
})

app.get('/home',(req,res)=>{
    if(req.cookies){
        res.send(req.session)
    }else res.send("Sessao encerrada")
})