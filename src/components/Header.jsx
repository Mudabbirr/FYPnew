import React from "react";
import "./header.css";
import logo from "../assets/portal_logo.png";
import explore1 from "../assets/explore1.png";
import apply1 from "../assets/Apply1.png";
import wishlist from "../assets/Heart.png";
import signin from "../assets/signup.png";

export default function Header() {
  return (
    <div className="outer">
      
      <div className="header">
        <img src={logo} alt="" className="logo"  width='130px' height='42px'/>
        <ul className="nav">
          <a href="">
            {" "}
            <li>What we do? </li>{" "}
          </a>
          <a href="">
            {" "}
            <li>Destination</li>{" "}
          </a>
          <a href="">
            {" "}
            <li>Find a Course</li>
          </a>
          <a href="">
            {" "}
            <li>
              <img className="icon" src={explore1} />
              Explore
            </li>
          </a>
          <a href="">
            {" "}
            <li>
              <img className="icon" src={apply1} alt="" />
              Apply
            </li>
          </a>
          <a href="">
            {" "}
            <li>
              <img className="icon" src={wishlist} alt="" />
              Wishlist
            </li>
          </a>
          <a href="">
            {" "}
            <li className="s_in">
              <img className="icon" src={signin} alt="" />
              Sign in
            </li>{" "}
          </a>
        </ul>
      </div>
      {/* <div >
        <div className="content">
          <h1>Choose Your Best Abroad Destination</h1>
         
        </div>
      </div>
    </div> */}
    </div>
  );
}
