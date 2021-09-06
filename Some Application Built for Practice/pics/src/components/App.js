import React from "react";
import unsplash from "../api/unsplash";
import Searchbar from "./Searchbar";
import ImageList from "./ImageList";

class App extends React.Component {
  // onSearchSubmit(term) {
  //   // axios.get("https://api.unsplash.com/search/photos", {
  //   //   params: { query: term },
  //   //   headers: {
  //   //     Authorization: "Client-ID r9eFMR8OzkOoPJlq-3cIA1wor2juSr3gOTwU9cvZ4EQ"
  //   //   },//whenever we make a request through axios it returns a object called Promise,
  //   //   // Promise is a object which gives notification that our request/work is completed.
  //   //   // then() function is envoke in future, arrow function as a argument is a call back that 
  //   //   //will envoke when we got back the data from the unsplash API
  //   // }).then((response) =>{
  //   //   console.log(response.data.results);
  //   // });

  //   //instead making use of Promise we can use Async await syntax which is much easier than using promise
  // }

   //instead making use of Promise we can use Async await syntax which is much easier than using promise

   state = { images: []};
   onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
      //whenever we make a request through axios it returns a object called Promise,
      // Promise is a object which gives notification that our request/work is completed.
      // then() function is envoke in future, arrow function as a argument is a call back that 
      //will envoke when we got back the data from the unsplash API
    });
    this.setState({images: response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
