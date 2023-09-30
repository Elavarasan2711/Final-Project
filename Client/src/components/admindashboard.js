import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './admindashboard.css'



export function Admindashboard() {
  var { id } = useParams()
  const [username, setUsername] = useState('')
  useEffect(() => {
    fetch("http://localhost:3030/admindashboard/" + id)
      .then(data => data.json())
      .then((res) => {
        setUsername(res[0].username)
      })
  }, [])
  return (

    <>

      <section class="wrapper">
        <div class="container">
          <div class="row">
            <div class="col text-center mb-5">
              <h1>{username}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 "><div class="card text-dark card-has-bg click-col">
              <img class="card-img d-none one" src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">LOANS TO UPDATE</small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">We are happy to announce we are providing personal loans with the interest of 1.8%.</a></h4>
                  <small><i class="far fa-clock"></i> Execution Date: November 27,2024</small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarsan V</h6>
                      <small>Director of Casandra Bank</small>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 two"><div class="card text-dark card-has-bg click-col" >
              <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">LOANS TO UPDATE</small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com"> Build your dream house now! we are providing a home loans with the interest of 0.9%</a></h4>
                  <small><i class="far fa-clock"></i> Execution Date: November 27,2024</small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarasan V</h6>
                      <small>Director of Casandra Bank</small>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 three"><div class="card text-dark card-has-bg click-col" >
              <img class="card-img d-none" src="https://source.unsplash.com/600x900/?computer,design" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">LOANS TO UPDATE</small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com"> Education is free! When you choose a right bank.Yes,we are providing a education loans with the interest of 0.5%</a></h4>
                  <small><i class="far fa-clock"></i> Execution Date: November 27,2024</small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarasan V</h6>
                      <small>Director of Casandra Bank</small>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>

            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 one"><div class="card text-dark card-has-bg click-col" >
              <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt=" Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">New schemes for agricultural loans</small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">Farmers who are tired of old irrigation system.We are providing a free pipeline system for irrigation with the interest of 0.3%.</a></h4>
                  <small><i class="far fa-clock"></i>Execution Date: November 27,2024 </small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarasan V</h6>
                      <small>Director of Casandra Bank</small>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 two"><div class="card text-dark card-has-bg click-col" >
              <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tree,nature" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">GOLD LOANS</small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">People's please keep your golds in with low interest rate.we are providing a gold loan with the interest of 1.0% </a></h4>
                  <small><i class="far fa-clock">Execution Date: November 27,2024 </i> </small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarasan V</h6>
                      <small>Director of Casandra Bank </small>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4 three"><div class="card text-dark card-has-bg click-col">
              <img class="card-img d-none" src="https://source.unsplash.com/600x900/?computer,design" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?" />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">Health Insurance </small>
                  <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">Health is Wealth! Then why are you wasting your time,Come and grab the health insurance plans with our bank.</a></h4>
                  <small><i class="far fa-clock">Execution Date: November 27,2024</i> </small>
                  <div class="d-flex justify-content-center p-3">
                    <Link to={`/customerdetails/${id}`}><button type="submit" className="btn btn-success">View Clients</button></Link>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img class="mr-3 rounded-circle rc" src="https://assets.codepen.io/460692/internal/avatars/users/default.png?format=auto&version=1688931977&width=80&height=80" alt="Generic placeholder image" />
                    <div class="media-body">
                      <h6 class="my-0 text-dark d-block">Elavarasn V</h6>
                      <small>Director of Casandra Bank</small>

                    </div>
                  </div>
                </div>
              </div>
            </div></div>

          </div>

        </div>
      </section>







    </>

  );
}