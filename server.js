import express from "express"
import path from 'path'
import { fileURLToPath } from 'url'; 
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', function(req, res){
  var x=req.body.fname
  var s=req.body.lname
  var t=req.body.email
  var v=req.body.messages
  var y="thankyou, " + x +" " + s +" " + t +" " + v + ". we will contact you soon"
    console.log(req.body)
    res.render("contact.ejs", {"text":y })
});


app.get('/home', (req, res)=> {
    console.log(__dirname)
    
      res.render("home.ejs", {})
});

app.get('/services', (req, res)=> {
    console.log(__dirname)
      res.render("services.ejs", {})
});

app.get('/about', (req, res)=> {
    console.log(__dirname)
    res.render("about.ejs", {})
});

app.get('/contact', (req, res)=> {
    console.log(__dirname)
      res.render("contact.ejs", {"text": 'Fill this form to get connected with us'})
});

app.listen(5000, function(req,res){
    console.log("server start")
    
});