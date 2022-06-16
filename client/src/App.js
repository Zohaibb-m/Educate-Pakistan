import Axios from "axios";
import { useState,useEffect } from "react";
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/Register"
import Home from "./components/Home"
import Header from "./components/Header"
import Course from "./components/Course";
import Footer from "./components/Footer"
 
function App() {
  var [isLogin,setLogin]=useState(false);
  var [user,setUser]=useState({})
  
  useEffect(()=>{
    const checkLogin= async()=>{
      const token=localStorage.getItem('tokenStore')
      if(token){
        const verified = await Axios.get('users/verify',{
          headers:{Authorization:token}
        })
        if(verified.data){
          setLogin(true)
          setUser(verified.data)
        }
        else setLogin(verified.data) 
        if(!verified.data)localStorage.clear()
      }
      else{

        setLogin(false)
      }
    }
    checkLogin()
  })
   
  return (
    <div>
    <Header isLogin={isLogin} User={user}/>
    <Router>
    <Routes>
    <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin} User={user}/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login isLogin={isLogin} setLogin={setLogin}/>} />
    {/* <Route path="/Courses" element={<Courses />} /> */}
    <Route path="/courses/:courseID" element={<Course />} />
    </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;

