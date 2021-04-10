import React from 'react';
import ReactDOM from 'react-dom'; 
import {createStore,} from 'redux';
import {Provider} from 'react-redux'; 
import reducer from './reducer';
import ErrorBoundry from'./components/error-boundry';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
const store=createStore(reducer);



  
ReactDOM.render(
    <Provider store={store}> 
   
  
    <ErrorBoundry>
    <Router>
    <App/>
    </Router>
    </ErrorBoundry>
   

    
    </Provider>,document.getElementById('root')); 
