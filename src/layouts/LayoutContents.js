import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import Routes from '../routes';

class LayoutContents extends Component {
    render() {
        const { location } = this.props;
        const pathName = location.pathname;
        const home = pathName === '/';

        return (
            <div
                className="app"
                id="total_container"
                className={home ? 'home' : undefined}
            >
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
