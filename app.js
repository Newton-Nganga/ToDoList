const express=require("express");
const bodyParser=require("body-parser");
const { use } = require("express/lib/application");

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use("/public",express.static(__dirname+"/public"));

var items=["buy food","cook food","eat food"];
let workItem=["buy food","cook food","eat food"];
app.get("/",function(req,res){
var today=new Date();


var options={
   weekday:"long",
   day:"numeric",
   month:"long"
};

var day=today.toLocaleDateString("en-US",options);

 res.render("list",{listTitle: day,newItem:items});

});

app.post("/",function(req,res){
var item=req.body.newItem;
if(req.body.list ==="work")
{
  workItem.push(items);
  res.redirect("/work");
}else{
  items.push(item);
  res.redirect("/")
}
  
//   items.push(item);
//  res.redirect('/');

})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"workList",newItem:"workItems"});
})
app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItem.push(item)
  
})


app.listen(process.env.PORT ||3000,function(){
    console.log("server started on port 3000");
    
});

