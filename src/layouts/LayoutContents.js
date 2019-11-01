import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import Routes from '../routes';

class LayoutContents extends Component {
    render() {
        return (
            <div className="app" id="total_container">
                <LayoutHeader breadcrumb={Routes} />
                <Switch>
                    {Routes.map((route, idx) => {
                        console.log(route);
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => <route.component {...props} />}
                            />
                        );
                    })}
                </Switch>
                <LayoutFooter />
            </div>
        );
    }
}

export default LayoutContents;