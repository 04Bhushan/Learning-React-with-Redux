import React from "react";
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) =>{
    
    // const images = props.images.map((image) => {
    //     return <img alt={image.description} key={image.id} src={image.urls.regular} />
    // });

    //u can do in this way also
    const images = props.images.map((image) => {
        return <ImageCard  key={image.id} image={image}/>
    });

    return <div className="image-list">{images} </div>;
};

export default ImageList;