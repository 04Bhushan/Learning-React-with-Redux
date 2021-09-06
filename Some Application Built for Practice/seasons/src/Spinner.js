import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

//If developer forgots to pass the message then by defalut
// this msg is shown up on the screen as a default MSG
Spinner.defaultProps = {
    message: 'Loading...'
};


export default Spinner;
