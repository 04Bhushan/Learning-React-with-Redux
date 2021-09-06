import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";


//Functional Component
// const App = () => {

//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//   return <div>Latitude:</div>;
// };

//Class Based Component

class App extends React.Component{
    /// Here we are extending "React.Component" so that we can pull tons of functionality, methods....etc from React.Component
    // that means we are borrowing functionality from React.Component to App class

    //constructor is same fuction like render is but it is not require in React 
    // constructor is a javascript fuction that we used everytime inside the class in javascript
    //React.Component has it's own constructor function but when we define again here then we replace that with this constructor
    // constructor(props) {
    //     //constructor function is a good place for state initialization
    //     super(props) // super is the reference to the constructor function used for calling it is requored else it will throw an error

    //     //initializing state
    //     //THIS IS THE ONLY TIME WE DO DIRECT ASSINGMENT
    //     // TO this.state
    //     // There are 2 ways of initializing a state
    //     // 1st way
    //     this.state = {lat:null, errorMsg:''};
    // }
    //2nd way
    //as constructor isn't required so we can initialize by this way also
    state = {lat:null, errorMsg:''}


    //Life cycle Methods
    //componentDiDMount(),componentDiDUpdate(),componentWillUnmount()...etc

    //Execution of functions
    // constructor->render---component--visible--on--screen --->componentDidMount()----After---getting---updates---->componentDidUpdate()----After--getting--update--render()--methodis---callled---that render---JSX---on--the--screen---->render()

    // componentDidMount(){
    //     // good place for data loading from API's,packages,dependencies..etc
    //     //Note:It envokes many times
    //     console.log("My Component was rendered to the screen");
    // }

    // componentDidUpdate(){
    //     //good place for data loading when state changes or props render/update any information
    //     console.log("My Component was just updated - it rerendered");
    // }

    //componentWillUnmount(){}//good place for cleanup like for data,component,non-react stuff....etc 

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>this.setState({lat:position.coords.latitude}), // call back function
                // we called setState function
                
                // avoid this type of assigining
                // this.state.lat = position.coords.latitude;
            (err) => this.setState({errorMsg:err.message})// call back function
            // it calls only if when we get some error while rendering componenets for for good practice u must do it
        );

    }

    //we have create a helper function that wrap all the conditional statements of render

    renderContent (){
        //For handling errors we can do likewise

        if(this.state.errorMsg && !this.state.lat){
            return <div>Error:{this.state.errorMsg}</div>;
        }
        if(!this.state.errorMsg && this.state.lat){
            // return <div>Latitude:{this.state.lat}</div>;
            return <div><SeasonDisplay lat={this.state.lat}/></div>
        }
        // return <div>Loading!</div>;
        return <Spinner message='Please Accept the location Request!' />
        
    }



    //render is the default method that we use in class based Component
    // React says we have to define render method else we it will give an error
    render() {
        // render method is called after every updation occur on the screen
        // return(
        //     <div>
        //         Latitude:{this.state.lat}
        //         <br/>
        //         Error:{this.state.errorMsg}
        //     </div>
        // ); 

        //For handling errors we can do likewise

        // if(this.state.errorMsg && !this.state.lat){
        //     return <div>Error:{this.state.errorMsg}</div>;
        // }
        // if(!this.state.errorMsg && this.state.lat){
        //     // return <div>Latitude:{this.state.lat}</div>;
        //     return <div><SeasonDisplay lat={this.state.lat}/></div>
        // }
        // // return <div>Loading!</div>;
        // return <Spinner message='Please Accept the location Request!' />

        // we have written this because we should not write multiple return Statements 
        //inside the render function coz it's bit challenging to work & we can customize common element for all return statements like so
        return(
            <div className = "border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
