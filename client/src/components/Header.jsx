import React from "react-dom"
import { BrowserRouter as Router, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import Axios from "axios"

function Header(props){
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

    function logout(){
        localStorage.clear();
        props.setLogin(false);
      }

    let returnButton = () =>{
        if(props.isLogin)
            return(
                <div className="navbar-nav ms-auto">
                <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle navi" data-bs-toggle="dropdown"><i className="fa fa-user" ></i> Hey , {props.User.firstname}</a>
                            <div className="dropdown-menu dd-men">
                                <a href="#" className="dropdown-item "><i className="fa fa-user" ></i> Your Profile</a>
                                <a href="#" className="dropdown-item"><i className="fa fa-gear" ></i> Settings</a><hr />
                                {/* <Link onClick={logout} to="/" className="dropdown-item">Log Out</Link> */}
                                <a href="/" className="dropdown-item" onClick={logout}>Log Out</a>
                            </div>
                        </div>
                </div>
            )
        else return(
            <div className="navbar-nav ms-auto">
                <a href="/login" className="nav-item nav-link"><i className="fa fa-sign-in" ></i>Login</a>
                <a href="/register" className="nav-item nav-link"><i className="fa fa-user" ></i>Register</a>
            </div>
        )
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
                    {returnButton()}
            </div> 
        </div>
    </nav>
</div>
  );
}

export default Header;