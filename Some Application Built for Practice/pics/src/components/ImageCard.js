import React from 'react';

class ImageCard extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.ImageRef = React.createRef();
        // Ref(reference) system is used to interact with the DOM element
    }

    
    componentDidMount(){
        this.ImageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{
        const height=this.ImageRef.current.clientHeight;

        const spans = Math.ceil(height/10);

        this.setState({spans});
    };

    // render(){
    //     return(
    //         <div>
    //             <img
    //                 alt={this.props.image.description}
    //                 src={this.props.image.urls.regular}
    //             />
    //         </div>
    //     );
    // }

    //Now if we destructure

    render(){
        // here both description & urls coming from 'this.props.image' so we destructure
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.ImageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;