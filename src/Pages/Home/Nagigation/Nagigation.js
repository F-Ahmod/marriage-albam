import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nagigation.css';
import Wedding from '../../Wedding/Wedding';
import Home from '../Home';
import Angajment from '../../Angajment/Angajment';
import logo from "../../images/logo.png"
import Walima from '../../Walima/Walima';
import Couple from '../../Couple/Couple';
import Footer from '../../Footer/Footer';
import OurHistory from '../../OurHistory/OurHistory';
import Organization from '../../Organization/Organization';
import Time from '../../Time/Time';
function Nagigation() {
  

  return (
    <div className='d-flex '>

      <div id="list-example" class="list-group b  nav-menu  ">
        <img className='mx-auto' style={{ width: "100px", height: "100px" }} src={logo} alt="" />


        <p className='abc mx-auto'><i>Marrige albam</i></p>
        <a class="list-group-item list-group-item-action ab text-center" href="#list-item-1">
          <i>Home</i>
        </a>
        <a class="list-group-item list-group-item-action ab text-center" href="#list-item-2">
        <i>Couple</i>
        </a>
        <a class="list-group-item list-group-item-action ab text-center" href="#list-item-3">
        <i>Our Love History</i>
        </a>
        <a class="list-group-item list-group-item-action ab text-center" href="#list-item-4">
        <i>Gellary</i>
        </a>
         <a class="list-group-item list-group-item-action ab text-center" href="#list-item-5">
         Organization
        </a>
        <a class="list-group-item list-group-item-action ab text-center" href="#list-item-6">
        When and Whare 
        </a> 
        {/* <a class="list-group-item list-group-item-action ab text-center" href="#list-item-7">
        Footer
        </a> */}
      </div>
      <div style={{ width: "100%", height: "100vh", overflow: "scroll" }} data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">


        <h4 id="list-item-1">
          <Home />
        </h4>
        <span id="list-item-2">
        <Couple/>
        </span>
        <h4 id="list-item-3">
        <OurHistory/>

        </h4>
        <h4 id="list-item-4">
          <Angajment /><Walima/><Walima/>

        </h4>

         <h4 id="list-item-5">
          <Organization/>
        </h4>
        <h4 id="list-item-6">
        <Time/>
        </h4> 
        <h4 id="list-item-7">
          <Footer/>
        </h4>
       
      </div>
    </div>
    
  );
}

export default Nagigation;