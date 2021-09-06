import './VideoItem.css';
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //here whenever we select a video it will call onVideoSelect function with slected video as argument
    <div onClick={() => onVideoSelect(video)} className=" video-item item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
