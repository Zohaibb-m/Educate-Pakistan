import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
function Login({setLogin}){
    let [user,setUser]=useState({username:"",email:"",password:""})
    let [err,setErr]=useState("")
    const navigate=useNavigate();
    const onChangeInput=e=>{
        let {name,value}=e.target;
        setUser({...user,[name]:value})
        setErr('') 
    }

    const registerSubmit=async e=>{
        e.preventDefault();
        try {
            const res=await Axios.post("/users/register",{
                username:user.username,
                email:user.email,
                password:user.password
            })
            setUser({username:'',email:'',password:''})
            console.log(res.data.token)
            setErr(res.data)
        } catch (err) {
            err.response.data.msg && setErr(err.response.data)
        }
    }
    return (
        <section>
        <div className="Register">
        <h1>Register</h1>
            <form  onSubmit={registerSubmit}>
                <input type='text' required name="username" id="register-name" value={user.username} onChange={onChangeInput}/>

                <input type='email' required name="email" id="register-email" value={user.email} onChange={onChangeInput}/>

                <input type='password' required name="password" id="register-password" value={user.password} autoComplete="true" onChange={onChangeInput}/>

                <button type="submit">Register</button>
            </form>
            <h3>Already a User?</h3><Link to="/login">Login</Link>
            <h3>{err}</h3>
        </div>
        </section>
    );
}

export default Login;