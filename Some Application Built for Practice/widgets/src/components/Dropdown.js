import React, { useState, useEffect, useRef} from "react";

const Dropdown = ({ label, options, Selected, onSelectedChange }) => {
  //to set DD open/close
  const [OpenDD, setOpenDD] = useState(false); //false means it is intially closed
  const ref = useRef();
  // it runs only one time

  // when we close/remove the DD component from dom ref.current set to null that's why it is giving
  // that error "Cannot read property 'contains' of null"
  // to fix this we will turnoff below eventlistner so we'll use cleanup function
  useEffect(() => {
    
    const onBodyClick = (event) => {
      // console.log("Body click!");
      // console.log(event.target);
       if(ref.current && ref.current.contains(event.target))
      {
        return; //doing nothing
      }//runs if we click inside DD

      //for React v17 if u are using it...
      // if(ref.current && ref.contains(event.target))
      setOpenDD(false);//runs if we don't  click inside DD like 
      //if we click outside DD then it will close DD
    };

    document.body.addEventListener('click', onBodyClick);

    //cleanup function
    return () =>{
      document.body.removeEventListener('click', onBodyClick); //removing DD
    };
  },[]);

  const renderedOptions = options.map((option) => {
    //whenever we click on one the option of DDL it gets selected but
    //it also showed up with other unselected items so to fix it we use if-else
    // console.log(OpenDD);
    if (option.value === Selected.value) {
      return null; // null means it will render nothing
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          // console.log("Item Clicked");
          onSelectedChange(option);
        }} //function calling
      >
        {option.label}
      </div>
    );
  });

  console.log(ref.current);
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        {/* // using onclick event handeler we will set it open/close by reversing it's value */}
        <div
          onClick={() => {
            // console.log("DD Clicked!");
           
            setOpenDD(!OpenDD);
            
          }}
          // here we customizing classes when to use when to not by following logic
          className={` ui selection dropdown  ${
            OpenDD ? "visible active" : " "
          } `}
        >
          {/* element i is italic in classic HTML not icon */}
          <i className="dropdown icon"></i>
          <div className="text">{Selected.label}</div>
          {/* //same logic we have used earlier */}
          <div className={`menu ${OpenDD ? `visible transition` : " "}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
