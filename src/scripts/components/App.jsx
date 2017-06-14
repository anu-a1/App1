import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from '../../logo.svg';
import '../stylesheets/app.css';
import {Header} from '../components/Header';
import {Home} from '../components/Home';
import NoMatch from '../components/NoMatchPage';



class App extends Component {

     static menuItems = [
        {
            path: 'Home',
            title: 'FIG',
            isDefault: true
        }, {
            path: 'NoMatch',
            title: 'FCF'
        }, {
            path: 'FIG-ML',
            title: 'FIG-ML'
        }
    ];


    render() {
        return (


            <Router history="" >
                <div className="test">
                    <div className="App-header" >
                        <Header menuItems={this.constructor.menuItems}/>
                    </div>
                    <div>
                        <Route path="/FIG" component={Home}/>
                        <Route path = "/FCF" component={NoMatch}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
