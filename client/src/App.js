import Axios from "axios";
import { useState,useEffect } from "react";
import Login from "./components/Login"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from "./components/Register"
import Home from "./components/Home"
import UserHome from "./components/UserHome";

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
    <Router>
    <Routes>
    <Route path="/" element={<Home isLogin={isLogin} setLogin={setLogin} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login setLogin={setLogin}/>} />
    <Route path="/UserHome" element={<UserHome setLogin={setLogin}/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
