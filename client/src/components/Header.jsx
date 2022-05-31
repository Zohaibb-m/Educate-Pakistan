import React from "react-dom"
import { BrowserRouter as Link} from "react-router-dom"
function Header(){
  
  return (
    <div className="m-6">
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bg">
        <div className="container-fluid">
            <a href="/" className="navbar-brand abs">EDUCATE PAKISTAN</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</a>
                        <div className="dropdown-menu dd-men">
                            <a href="#" className="dropdown-item">English</a>
                            <a href="#" className="dropdown-item">Urdu</a>
                            <a href="#" className="dropdown-item">MATHS</a>
                        </div>
                    </div>
                    <a href="/" className="nav-item nav-link">Home</a>
                    <a href="#" className="nav-item nav-link">About</a>
                    <a href="#" className="nav-item nav-link">Contact Us</a>
                </div>
                <div className="navbar-nav ms-auto">
                     
                        
                        <a href="/login" className="nav-item nav-link"><i className="fa fa-sign-in" ></i>Login</a>
                        <a href="/register" className="nav-item nav-link"><i className="fa fa-user" ></i>Register</a>
                </div>
            </div>
        </div>
    </nav>
</div>
  );
}

export default Header;