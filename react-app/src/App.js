import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import NavBar from './components/Nav/NavBar';
import NavFooter from './components/Nav/NavFooter'
import ProtectedRoute from './components/auth/ProtectedRoute';

import User from './components/UsersPage/User';
import { authenticate } from './store/session';
import MenuItem from './components/MenuItemsPage/MenuItem';

function App() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <NavBar loaded={loaded} />
            {loaded && (
                <Switch>
                    <Route exact path='/'>
                        <h1>My Home Page</h1>
                    </Route>
                    <ProtectedRoute exact path='/users/:userId'>
                        <User />
                    </ProtectedRoute>
                    <Route exact path='/menuitems/:id'>
                        <MenuItem />
                    </Route>
                </Switch>
            )}
            <NavFooter />
        </>
    );
}

export default App;
