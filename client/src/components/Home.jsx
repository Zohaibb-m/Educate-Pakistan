import React from "react-dom"
import { Link } from "react-router-dom";

function Home(props){
  
  function logout(){
    localStorage.clear();
    props.setLogin(false);
  }
  if (props.isLogin)
    return (
      <div>
    <h1>{props.User.firstname} {props.User.lastname}</h1>
    <Link onClick={logout} to="/">Log Out</Link>
    </div>
    );
  else return(
    <div>
        User
    </div>
  )
}

export default Home;