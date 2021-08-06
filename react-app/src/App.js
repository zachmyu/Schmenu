import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';

import ProtectedRoute from './components/auth/ProtectedRoute';
import NavBar from './components/Nav/NavBar';
import NavFooter from './components/Nav/NavFooter'

import User from './components/UsersPage/User';
import MenuItem from './components/MenuItemsPage/MenuItem';
import Restaurant from './components/RestaurantPage/Restaurant';
import RestaurantsList from './components/RestaurantPage/RestaurantsList';
import HomePage from './components/HomePage/Home';

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
                        <HomePage />
                    </Route>
                    <ProtectedRoute exact path='/users/:userId'>
                        <User />
                    </ProtectedRoute>
                    <Route exact path='/menuitems/:id'>
                        <MenuItem />
                    </Route>
                    <Route exact path='/restaurants'>
                        <RestaurantsList />
                    </Route>
                    <Route exact path='/restaurants/:id'>
                        <Restaurant />
                    </Route>
                </Switch>
            )}
            <NavFooter />
        </>
    );
}

export default App;
