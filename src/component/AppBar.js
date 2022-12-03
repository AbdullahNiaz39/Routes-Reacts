import React from 'react'
import { NavLink } from 'react-router-dom';

 const AppBar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </nav></div>
  )
}
 
export default AppBar;