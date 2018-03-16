import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { Search } from './search';
import { ARNavigation } from './ar-navigation';

export const App = () => (
        <Router>
            <div>
                <Route exact path='/' component={Search}/>
                <Route path='/navigate/:id' component={ARNavigation}/>
            </div>
        </Router>
);
