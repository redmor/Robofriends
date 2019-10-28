import React from "react";
import "./card.css";

const card = props => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/set_set1/${props.id}?size=200x200`}
        alt="Robot"
      />
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default card;
