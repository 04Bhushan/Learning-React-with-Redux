import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h3>Warning!</h3>
        Are you Sure You really wanna do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          // avatar={faker.image.fashion()}
          // author="Sam"
          author={faker.name.firstName()}
          TimeAgo="Today at 4:45AM"
          Comment="Nice Post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          // avatar={faker.image.image()}
          // author="Alex"
          author={faker.name.firstName()}
          TimeAgo="Today at 8:15PM"
          Comment="Your Post is Amazing"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          // avatar={faker.image.image()}
          // author="Jane"
          author={faker.name.firstName()}
          TimeAgo="Yesterday at 2:45PM"
          Comment="Your Post is Worthwatching"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          // avatar={faker.image.image()}
          // author="Celly"
          author={faker.name.firstName()}
          TimeAgo="Yesterday  at 6:45AM"
          Comment="Good Post"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

//semanctic ui CDN
