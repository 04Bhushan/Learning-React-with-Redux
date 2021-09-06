import React from "react";

class Searchbar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  //   //.target.value target the values when user changes/modifies input in the search bar
  // }
  // onInputClick() {
  //   console.log("Input was Clicked");
  // }

  // Note:onChange & onSubmit doesn't suppports div tag only onchange supports

  state = {term: ''}
  //when the user inputs & hits enter in the search bar the form get submitted automatically nowhere in react
  // to prevent this we will use preventDefault() function
  onFormSubmit = (event) =>{
    event.preventDefault(); //for preventing to page get refresh itself
    this.props.onSubmit(this.state.term);// we use this.props in Class based component & only props.onSubmit on functional component
    // console.log(this.state.term);//this will give an error after submitting i/p so to fix it u can use arrow function here or directly in the form
  }

  render() {
    return (
      <div className="ui segment">
        {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              // onClick={this.onInputClick}
              // onChange={this.onInputChange}
              // onChange={ (event) => console.log(event.target.value) } //insted of writting defining another function use arrow function
              onChange = { (e) => this.setState({term:e.target.value})}
              // onChange = { (e) => this.setState({term:e.target.value.toUpperCase()})}
            />
            {/* here we are passing onChange props with refrence on onInputChange function that we will call in future,
              do not put a set of parenthesis on a call back function on a eventhandler onChange */}
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
