import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {BrowserRouter as Router, Route, Link,  useNavigate, useParams } from 'react-router-dom'

function User_Dashboard(props){
    var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
    let date=new Date(props.User.birthday)
    let birthday=date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear()
    return (
        <div className="container bootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
              <div className="panel">
                  <div className="user-heading round">
                      <a href="#">
                          <img src={require("../images/avatar.png")} alt="" />
                      </a>
                      <h1>{props.User.firstname+" "+props.User.lastname}</h1>
                      <p>{props.User.email}</p>
                  </div>
        
                  <ul className="nav nav-pills nav-stacked navb">
                      <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li>
                      <li><a href="#"> <i className="fa fa-tasks"></i> Progress</a></li>
                      <li><a href="#"> <i className="fa fa-edit"></i> Edit profile</a></li>
                  </ul>
              </div>
          </div>
          <div className="profile-info col-md-9">
        
              <div className="panel">
                  <div className="bio-graph-heading">
                      Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
                  </div>
                  <div className="panel-body bio-graph-info">
                      <h1>Bio Graph</h1>
                      <div className="row">
                          <div className="bio-row">
                              <p><span>First Name </span>: {props.User.firstname}</p>
                          </div>
                          <div className="bio-row">
                              <p><span>Last Name </span>: {props.User.lastname} </p>
                          </div>
                          <div className="bio-row">
                              <p><span>Username </span>: {props.User.username}</p>
                          </div>
                          <div className="bio-row">
                          
                              <p><span>Birthday</span>: {birthday}</p>
                          </div>
                          <div className="bio-row">
                              <p><span>Grade </span>: 8</p>
                          </div>
                          <div className="bio-row">
                              <p><span>Email </span>: {props.User.email}</p>
                          </div>
                          <div className="bio-row">
                              <p><span>Mobile </span>: {props.User.mobileNo}</p>
                          </div>
                          <div className="bio-row">
                              <p><span>Gender </span>: {props.User.gender}</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="panel">
                              <div className="panel-body">
                                  <div className="bio-chart">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">40%</div>
                                    </div>
                                  </div>
                                  <div className="bio-desk">
                                      <h4 className="green">Envato Website</h4>
                                      <p>Started : 15 July</p>
                                      <p>Deadline : 15 August</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel">
                              <div className="panel-body">
                                  <div className="bio-chart">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">90%</div>
                                    </div>
                                  </div>
                                  <div className="bio-desk">
                                      <h4 className="green">ThemeForest CMS </h4>
                                      <p>Started : 15 July</p>
                                      <p>Deadline : 15 August</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel">
                              <div className="panel-body">
                                  <div className="bio-chart">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">90%</div>
                                    </div>   
                                  </div>
                                  <div className="bio-desk">
                                      <h4 className="green">VectorLab Portfolio</h4>
                                      <p>Started : 15 July</p>
                                      <p>Deadline : 15 August</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel">
                              <div className="panel-body">
                                  <div className="bio-chart">
                                    <div className="progress blue">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">90%</div>
                                    </div> 
                                  </div>
                                  <div className="bio-desk">
                                      <h4 className="green">Adobe Muse Template</h4>
                                      <p>Started : 15 July</p>
                                      <p>Deadline : 15 August</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </div>
    );
}

export default User_Dashboard;