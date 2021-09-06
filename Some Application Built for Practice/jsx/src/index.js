// Import the react & react-dom libraries
// Import is ES2015 method for accessing dependancies/packages earlier 'require' method is used from javascript modules
import React from "react";
import ReactDOM from "react-dom";

//create a react component
// a component can be  a function or a class that uses JSX(HTML looking stuff) & converts it into HTML & show to the user . It also handles user events
// let's create a function Component
// const App = function(){
//     return <div>Hi there</div>;//JSX stuff
// };

// const ButtonText = () => {
//     return "Click ON Me!";
// };

//You can also write using Arrow function but here 'function' keyword is ignored
const App = () => {
    const buttonText = {text:'Click Me'} ;// try using  1234, 10 20,"Click Me!",["hi", "there", 1244],[23, 1244]
    // but if we replace by this {text:'Click Me'} then it will throw error to fix it we need render it by 'buttonText.text' in line no. 31
    // in the same way we can do it for line no. 30
    // like style={ backgroundColor: "green", color: "white" }
    // then style={ style.backgroundColor/style.color }
    const labelText = "Enter Name:";
  return (
    <div>
        {/* //use className insted of class to avoid clash of class keyword with this JSX element but yeah in future when our moodern browser detects difference between outer class keyword  & inside JSX element at that time you can avoid this but make sure you check documnetation for futher updation */}
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* //inner culry brace takes all stuffs as object like key-value pairs  */}
      <button style={{ backgroundColor: "green", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

/* // Take the react component & show it on screen */

/* // here we are passing 2 arguments that is compenent we have created & an ID to render on the screen */

ReactDOM.render(<App />, document.querySelector("#root"));
