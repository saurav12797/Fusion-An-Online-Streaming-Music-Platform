import React from "react";
import "./artist.css";

function Card(prop: any) {
  return (
    <>
      <div className="row">
        <div className="card">
          <img src={prop.img} alt="image" />
          <h3>{prop.h3}</h3>
          <p>{prop.p}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
