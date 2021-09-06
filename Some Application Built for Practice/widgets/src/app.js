import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    Title: "What is React?",
    content: "React is a front-end javascript library built by google.",
  },
  {
    Title: "What do we use React?",
    content:
      "React is favourite javascript library among Engineers that allows us to write reusable code & render it as a different components. ",
  },
  {
    Title: "How do you use react?",
    content:
      "First of all we create our project then we make different components with .js extension as per our project/application that we are creating then write its corresponding code & render it screen.",
  },
];

const options = [
  {
    label: "The color is Red",
    value: "Red",
  },
  {
    label: "The color is Green",
    value: "Green",
  },
  {
    label: "The shade of Blue",
    value: "Blue",
  },
];


// const ShowAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };

// const ShowList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search items={items} />;
//   }
// };

// const ShowDropDown = () => {
//   if (window.location.pathname === "/dropdown ") {
//     return <Dropdown />;
//   }
// };
// const ShowTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };


const App = () => {
  const [Selected, setSelected] = useState(options[0]);
  // const [ShowDD, setShowDD] = useState(true);

  return (
    <div>
      {/* {/* {" "}
      {/* <Accordion items={items} /> */} {/* <Search /> */}{" "}
      {/* <button
        onClick={() => {
          setShowDD(!ShowDD); */}{" "}
      {/* Toggle Dropdown
      </button>{" "}
      {ShowDD ? (
        <Dropdown
          Selected={Selected}
          onSelectedChange={setSelected} //function definition
          options={options}
        />
      ) : null}{" "} */}
      {/* <Translate /> */}
      {/* {ShowAccordion()}
      {ShowList()}
      {ShowDropDown()}
      {ShowTranslate()} */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          options={options}
          Selected={Selected}
          onSelectedChange={setSelected}
        />
      </Route>    
      <Route path="/translate">
        <Translate />
      </Route>             
    
    </div>
  );
};

export default App;
