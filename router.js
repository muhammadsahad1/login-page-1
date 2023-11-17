var express = require("express")
var router = express.Router()

const credential={
 
  email : "sahu@gmail.com",
  password :"sahu123"

}

//login user

router.post('/login',(req,res)=>{
if(req.body.email===credential.email&&req.body.password===credential.password){
req.session.user = req.body.email;
     res.redirect('/route/dashboard')

// res.end("login success...")
} else if 
(req.body.email != credential.email ){

           res.render('base',{ title:'express',login:'User invalid..!'})
}else if (req.body.password != credential.password){

  res.render('base',{ title:'express',login:'password invalid...!'})
}

})



// route for dashboard
// router.get('/dashboard',(req,res)=>{
// if(req.session.user){
// res.render('dashboard',{user:req.session.user})
// }else{
//   res.send('base')
// }
// })




// route of dashboard

router.get("/dashboard",(req,res)=>{
if(req.session.user){
let products = [{

src:"/bg-img/iron1.jpg",
character : "Iron man",
actor : "Robert Downey Jr",
about_character : "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father's footsteps, inheriting Stark Industries upon his parents' untimely death.",

     },{

  src:"/bg-img/thor1.jpg",
      character : "Thor",
    actor : "Chris Hemsworth",
    about_character : "Thor is based on the Norse mythological god of the same name. He is the Asgardian god of thunder, whose enchanted hammer Mjolnir enables him to fly and manipulate weather, among his other superhuman attributes. A founding member of the superhero team the Avengers.",
    },{

    src:"/bg-img/spiderman1.jpg",
      character : "Spider man",
        actor : "Tom Holland",
            about_character : "His powers were super strength, agility, the ability to cling to almost every surface, the ability to shoot spider-webs using a device that he invented, which he calls web-shooters, and reacting to danger quickly with his spider-sense, enabling him to combat many foes similar to that of a spider.",
},{

  src:"/bg-img/hulk1.jpg",
  character : "Incredible Hulk",
  actor : "Chris Hemsworth",
  about_character : "The Hulk is typically seen as a hulking man with green skin, hair, and eyes, wearing only a pair of torn purple pants that survive his physical transformation as the character progressed.",


},{
  src:"/bg-img/captain1.jpg",
  character : "Captain American",
  actor : "Chris Evans",
  about_character : "Steve RogersCaptain America, Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the Avengers.",


},{

  src:"/bg-img/blackpanther1.jpg",
  character : "Black panther",
  actor : "Chadwick Boseman",
  about_character : "T'Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther. The Black Panther is the ruler and protector of Wakanda; a job fit for a king.",


}
]
// pass to render dashboard
res.render('dashboard',{user:req.session.user,products})

}else{
  res.render("base")
}



});

// route for logout
router.get('/logout',(req,res)=>{
  req.session.destroy((err)=>{
  if (err) {
  console.log(err);
  res.send('error')
  } else { 
    
    res.render('base',{ title:'express',logout:'logout successfully...!'})
  }
  
  });
  
  
  });





module.exports=router