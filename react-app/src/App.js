import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginFormModal from './components/auth/LoginFormModal';
import SignUpFormModal from './components/auth/SignUpFormModal';
import NavBar from './components/Nav/NavBar';
import NavFooter from './components/Nav/NavFooter'
import ProtectedRoute from './components/auth/ProtectedRoute';
// import UsersList from './components/UsersList';
import User from './components/UsersPage/User';
import { authenticate } from './store/session';

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
                    <Route path='/login' exact={true}>
                        <LoginFormModal />
                    </Route>
                    <Route path='/sign-up' exact={true}>
                        <SignUpFormModal />
                    </Route>
                    {/* <ProtectedRoute path='/users' exact={true} >
                        <UsersList />
                    </ProtectedRoute> */}
                    <ProtectedRoute path='/users/:userId' exact={true} >
                        <User />
                    </ProtectedRoute>
                    <ProtectedRoute path='/' exact={true} >
                        <h1>My Home Page</h1>
                    </ProtectedRoute>
                </Switch>
            )}
            <NavFooter />
        </>
    );
}

export default App;
