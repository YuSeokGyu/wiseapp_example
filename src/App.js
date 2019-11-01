import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/LayoutContents';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
