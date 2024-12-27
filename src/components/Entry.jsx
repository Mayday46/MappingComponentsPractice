import React from "react";

// 1. Create a template for the repeated code.

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.descrpition}</dd>
    </div>
  );
}

export default Entry;
