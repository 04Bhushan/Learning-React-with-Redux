import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; //Provider is a component from react-redux library (named Export)
import { createStore } from "redux"; // createStore is a function from react library
import App from "./components/App";
import reducers from "./reducers"; //curly braces are avoided for defalut file in aour application

ReactDOM.render(
    
    <Provider store={createStore(reducers)} >
      <App />
    </Provider>,
    document.querySelector('#root')
    
 );
