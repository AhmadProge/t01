import React, { useState, useEffect } from "react";
import "./style.css";

// init local storg = fav
// movie : movie .id
//map over the array of 
// and acsios to get moves by id 

//  fav:[{mavie{name:,
//   id:""}}]
const Favorites = () => {


  return (
    <>
<div>
<div className="hero-section">
  <div className="card-grid">
    <a className="card" href="#">
      <div className="card__background" 
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`}}>
      </div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a className="card" href="#">
      <div className="card__background"
       style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`}}>
      </div>
      
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
      <div className="card__background" style="background-image: url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
  
    <a className="card" href="#">
      <div className="card__background" style="background-image: url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>
      <div className="card__content">
        <p className="card__category">Category</p>
        <h3 className="card__heading">Example Card Heading</h3>
      </div>
    </a>
  </div>
</div></div>
</>
  );
};

export default Favorites;