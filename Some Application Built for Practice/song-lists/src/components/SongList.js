import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SelectSong} from '../actions'; 
//here we use curly braces coz we are directly exporting SelectSong from Actions without default keyword

class SongList extends Component{

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <
                            button className="ui button primary"
                            onClick={() => this.props.SelectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render(){
        console.log(this.props);
        // return <div>SongList</div>;
        return <div className="ui divided list">{this.renderList()}</div>;
    }
} 

const mapStatetoProps = (state) => {
    // console.log(state);

    return {songs:state.songs};
};

export default  connect(mapStatetoProps, {SelectSong}) (SongList); //1st set of parenthesis returns a function & 2nd set of parenthesis calls the function


// export default  SongList;

//OR//

// import React from 'react'

// class SongList extends React.Component{} 