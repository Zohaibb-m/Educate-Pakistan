import Axios from "axios";
import { useState,useEffect } from "react";
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/Register"
import Home from "./components/Home"
import User from "./components/User";
import Teacher from "./components/Teacher";
import Header from "./components/Header"

function App() {
  var [isLogin,setLogin]=useState(false);
  
  useEffect(()=>{
    const checkLogin= async()=>{
      const token=localStorage.getItem('tokenStore')
      if(token){
        const verified = await Axios.get('users/verify',{
          headers:{Authorization:token}
        })
        setLogin(verified.data) 
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
      <Header />
    <Router>
    <Routes>
    <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login setLogin={setLogin}/>} />
    <Route path="/User" element={<User />} />
    <Route path="/Teacher" element={<Teacher />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
