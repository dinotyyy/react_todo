import React, {Component} from 'react';

class Header extends React.Component {
    render(){
      return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#"/>
            <img src="https://www.insw.go.id/img/logos/lnsw.png" width="200" height="30" alt="" loading="lazy" />
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
        </nav>
        
      )
    }
  }
  
export default Header
