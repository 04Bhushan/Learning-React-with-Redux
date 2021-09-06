import {combineReducers} from 'redux'; // as combineReducers is a named export 
// to check whether to use curly braces or not we need to checkout the documentation for that

const songsReducer = () => {
    return [ //returning an array
        { title:"Despacito", duration: '4:05'},
        { title:"Senorita", duration: '3:15'},
        { title:"Let Me Love You", duration: '3:45'},
        { title:"Shape of You", duration: '2:55'},
        { title:"Cheap Thrills", duration: '3:30'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }
    else
    {
        return selectedSong;
    }

};

//Now we combine both reducers using combinedReducers function React Library

// we can use it anywhere in our application
export default combineReducers({
    //passing object as a key value pairs
    songs:songsReducer,
    songSelected:selectedSongReducer
});




