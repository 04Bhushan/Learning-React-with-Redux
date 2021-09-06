import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;




// don't change the Component name "App"
export default function App() {
    
    const [currentClick, NewClick] = useState(0);
    const onButtonClick = () => {
        NewClick(currentClick + 1)
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count:{currentClick}</h1>
        </div>
    );
}