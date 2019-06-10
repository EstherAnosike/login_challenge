import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from './account/Signup';
import Login from './account/Login';
import Dashboard from './../components/dashboard/Dashboard';

class App extends React.Component {
  render() { 
    return ( 
      <div> 
         <Router>  
           <Switch>     
            <Route exact path='/' component={SignUp} />        
            <Route path='/login' component={Login} />      
            <Route path='/dashboard' component={Dashboard} /> 
          </Switch> 
         </Router>
      </div>
     );
  }
}
 
export default App;
