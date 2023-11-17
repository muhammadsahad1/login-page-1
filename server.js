// creating login page

const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")
const router =require("./router")
const nocache = require("nocache")

const app = express()
const port = 3010

// app.use(nocache())

app.use(nocache())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')


app.use(session({
secret:uuidv4(),
resave:false,
saveUninitialized:true

}))

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/bg-img',express.static(path.join(__dirname,'public/bg-img')))
app.use('/route',router)


// base route

// incorrect.........................
app.get('/',(req,res)=>{
  if(!req.session.user){
    res.render('base',{title : "Login system"})
  }

});

app.get('/page',((req,res)=>{
  res.send(req.query.name)
}))


app.listen(port,()=>{
  
       console.log(`server is running http://localhost:${port}`)})