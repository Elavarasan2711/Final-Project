import React, { useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CustomerDetails() {
  // var {id} = useParams()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/customerdetails")
      .then(res => res.json())  
      .then(details => setData(details))
  })
  function handledelete(sno){
    // alert(sno)
    var deletedata={
      id:sno
    }
    axios.post("http://localhost:3030/delete",deletedata)
    .then((res)=>{
      if(res.data.status==="error"){
        alert("data is not deleted")
      }
      else if(res.data.status==="success"){
        alert("datas are deleted successfully")
        window.location.reload();
      }
    })
  }
  return (
    <>
      <table className="table-responsive table table-success table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Aadhar Card</th>
            <th>Pan Card</th>
            <th>Account Number</th>
            <th>Image</th>
            <th>Location</th>
            <th>City</th>
            <th>Loan Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, index) => (

              <>
                <tr>
                  <td>{value.username}</td>
                  <td>{value.dob}</td>
                  <td>{value.phonenumber}</td>
                  <td>{value.aadhar}</td>
                  <td>{value.pancard}</td>
                  <td>{value.accountnumber}</td>
                  <td>{value.image}</td>
                  <td>{value.location}</td>
                  <td>{value.city}</td>
                  <td>{value.loanamount}</td>
                  <td>
                    <Link to={`/update/${value.sno}`} className="btn btn-success">update</Link>

                  <button className="btn btn-danger" onClick={()=>{handledelete(value.sno)}}>Delete</button>
                </td>
              </tr >
                    </>
        ))
            }
      </tbody>
    </table >
        </>
);
          }