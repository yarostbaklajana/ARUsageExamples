import React from 'react';
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom';

import { Search } from './search';
import { ARNavigation } from './ar-navigation';

export const App = () => (
        <Router>
            <div>
                <Route exact path='/' render={ () => <Redirect to='/ARUsageExamples/'/> } />
                <Route exact path='/ARUsageExamples/' component={Search}/>
                <Route exact path='/ARUsageExamples/navigate/:id' component={ARNavigation}/>
            </div>
        </Router>
);

//api request example
// fetch('/api/user/123')
//     .then(r=> r.json())
//     .then(x=> console.log('User:', x))
