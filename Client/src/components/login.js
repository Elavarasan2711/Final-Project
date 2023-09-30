import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Login(){

    function handlelogin(event){
      event.preventDefault()
      var email=document.getElementById("email").value
      var password=document.getElementById("password").value

      var logindetails={
        email:email,
        password:password
      }
      if(email===""){
        alert("enter the email")
      }
      else if(password===""){
        alert("enter the password")
      }
      else{
        axios.post("http://localhost:3030/login",logindetails)
        .then((res)=>{
          if(res.data.status==="success"){
            var role=res.data.role
            var id=res.data.id
            if(role==="admin"){
              window.location.href=`/admindashboard/${id}`
            }
            else if(role==="client"){
              window.location.href=`/clientdashboard/${id}`
            }
            
          }
          else if(res.data.status==="invalid"){
            alert("your password is invalid")
          }
          else if(res.data.status==="empty_set"){
            alert("your email or password invalid")
          }
          else if(res.data.status==="error"){
            alert("contact admin")
          }
        })
      }
    }

  return(
    <>
    <section class=" bg-color">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card card-radius" >
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid img-content" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handlelogin}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3 fontawe"></i>
                    <span class="h1 fw-bold mb-0"></span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3 body-head-text">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="email" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2 p-color">Don't have an account? <Link to="/">Register here</Link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  );
}