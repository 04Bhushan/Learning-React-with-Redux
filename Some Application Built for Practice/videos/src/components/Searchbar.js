import React from 'react';

class SearchBar extends React.Component{

    state = {term: " "};

    OnChangeInput = (event) =>{
        // when an event(when user inputs the textbar) occurs then
        // we will change it's state using 'event' argument(not 'this.' & all) & setState function/method
        this.setState({term:event.target.value});
    };

    OnFormSubmit = (event) => {
        event.preventDefault();
        // this event will prevent submitting form after user hits enter button

        //Make sure we will callback from Parent component
        this.props.OnSubmit(this.state.term)// shows current search term
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.OnFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text"
                         value={this.state.term}
                         onChange={this.OnChangeInput}
                         //insted of using callback function u can 
                         //directly update state in single line also
                        //  onChange={e => this.setState({term:e.target.value})}
                         />

                    </div>

                </form>

            </div>
        );
    }
}

export default SearchBar;