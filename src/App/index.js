import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";

const Anasayfa = React.lazy(() => import('../CustomView/Anasayfa'));
const Signin1 = React.lazy(() => import('../Demo/Authentication/SignIn/SignIn1'));

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

const App = () => {
    const isUserLoggedIn = localStorage.getItem('user')


    // const menu = routes.map((route, index) => {
    //     return (route.component) ? (
    //         <Route
    //             key={index}
    //             path={route.path}
    //             exact={route.exact}
    //             name={route.name}
    //             render={props => (
    //                 <route.component {...props} />
    //             )}/>
    //     ) : (null);
    // });

    return (
        <Aux>
            <ScrollToTop>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        {/* {menu} */}
                        <Route path="/auth/signin" >
                            {
                           !isUserLoggedIn ?  <Signin1/> : <Redirect to="/anasayfa"/>
                            
                            }
                        </Route>
                        <Route path="/" component={AdminLayout} />
                    </Switch>
                </Suspense>
            </ScrollToTop>
        </Aux>
    );

}

export default App;
