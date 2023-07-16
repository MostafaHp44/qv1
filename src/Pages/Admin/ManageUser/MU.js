import React from "react";
import { Link } from "react-router-dom";
import { UilFacebook,UilTwitter,UilLinkedin,UilInstagramAlt,UilGithub,UilPen} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import FormExample from "./Form";




const ManageUser = () => {
    const [Update,setUpdate]=useState(false)

    const handelUpdate=()=>{
        setUpdate(curr=>!curr)

    }

    return (
    <React.Fragment>
        <div className="MainUser">

            <section style={{backgroundColor: '#eee'}}>

        <div className="container py-5">

          <div className="row">

            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/admin">Admin-Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/admin/users">user</Link></li>

                </ol>
              </nav>
            </div>

          </div>

          <div className="row">

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                  <h5 className="my-3">Admin 1</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Egypt, Cairo-Embabah</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">

                  <ul className="list-group list-group-flush rounded-3">

                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial" ><UilFacebook /> </div>
                    <p className="mb-0">Most</p>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"><UilTwitter/> </div>
                      <p className="mb-0">twitter</p>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"><UilLinkedin/></div>
                      <p className="mb-0">linkedin</p>
                      </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div className="iconsocial"> <UilInstagramAlt/> </div>
                      <p className="mb-0">Instegram</p>
                      </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                     <div className="iconsocial"><UilGithub /></div> 
            
                      <p className="mb-0">UsernameGithHub</p> 
                   </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">

             

              <div className="row">
                <div className="Request">
        <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>infouser</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style={{width: '45px', height: '45px'}} className="rounded-circle" />
                <div className="ms-3">
                  <p className="fw-bold mb-1">user1</p>
                  <p className="text-muted mb-0">Egypt</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">1-1-2023</p>
              <p className="text-muted mb-0">user1@yahoo.com</p>
            </td>
            <td>
            <Badge bg="success">accept</Badge>
            </td>
            <td>
            <Button variant="danger" style={{margin:'0.5em'}}>Delete</Button> 

            <Button variant="info" onClick={handelUpdate}>Update</Button>

            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt="" style={{width: '45px', height: '45px'}} />
                <div className="ms-3">
                  <p className="fw-bold mb-1">user2</p>
                  <p className="text-muted mb-0">Egypt</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">2-2-2023</p>
              <p className="text-muted mb-0">user2@yahoo.com</p>
            </td>
            <td>
            <Badge bg="success">accept</Badge>
            </td>
            <td>
            <Button variant="danger" style={{margin:'0.5em'}}>Delete</Button>
            <Button variant="info" onClick={handelUpdate}>Update</Button>{' '}

            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt="" style={{width: '45px', height: '45px'}} />
                <div className="ms-3">
                  <p className="fw-bold mb-1">user3</p>
                  <p className="text-muted mb-0">Egypt</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1"> 3-3-2023 </p>
              <p className="text-muted mb-0">user3@yahoo.com</p>
            </td>
            <td>
            <Badge bg="success">accept</Badge>
            </td>
            <td>
            <Button variant="danger" style={{margin:'0.5em'}}>Delete</Button>
            <Button variant="info" onClick={handelUpdate}>Update</Button>{' '}

            </td>
          </tr>
        </tbody>
      </table>

                  </div>
              </div>
              {Update?
              <div className="row" style={{paddingTop:'4em'}}>
              <FormExample/>
            </div>
:
<></>
              }
              
            </div>
          </div>

        </div>
            </section>


          

        </div>
       
    </React.Fragment>
    );
}
 
export default ManageUser;