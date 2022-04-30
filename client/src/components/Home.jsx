import React from "react-dom"
import { Link } from "react-router-dom";

function Home(props){
  
  return (
    <div>
    <h1>Educate Pakistan Home Page (Testing Phase On)</h1>
    <Link to="/login">Login</Link><br />
    <Link to="/register">Register</Link> <br />
    </div>
  );
}

export default Home;