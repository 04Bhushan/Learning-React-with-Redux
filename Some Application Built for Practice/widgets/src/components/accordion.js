import React, { useState } from "react";
//useState is a hook this give access to state inside a functional component
//useState is a react primitive hooks available to us

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  //here we are initializing state of our variables to null
  // when we call useState it returns a arrays with 2 elements
  // activeIndex is a variable & setActiveIndex is a function that 
  //calls every time to change the value of activeIndex variable
  // means here we are intializing activeIndex value to null & 
  //changing it's value at some point of time in future

  //Helper function in Functional Component(Hooks)
  const OnTitleClick = (index) => {
    // console.log("Title Clicked", index);
    setActiveIndex(index);//updating value of activeIndex
  };

  const renderedList = items.map((item, index) => {
    const  active = index === activeIndex ? 'active': '';
    return (
      
      //we are getting 1 extra border (2 horizontal lines) at the top just because we are adding
      //an extra element containing props as a key & for wrapping both inner div element
      //to fix it we will add a React fragment that act as a element but will ignored by react
      // it's just a JSX element that React understands we got 2 div inside it
      <React.Fragment key={item.Title}>
        {/* <div className="title active" onClick={ ()=> console.log("Title Clicked", index)}> */}
        <div className={`title ${active}`} onClick={() => OnTitleClick(index)}>
          <i className="dropdown icon" />
          {item.Title}
        </div>
        <div className={`content ${active}`}>
          <p> {item.content} </p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedList}
      {/* <h1>{activeIndex}</h1> */}
    </div>
  );
};

export default Accordion;
