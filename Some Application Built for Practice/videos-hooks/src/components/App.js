import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
// import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from '../Hooks/useVideo';

// here we are switching from class based component to functional component

//also we had switched from primitive hooks to custom hooks

const App = () => {
  // const [Video, setVideo] = useState([]);
  const [SelectedVideo, setSelectedVideo] = useState(null);
  /////////////////////CUSTOM HOOKS/////////////////
  const [Video, Search] = useVideo('Best Tourists Places to Visit in World');

  //useeffect function to choose 1st video that render on screen
  useEffect(() => {
    setSelectedVideo(Video[0]);//It runs whenever it's 2nd argument have non-null value & then chooses it's 1st video
  }, [Video])

  //we'll use useEffect that will run one time when it renders in screen same as
  //ComponentDidMount lifecycle method that mounts component on the screen once

  // useEffect(() => {
  //   OnTermSubmit("Best Tourists Places to visit");
  // }, []);

  // const OnTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   // console.log(response);

  //   // for acessing data & setting it in a state
  //   // response.data.items
  //   setVideo(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  //   // this.setState({
  //   //   videos: response.data.items,
  //   //   SelectedVideo: response.data.items[0],
  //   // });
  // };

  //single line function is not good so we'll make it inline

  // const onVideoSelect = (video) => {
  //   // console.log('From the App!', video);
  //   // this.setState({ SelectedVideo: video });
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container" style={{ marginTop: "15px" }}>
      {/* <SearchBar OnSubmit={OnTermSubmit} /> */}
      {/* calls Search function in custom hook useVideo */}
      <SearchBar OnSubmit={Search} /> 
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={SelectedVideo} />
          </div>
          <div className="four wide column">
            <VideoList
              // onVideoSelect={onVideoSelect}
              // onVideoSelect={(video)=> setSelectedVideo(video)}
              // both 57 & 59 line code are 100% equivalent
              onVideoSelect={setSelectedVideo}
              videos={Video}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
/////////////////////////CLASS BASED COMPONENT//////////////////////////////////////

//making API request is an async operation
// we have to interact with API either promises or Async await syntax

// class App extends React.Component {
//   state = { videos: [], SelectedVideo: null };

//callback method
// this will show data in network->xhr->preview
// OnTermSubmit = (term) =>{
//     youtube.get('/search', {
//         params:{
//             q:term
//         }
//     });
// };

//default search term when we open this page
// componentDidMount() {
//   this.OnTermSubmit("Best Tourists Places to visit");
// }

//this will show  data in console if we console log out & in NETWORK Tab also
// OnTermSubmit = async (term) => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//     },
//   });
//   // console.log(response);

//   // for acessing data & setting it in a state
//   // response.data.items
//   this.setState({
//     videos: response.data.items,
//     SelectedVideo: response.data.items[0],
//   });
// };

// onVideoSelect = (video) => {
//   // console.log('From the App!', video);
//   this.setState({ SelectedVideo: video });
// };
// By default semanic ui library has 16 columns in grid system
//   render() {
//     // return (
//     //   <div className="ui container" style={{ marginTop: "15px" }}>
//     //       <SearchBar OnSubmit={this.OnTermSubmit} />
//     //     <div className="ui grid">
//     //       <div className="ui row">
//     //         <div className="eleven wide column">
//     //           <VideoDetail video={this.state.SelectedVideo} />
//     //         </div>
//     //         <div className="four wide column">
//     //           <VideoList
//     //             onVideoSelect={this.onVideoSelect}
//     //             videos={this.state.videos}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // );
//   }
// }

// export default App;
