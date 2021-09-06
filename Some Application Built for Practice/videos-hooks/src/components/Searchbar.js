import React, {useState} from 'react';


//here we are buiding same application as before but now we will buid it using hooks(function Component) instead of class component
//here we are switching from class component to functional component
const SearchBar = ({OnSubmit}) => {

    const [Term, setTerm] = useState('');

    // const OnChangeInput = (event) =>{
    //     // when an event(when user inputs the textbar) occurs then
    //     // we will change it's state using 'event' argument(not 'this.' & all) & setState function/method
    //     // this.setState({term:event.target.value});

    //     // in functional Component we will use setter to update the value
    //     setTerm(event.target.value);

    // };

    const OnSubmitting = (event) => {

        event.preventDefault();
        // this event will prevent submitting form after user hits enter button

        //Make sure we will callback from Parent component
        // this.props.OnSubmit(this.state.term)// shows current search term
        OnSubmit(Term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={OnSubmitting} className="ui form">
                <div className="field">
                    <label>Search For a Video</label>
                    <input 
                    type="text"
                     value={Term}
                    //  onChange={OnChangeInput}
                     onChange={(event) => setTerm(event.target.value)}
                     //insted of using callback function u can 
                     //directly update state in single line also
                    //  onChange={e => this.setState({term:e.target.value})}
                     />

                </div>

            </form>

        </div>
    );

};

export default SearchBar;

/////////////////////////CLASS BASED COMPONENT//////////////////////////////////////

// class SearchBar extends React.Component{

    // state = {term: " "};

    // OnChangeInput = (event) =>{
    //     // when an event(when user inputs the textbar) occurs then
    //     // we will change it's state using 'event' argument(not 'this.' & all) & setState function/method
    //     this.setState({term:event.target.value});
    // };

    // OnFormSubmit = (event) => {
    //     event.preventDefault();
    //     // this event will prevent submitting form after user hits enter button

    //     //Make sure we will callback from Parent component
    //     this.props.OnSubmit(this.state.term)// shows current search term
    // };

    // render(){
        // return (
        //     <div className="search-bar ui segment">
        //         <form onSubmit={this.OnFormSubmit} className="ui form">
        //             <div className="field">
        //                 <label>Video Search</label>
        //                 <input 
        //                 type="text"
        //                  value={this.state.term}
        //                  onChange={this.OnChangeInput}
        //                  //insted of using callback function u can 
        //                  //directly update state in single line also
        //                 //  onChange={e => this.setState({term:e.target.value})}
        //                  />

        //             </div>

        //         </form>

        //     </div>
        // );
//     }
// }

// export default SearchBar;