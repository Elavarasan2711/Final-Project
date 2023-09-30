import React from "react";
import axios from "axios";

export function Clientdashboard() {
  function handleclientRegister(event) {
    event.preventDefault()

    var username = document.getElementById("username").value
    
    var dob = document.getElementById("date").value
    
    var phonenumber = document.getElementById("phonenumber").value
    
    var aadhar = document.getElementById("aadhar").value
    
    var pancard = document.getElementById("pancard").value
    
    var accountnumber = document.getElementById("accountnumber").value
    
    var image = document.getElementById("image").value
   
    var location = document.getElementById("location").value
    
    var city = document.getElementById("city").value
    
    var loanamount = document.getElementById("loanamount").value
   

    var clientdetails = {
      username: username,
      dob: dob,
      phonenumber: phonenumber,
      aadhar: aadhar,
      pancard: pancard,
      accountnumber: accountnumber,
      image: image,
      location: location,
      city: city,
      loanamount: loanamount
    }

    if (username === '' && dob===''&& phonenumber===''&& aadhar===''&& pancard==='' && accountnumber==='' && image==='' && location===''&& city===''&& loanamount==='') {
      alert("Enter the details")
    }
    else {
      axios.post("http://localhost:3030/clientdashboard", clientdetails)
        .then((res) => {
          if (res.data.status === "error") {
            alert("data are not inserted")
          }
          else {
            if (res.data.status === "success") {
              alert("data are inserted")
              window.location.href = '/'
            }
          }
        })

    }
  }
  return (

    <>
      <h1> Client Register Form</h1><br />
      <form onSubmit={handleclientRegister}>
        <div class="form-outline mb-4">
          <input type="text" id="username" class="form-control form-control-lg" />
          <label class="form-label text-white" >Username</label>
        </div>

        <div class="form-outline mb-4">
          <input type="date" id="date" class="form-control form-control-lg" />
          <label class="form-label text-white">Date of birth</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="phonenumber" class="form-control form-control-lg" />
          <label class="form-label text-white">Phone Number</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="aadhar" class="form-control form-control-lg" />
          <label class="form-label text-white">Aadhar Card</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="pancard" class="form-control form-control-lg" />
          <label class="form-label text-white" >Pan Card</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="accountnumber" class="form-control form-control-lg" />
          <label class="form-label text-white" >Account Number</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="image" class="form-control form-control-lg" />
          <label class="form-label text-white" >Image</label>
        </div>


        <div class="form-outline mb-4">
          <input type="text" id="location" class="form-control form-control-lg" />
          <label class="form-label text-white" >Location</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="city" class="form-control form-control-lg" />
          <label class="form-label text-white" >City</label>
        </div>

        <div class="form-outline mb-4">
          <input type="text" id="loanamount" class="form-control form-control-lg" />
          <label class="form-label text-white" >Loan Amount</label>
        </div>

        <div class="d-flex justify-content-center">
          <button type="submit" className="btn btn-success">Get Loan</button>
        </div>
      </form>


    </>
  );
}