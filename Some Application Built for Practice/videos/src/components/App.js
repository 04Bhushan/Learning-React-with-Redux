import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//making API request is an async operation
// we have to interact with API either promises or Async await syntax

class App extends React.Component {
  state = { videos: [], SelectedVideo: null };
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
  componentDidMount() {
    this.OnTermSubmit("Best Tourists Places to visit");
  }

  //this will show  data in console if we console log out & in NETWORK Tab also
  OnTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response);

    // for acessing data & setting it in a state
    // response.data.items
    this.setState({
      videos: response.data.items,
      SelectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log('From the App!', video);
    this.setState({ SelectedVideo: video });
  };
  // By default semanic ui library has 16 columns in grid system
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
          <SearchBar OnSubmit={this.OnTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
