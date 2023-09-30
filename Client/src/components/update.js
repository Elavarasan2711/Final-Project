import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function Update(){
  var{sno}=useParams()
  const[username,setusername]=useState('')
  const[dob,setdob]=useState('')
  const[phonenumber,setphonenumber]=useState('')
  const[aadhar,setaadhar]=useState('')
  const[pancard,setpancard]=useState('')
  const[accountnumber,setaccountnumber]=useState('')
  const[image,setimage]=useState('')
  const[location,setlocation]=useState('')
  const[city,setcity]=useState('')
  const[loanamount,setloanamount]=useState('')

  useEffect(()=>{
    fetch("http://localhost:3030/getone/"+sno)
    .then(data=>data.json())
    .then((res)=>{
      console.log(res)
      setusername(res[0].username)
      setdob(res[0].dob)
      setphonenumber(res[0].phonenumber)
      setaadhar(res[0].aadhar)
      setpancard(res[0].pancard)
      setaccountnumber(res[0].accountnumber)
      setimage(res[0].image)
      setlocation(res[0].location)
      setcity(res[0].city)
      setloanamount(res[0].loanamount)
    })
  },[])

  function handleUpdate(event){
    event.preventDefault()
    var username=document.getElementById("username").value
    var dob=document.getElementById("dob").value
    var phonenumber=document.getElementById("phonenumber").value
    var aadhar=document.getElementById("aadhar").value
    var pancard=document.getElementById("pancard").value
    var accountnumber=document.getElementById("accountnumber").value
    var image=document.getElementById("image").value
    var location=document.getElementById("location").value
    var city=document.getElementById("city").value
    var loanamount=document.getElementById("loanamount").value

    var updatedetails={
      username:username,
      dob:dob,
      phonenumber:phonenumber,
      aadhar:aadhar,
      pancard:pancard,
      accountnumber:accountnumber,
      image:image,
      location:location,
      city:city,
      loanamount:loanamount

    }
    if(username===''){
      alert("Enter the username")
    }
    else{
      axios.put("http://localhost:3030/update/"+sno,updatedetails)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("Data is not updated")
        }
        else if(res.data.status==="success"){
          alert("Data updated!")
        }
      })
    }
  }

  return(
    <>
    <h1 className="text-center">Updates are done here!</h1>
    <form onSubmit={handleUpdate}>
    <input type="text" id="username" value={username} onChange={updatedata=>{setusername(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="User Name" required></input>
    <input type="text" id="dob" value={dob} onChange={updatedata=>{setdob(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Date of birth" required></input>
    <input type="text" id="phonenumber" value={phonenumber} onChange={updatedata=>{setphonenumber(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your phone Number" required></input>
    <input type="text" id="aadhar" value={aadhar} onChange={updatedata=>{setaadhar(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your aadhar number" required></input>
    <input type="text" id="pancard" value={pancard} onChange={updatedata=>{setpancard(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your pan card number" required></input>
    <input type="text" id="accountnumber" value={accountnumber} onChange={updatedata=>{setaccountnumber(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your Account Number" required></input>
    <input type="text" id="image" value={image} onChange={updatedata=>{setimage(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your image" required></input>
    <input type="text" id="location" value={location} onChange={updatedata=>{setlocation(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your location" required></input>
    <input type="text" id="city" value={city} onChange={updatedata=>{setcity(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter your city" required></input>
    <input type="text" id="loanamount" value={loanamount} onChange={updatedata=>{setloanamount(updatedata.target.value)}} className="mb-2 rounded w-100 p-1 border-0" placeholder="Enter the loan amount" required></input>
    <button type="submit">Submit</button>
    </form>
    </>
  );



}