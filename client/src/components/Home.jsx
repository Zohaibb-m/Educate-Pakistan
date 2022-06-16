import React from "react-dom"
import { Link } from "react-router-dom";
import User_Dashboard from "./User_Dashboard";
function Home(props){
  if (props.isLogin)
    return (
      <div>
    <User_Dashboard User={props.User} />
    </div>
    );
  else return(
    <div>
        <h1>Home Page </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default Home;