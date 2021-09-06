//useState & useEffect are primitive hooks
//here we will use our Custom hooks(we will create our hooks) in App.js
import {useState , useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideo = ({DefaultSearchTerm}) => {

    const [Video, setVideo] = useState([]);

    useEffect(() => {
        Search(DefaultSearchTerm);
      }, [DefaultSearchTerm]);

      const Search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          },
        });
        // console.log(response);
    
        // for acessing data & setting it in a state
        // response.data.items
        setVideo(response.data.items);
        // setSelectedVideo(response.data.items[0]);
        // this.setState({
        //   videos: response.data.items,
        //   SelectedVideo: response.data.items[0],
        // });
      };
      //can return as a array (React convention)
      return [Video, Search];
      //we can return as a object also(javascript convention)
    //   return {Video, Search};
};

export default useVideo;