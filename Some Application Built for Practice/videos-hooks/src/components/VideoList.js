import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) =>{
//     return <div>{props.videos.length}</div>
// };

// we can also destructure it

const VideoList = ({ videos, onVideoSelect }) => {
  //here we mapping each video whenver it is called to arrays of videos
  // in videos array there are many object that we will call one by one with the video
  // destructuring
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
