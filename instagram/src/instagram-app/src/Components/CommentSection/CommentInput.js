import React from "react";
import "./CommentSection.css";
import sytled from 'styled-components';

const CommentInput = props => {
  return (
    <div>
      <form onSubmit={props.handleComment}>
        <CommInput
          type="text"
          placeholder="Add comment... "
          onChange={props.newComment}
          value={props.text}
        />
      </form>
    </div>
  );
}

export default CommentInput;

const CommInput = sytled.input`
width: 96.2%;
height: 3rem;
margin-top: 0.6rem;
padding-left: 1.1rem;
font-size: 0.9rem;
border-top: 1px solid #c4c4c4;
border: none;
border-radius: 0 0 10px 10px;
`
