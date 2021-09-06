import {useEffect, useState} from 'react';

const Route = ({ path, children }) => {
const [CurrentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {

        const onLocationChange = () => {
            console.log("Location Change");
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);
        return () => {
            //cleanup function for removing event listner
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

//   return window.location.pathname === path ? children : null;
  return CurrentPath === path ? children : null;
};


export default Route;
