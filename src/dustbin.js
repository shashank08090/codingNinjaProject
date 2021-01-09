import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Lyfcycle from './lyfcycle';
import Navbar from './navbar';
import {Link} from "react-router-dom";


export default class Dustbin extends Component {
    render() {
        return (<>
        <Navbar />
            <Switch>
           <Route path="/" component={Home} exact />
            <Route path="/about" component={Lyfcycle} />
        <Route component={Error} /> 
            
        </Switch></>
        )
    }
}
