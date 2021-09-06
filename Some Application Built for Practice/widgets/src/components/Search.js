import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [DebounceTerm, setDebounceTerm] = useState(term);
  const [Results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: DebounceTerm,
        },
      });
      setResults(data.query.search);
    };
    if (DebounceTerm) {
      search();
    }
  }, [DebounceTerm]);

  // console.log("I will run with every render.");
  // console.log(Results);
  //this arrow function will run only one time
  //  useEffect(() =>{
  //         console.log("I RUN only once");
  //    }, []);

  // if we remove 2nd argument arraay then it will
  //run after every Render & at initial render
  // useEffect(() =>{
  //     console.log("I WILL RUN AFTER EVERY RENDER & AT INITIAL RENDER");
  // });

  //The useEffect function will be called once when the component is first rendered, then one time for ever rerender

  // if we add a term in that array the it will run after every render since data has changed
  // useEffect(() =>{
  //     console.log("I WILL RUN AFTER EVERY RENDER & AT INITIAL RENDER");
  // }, [term]);

  // useEffect(() =>{

  //     //this arrow function will first invoke & render on screen the whenever the 2nd argument(term) changes then also
  //     // that arrow function will invoke so these are the 2 scenarios when the arrow function is invoked
  //     //

  //     //here we are not using async & await syntax coz we cant use keywords directly in our useEffect funvtion
  //     //we cannot pass async await in arrow function that's why we will use axios for requesting our API
  //     //yeah we can fix it 1) using helper function by defining it inside the useEffect function & assingining it
  //     // to a variable then calling it from useEffect function
  //     // or 2) use promises or 3)same as first but we dont call it
  //     //we will use 1st approach

  //     //there is a issue that whenever our page is loaded 1st time (or wheneven we load our page) then
  //     //it takes one second then it renders data pn the screen that not good so to fix it we will use if-else statement

  //     if(term && !Results.length)
  //     {
  //         search();
  //     }
  //     else{
  //         const TimeoutID = setTimeout(()=>{
  //             if (term){
  //                 search();
  //             }
  //         }, 1000);

  //         // console.log("Initial Render or Term was changed.");

  //         //it also return for clean up purposes
  //         //if we change our term cleanup functin is invoked automatically
  //         return() =>{
  //             // console.log("CLEANUP");
  //             clearTimeout(TimeoutID);
  //         };
  //     }

  // }, [term]);

  const renderedList = Results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            //curid is a property of wikipedia that allows us to visit any article depending on pageid
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* //React returns data as plain text so for fixing that span element we will render the data as HTML using React  */}
          {/* it is dangerous to use that prop coz anyone can change data on wikipedia &can harm our application */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>

      <div className="ui celled list">{renderedList}</div>
    </div>
  );
};

export default Search;
