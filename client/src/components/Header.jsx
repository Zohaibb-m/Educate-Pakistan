import React from "react-dom"
import { BrowserRouter as Router, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Axios from "axios"

function Header(){
    let [state,setState]=useState({courses:[]})
  
    useEffect(()=>{
        async function getSubjects(){
            await Axios.post("/data/getData")
                .then((response)=>{
                    setState({courses:response.data})
                    console.log(state.courses)
                })
        }
        getSubjects() 
    }, [])

    let returnCourses = () =>{
        console.log("Here")
        return state.courses.map((course, index)=>(
            <div key={index}>
                <a href={"/courses/"+course._id} className="dropdown-item ">{course.courseName}</a>
            </div>
        )) 
    }

  return (
    <div className="m-6">
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bg">
        <div className="container-fluid">
            <a className="navbar-brand abs" href="#">EDUCATE PAKISTAN</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle navi" data-bs-toggle="dropdown">Courses</a>
                        <div className="dropdown-menu dd-men">
                            {returnCourses()}
                        </div>
                    </div>
                    <a href="/" className="nav-item nav-link navi">Home</a>
                    <a href="#" className="nav-item nav-link navi">About</a>
                    <a href="#" className="nav-item nav-link navi">Contact Us</a>
                </div>
                <div className="navbar-nav ms-auto">
                    <a href="/login" className="nav-item nav-link"><i className="fa fa-sign-in" ></i>Login</a>
                    <a href="/register" className="nav-item nav-link"><i className="fa fa-user" ></i>Register</a>
                </div>
            </div> 
        </div>
    </nav>
</div>
  );
}

export default Header;