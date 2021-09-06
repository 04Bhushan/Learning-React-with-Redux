import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) =>{
    // console.log(props)         
    if(!song){
        return <div>Select a Song</div>;
    }     
    // return <div>{song.title}</div>;                            
    return (
        <div>
            <h3>Details For:</h3>
            <p>
                Title:{song.title}
                <br /> 
                Duration:{song.duration}
            </p>
        </div>
    );
};

const mapStatetoProps = (state) => {
    return { song:state.songSelected}
};

export default connect(mapStatetoProps) (SongDetail);