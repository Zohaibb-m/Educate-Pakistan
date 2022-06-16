import React, {useState,useEffect} from "react";
import Axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
function Login({setLogin}){
    let [user,setUser]=useState({firstname:"",lastname:"",gender:"",email:"",password:"",birthday:"",cpassword:"",roleID:2})
	console.log(user)
    let [err,setErr]=useState("")
    const navigate=useNavigate();
    const onChangeInput=e=>{
        let {name,value}=e.target;
        console.log(name,value)
        setUser({...user,[name]:value})
        setErr('') 
    }

    const registerSubmit=async e=>{
        e.preventDefault();
        try {
            // console.log(user,"HEllo")
            const res=await Axios.post("/users/register",{
				roleID:user.roleID,
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                password:user.password,
                cpassword:user.cpassword,
                birthday:document.getElementById("birthday").value,
                gender:user.gender
            })
            setUser({firstname:"",lastname:"",gender:"",email:"",password:"",birthday:"",cpassword:"",roleID:2})
            console.log(res.data.token)
            setErr(res.data)
        } catch (err) {
            err.response.data.msg && setErr(err.response.data)
        }
    }
    return (
        <section className="ftco-section" style={{backgroundColor: "#fafafa"}}>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="img"  style={{backgroundColor: "#5d9691"}}>
						<div>
							<h1 className="welcome-content">Register</h1>
							<p className="welcome-content-p">Welcome on Board. Captain!</p>
						</div>
			            </div>
						<div className="login-wrap p-4 p-md-5">
					        <div className="form-group mb-3 mb3-style">
                                <button type="submit" className="form-control btn btn-primary rounded submit px-3 fbStyle"> <span className="fa fa-large fa-facebook-square" ></span> | Register Using Facebook </button>
		                    </div>
					        <div className="form-group mb-3">
                                <button type="submit" className="form-control btn btn-primary btn-social btn-facebook rounded submit px-3 gStyle"><span className=" fa fa-google-plus-square"></span> | Register Using Google+ </button>
		                    </div>
                            <form onSubmit={registerSubmit} className="signin-form">
							    <div className="form-group mb-3">
			      			        <label className="label" htmlFor="name">FirstName</label>
                                    <input type='text' className="form-control" required name="firstname" id="register-name" value={user.firstname} onChange={onChangeInput}/>
			      		        </div>
						        <div className="form-group mb-3 form-group-mb3-style">
			      			        <label className="label" htmlFor="name">Last Name</label>
                                    <input type='text' required className="form-control" name="lastname" id="register-name1" value={user.lastname} onChange={onChangeInput}/>
			      		        </div>
						        <div className="form-group mb-3 custom-control custom-radio" >
			      			        <label className="label">Gender</label><br />
							        <div className="custom-control custom-radio" onChange={onChangeInput}>
			      			            <input type="radio" className="custom-control-input" name="gender" id="male" required value="male"/>
							            <label className="custom-control-label" htmlFor="gender"> Male</label>							
							            <input type="radio" className="custom-control-input" name="gender" id="female" required value="female"/>
							            <label className="custom-control-label" htmlFor="gender"> Female</label>							
							            <input type="radio" className="custom-control-input" name="gender" id="other" required value="other"/>
							            <label className="custom-control-label" htmlFor="gender"> Other</label>
							        </div>
			      		        </div>
						        <div className="form-group mb-3">
						            <div id="date-picker-example" className="md-form md-outline input-with-post-icon datepicker" inline="true">
							            <label className="label" htmlFor="birthday">Birthday</label>
							            <input placeholder="Select date" type="date" id="birthday" className="form-control" name="birthday"  onChangeInput={onChangeInput}/>
							        </div>
						        </div>
			      		        <div className="form-group mb-3">
			      			        <label className="label" htmlFor="name">Email</label>
                                    <input type='email' required className="form-control" name="email" id="register-email" value={user.email} onChange={onChangeInput}/>
			      		        </div>
		                        <div className="form-group mb-3">
		            	            <label className="label" htmlFor="password">Password</label>
                                    <input type='password' className="form-control" required name="password" id="register-password" value={user.password} autoComplete="true" onChange={onChangeInput}/>
		                        </div>
					            <div className="form-group mb-3">
		            	            <label className="label" htmlFor="cpassword"> Confirm Password</label>
		                            <input type='password' className="form-control" required name="cpassword" id="register-password1" value={user.cpassword} autoComplete="true" onChange={onChangeInput}/>
		                        </div>
		                        <div className="form-group">
		            	            <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
		                            <h3>{err}</h3>
		                        </div>
		                    </form>
                            <p className="text-center">Already a User?<Link to="/login">Login</Link></p>
		                </div>
		            </div>
				</div>
			</div>
		</div>
	</section>);
}

export default Login;