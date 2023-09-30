import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Register() {
  function handleRegister(event) {
    event.preventDefault()
    let user_name = document.getElementById("user_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let mobile_number = document.getElementById("mobile_number").value;
    let role = document.getElementById("role").value

    var userDetails = {
      user_name: user_name,
      email: email,
      password: password,
      mobile_number: mobile_number,
      role: role
    }

    if (user_name === '' && email === '' && password === '' && mobile_number === '' && role === '') {
      alert("Enter the details")
    }
    else {
      axios.post("http://localhost:3030/Register", userDetails)
        .then((res) => {
          if (res.data.status === "error") {
            alert("Data are not inserted")
          }
          else if (res.data.status === "success") {
            alert("Registered Successfully")
          }

        })
    }
  }
  return (
    <>

      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card-head">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                    <form onSubmit={handleRegister}>

                      <div class="form-outline mb-4">
                        <input type="text" id="user_name" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example1cg">Username</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="email" id="email" class="form-control form-control-lg" />
                        <label>Email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="password" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cg">Password</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="mobile_number" class="form-control form-control-lg" />
                        <label class="form-label" for="form3Example4cdg">Mobile Number</label>
                      </div>
                      <select id="role">
                        <option>Select the Role</option>
                        <option value="admin">Admin</option>
                        <option value="client">Client</option>
                      </select>



                      <div class="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success">REGISTER</button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">Have already an account?
                        <Link to="/Register"> <u>Login here</u></Link></p>

                    </form>

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