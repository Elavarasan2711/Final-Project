const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const mysql=require("mysql")
const crypto = require("crypto")
const { error } = require("console")

var storeexp=express()
storeexp.use(cors())
storeexp.use(bodyparser.json())
storeexp.use(express.json())
storeexp.use(bodyparser.urlencoded({extended:true}))
storeexp.use(express.static('public'))

let localdb=mysql.createConnection({
  host:"localhost",
  port:3306,
  user:"root",
  password:"Prince@2711",
  database:"register_node"
})
localdb.connect((error)=>{
  if(error){
    console.log(error)
  }
  else{
    console.log("db connected")
  }
})

storeexp.get('/customerdetails',(req,res)=>{
  var {id}=req.params
  let selectquery=`select * from clientregistertable`
  localdb.query(selectquery,(error,result)=>{
    if(error){
      res.send(error)
    }
    else{
      res.send(result)
    }
  })
})

storeexp.post ("/Register", (request, response) =>{
  var sno =crypto.randomUUID()
  var datetime = new Date();
  var createdDate = datetime.toISOString().slice(0,10)
  let {user_name,email,password,mobile_number,role} = request.body
  let selectQuery = 'insert into registertable (sno,user_name,email,password,mobile_number,role,createdby,updatedby,createddate,updateddate) values (?,?,?,?,?,?,?,?,?,?)'

  localdb.query(selectQuery, [sno,user_name,email,password,mobile_number,role,sno,sno,createdDate,createdDate], (error, result) =>{
      if (error) {
          response.send({"status":"error"})
          console.log(error)
      } else {
          response.send({"status" : "success"})
      }
  } )
})

storeexp.post('/login',(request,response)=>{
let {email,password}=request.body
let loginquery='select * from registertable where email=?'
localdb.query(loginquery,[email],(error,result)=>{
  if(error){
    response.send({"status":"error"})
  }
  else if(result.length>0){
    let dbemail=result[0].email
    let dbpassword=result[0].password
    let id=result[0].sno
    let role=result[0].role
    if(dbemail===email && dbpassword===password){
      response.send({"status":"success","id":id,"role":role})
    }
    else{
      response.send({"status":"invalid"})
    }
  }
  else{
    response.send({"status":"empty_set"})
  }


})
})

storeexp.get('/getone/:sno',(request,response)=>{
  let{sno}=request.params
  let getonequerry='select * from clientregistertable where sno=?'
  localdb.query(getonequerry,[sno],(error,result)=>{
    if(error){
      response.send({"status":"error"})
    }
    else{
      response.send(result)
    }
  })
})

storeexp.post('/clientdashboard',(request,response)=>{
  var sno=crypto.randomUUID()
  var datetime=new Date();
  var createdDate=datetime.toISOString().slice(0,10)
  let{username,dob,phonenumber,aadhar,pancard,accountnumber,image,location,city,loanamount}=request.body
  let selectclientquery='insert into clientregistertable(sno,username,dob,phonenumber,aadhar,pancard,accountnumber,image,location,city,loanamount,createdby,updatedby,createddate,updateddate)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  localdb.query(selectclientquery,[sno,username,dob,phonenumber,aadhar,pancard,accountnumber,image,location,city,loanamount,sno,sno,createdDate,createdDate]),(error,result)=>{
    if(error){
      response.send({"status":"error"})
    }else{
      response.send({"status":"success"})
    }
  }
  
})

storeexp.post('/delete',(request,response)=>{
  let {id}=request.body
  console.log(id)
  let deletequery='delete from clientregistertable where sno=?'
  localdb.query(deletequery,[id],(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }
    else{
      response.send({"status":"success"}) 
      console.log(result)
    }
  })
})

storeexp.put('/update/:sno',(request,response)=>{
  let{sno}=request.params
  let{username,dob,phonenumber,aadhar,pancard,accountnumber,image,location,city,loanamount}=request.body
  let updatequerry='update clientregistertable set username=?,dob=?,phonenumber=?,aadhar=?,pancard=?,accountnumber=?,image=?,location=?,city=?,loanamount=? where sno=?'
  localdb.query(updatequerry,[username,dob,phonenumber,aadhar,pancard,accountnumber,image,location,city,loanamount,sno],(error,result)=>{
    if(error){
      response.send({"status":"error"})
      console.log(error)
    }
    else{
      response.send({"status":"success"})
    }
  })
})



storeexp.listen(3030,()=>{
  console.log("your port is running")
})
  
