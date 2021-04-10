import React from 'react';
import {TablePage, CounterPage, ListPage} from './pages'
import AppHeader from './app-header';
import './index.scss';
import Table from'./table';

import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
    const App =()=>{
 
   return (
      <div  className="app">
   
      <AppHeader/>
       
 
          <Switch>
          <Route path = '/counter'  component={CounterPage}/>
          <Route path = '/table'  component={TablePage}/>
      </Switch>
          
        
      </div>
  )
    }
export default App;