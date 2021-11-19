import React from "react";
import "../Body/prodcast.css";

function Mycard(props) {
  const { h3, img, p } = props;
  /* const a=props.img; */
  /* object destruct.. */
  return (
    <div className="row">
      <div className="card1">
        <img src={img} alt="artist" />
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Mycard;
