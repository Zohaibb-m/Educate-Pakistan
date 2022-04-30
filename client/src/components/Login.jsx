import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {BrowserRouter as Router, Route, Link,  useNavigate } from 'react-router-dom'
function Login({setLogin}){
    let [user,setUser]=useState({username:"",email:"",password:""})
    let [err,setErr]=useState("")
    const navigate=useNavigate();

    const onChangeInput=e=>{
        let {name,value}=e.target;
        setUser({...user,[name]:value})
        setErr('') 
    }
    const loginSubmit= async e=>{
        e.preventDefault();
        try {
            const res=await Axios.post("/users/login",{
                email:user.email,
                password:user.password
            })
            setUser({username:'',email:'',password:''})
            localStorage.setItem('tokenStore',res.data)
            console.log(res.data)
            setLogin(true)
            navigate("/UserHome");
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    return (
        <section>
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={loginSubmit}>
                <input type='email' required name="email" id="login-email" value={user.email} onChange={onChangeInput}/>
                <input type='password' required name="password" id="login-password" value={user.password} autoComplete="true" onChange={onChangeInput}/>
                <button type="submit">Login</button>
            </form>
            <h3>Not a User?</h3><button><Link to="/register">Register</Link></button>
            <h3>{err}</h3>
            
        </div>
        </section>
    );
}

export default Login;