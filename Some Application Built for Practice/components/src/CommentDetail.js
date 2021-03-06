import React from "react";
import faker from "faker";

//props is javascript object that contains information coming from parent component to child component
const CommentDetail = (props) => {
  // console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
        {/* <img alt="avatar" src={props.avatar} /> */}
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.TimeAgo}</span>
        </div>
        <div className="text">{props.Comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
