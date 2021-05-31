import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
var logo = 'logo192.png';


class Navbar extends Component {

    logout=(event)=>{
      event.preventDefault()
      this.props.dispatch({
          type:"LOGOUT"
      })
      
  }

  render () {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "black"}}>
        <a className="navbar-brand" href="#"><img src={ logo }  alt="CmpnLogo" style={{ height: "87px",marginleft: "25px",width:"175px", }}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxheight: "100px" }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {
              this.props.user ? 
              <span style={{ color:"white" }}>Welcome { this.props.user } </span>
              :""
            }
          </ul>
          <form className="d-flex">
            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" style={{ marginLeft:"10px"}} type="submit">Search</button>
          </form>
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxheight: "100px" }}>
            <li className="nav-item active">
              {
        
               this.props.loginstatus ? 

               <button className="btn btn-danger" onClick={this.logout}>Logout</button>  
               :  <Link to="/login"><button className="btn btn-primary">Login</button></Link>
              }

              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default connect(function(state,props){
    return {

        user:state ?.user?.name,
        loginstatus:state?.isloggedin,
    }
})(Navbar)