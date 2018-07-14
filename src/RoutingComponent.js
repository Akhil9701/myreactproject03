import React  from 'react';
import Signup from './Signup';


import {Switch,Route} from 'react-router-dom';

const RoutingComponent=() =>(
    <Switch>
        <Route exact path='/' component={Signup}/>
     
        
    </Switch>    

)

export default RoutingComponent;