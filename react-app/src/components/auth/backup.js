//Demo User Modal.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const DemoUserModal = ({ demoLogins, errors, setErrors }) => {
    const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    // const dispatch = useDispatch();

    // const onLoginReviewer = async (e) => {
    //     e.preventDefault();

    //     const data = await dispatch(
    //         login('demo@mcdemoface.com', 'SchmenuP@ssword')
    //     );
    //     if (data) setErrors(data);
    // };
    // const onLoginOwner = async (e) => {
    //     e.preventDefault();

    //     const data = await dispatch(
    //         login('bob-ross@mcdemoface.com', 'SchmenuP@ssword')
    //     );
    //     if (data) setErrors(data);
    // };

    // console.log(demoLogins[2])
    // if (demoLogins[2] === undefined) demoLogins[2] = []

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <button className="button3"
                onClick={() => setShowModal(true)}>Demo Users</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='demo-container'>
                        <form onSubmit={demoLogins[0]}>
                            <div className='errors'>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
                            <button type='submit' className="button1">
                                Demo as Reviewer&nbsp;&nbsp;&nbsp;
                                <i className="fas fa-users"></i></button>
                        </form>
                        <form onSubmit={demoLogins[1]}>
                            <div className='form'>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
                            <button type='submit' className="button1">
                                Demo as Owner&nbsp;&nbsp;&nbsp;
                                <i className='fas fa-user-tie'></i></button>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}


export default DemoUserModal;


//Login From Modal.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if ("errors" in data) {
            setErrors(data.errors);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <button className="navbar-button"
                onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form className='form-modal' onSubmit={onLogin}>
                        <div className='errors'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className='login-container'>
                            <div className='form-element'>
                                <label>Email</label>
                                <input
                                    name='email'
                                    type='text'
                                    placeholder='Email'
                                    value={email}
                                    onChange={updateEmail}
                                />
                            </div>
                            <div className='form-element'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    name='password'
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={updatePassword}
                                />
                                <div className='buttonContainer'>
                                    <button className='button1' type='submit'>Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal >
            )}
        </>
    );
};

export default LoginFormModal;



//SignUpFormModal
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css';

const SignUpFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [profPixUrl, setProfPixUrl] = useState('');
    const [accountType, setAccountType] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const user = useSelector(state => state?.session?.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(signUp({
                firstName,
                lastName,
                username,
                email,
                about,
                profPixUrl,
                accountType,
                password
            }));
            if ("errors" in data) {
                setErrors(data.errors);
            }
        } else {
            setErrors(["Passwords need to match!"]);
        }
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <button className='navbar-button'
                onClick={() => setShowModal(true)}>SignUp</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form className='form-modal' onSubmit={onSignUp}>
                        <div className='errors'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className='form-container'>
                            <div className='form-container-left'>
                                <div className='form-element'>
                                    <label>First Name</label>
                                    <input
                                        className="newUser-element"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>Last Name</label>
                                    <input
                                        className="newUser-element"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>User Name</label>
                                    <input
                                        className="newUser-element"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>Email</label>
                                    <input
                                        className="newUser-element"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>Profle Picture</label>
                                    <input
                                        className="newUser-element"
                                        value={profPixUrl}
                                        onChange={(e) => setProfPixUrl(e.target.value)} />
                                </div>
                                <div className='form-element'>
                                    Select Account Type
                                    <div className='form-radio'>
                                        Owner <input
                                            type="radio" id='ownerRadio' value={accountType} checked={"Owner" === accountType}
                                            onChange={(e) => setAccountType("Owner")} onClick={() => setAccountType("Owner")} />
                                        Reviewer <input
                                            type="radio" id='reviewerRadio' value={accountType} checked={"Reviewer" === accountType}
                                            onChange={(e) => setAccountType("Reviewer")} onClick={() => setAccountType("Reviewer")} />
                                    </div>
                                </div>
                            </div>
                            <div className='form-container-right'>
                                <div className='form-element-textarea'>
                                    <label>About</label>
                                    <textarea
                                        className="form-textarea"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>Password</label>
                                    <input
                                        className="newUser-element"
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>
                                <div className='form-element'>
                                    <label>Repeat Password</label>
                                    <input
                                        className="newUser-element"
                                        type='password'
                                        value={repeatPassword}
                                        onChange={(e) => setRepeatPassword(e.target.value)}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className='buttonContainer'>
                            <button className='button1' type='submit'>Sign Up</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
};

export default SignUpFormModal;


//Nav - NavBar.js

import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import { login } from '../../store/session'
// import RestaurantAddModal from '../RestaurantPage/RestaurantAddPage';
import DemoUserModal from '../auth/DemoUserModal';
import logo from './logo.png'
import './Nav.css';

const NavBar = ({ loaded }) => {
    const currUser = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const navShrink = () => {

            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                document.querySelector(".navbar-container")
                    ?.classList.add("navbar-container_shrunk");
                document.querySelector(".homepageLogo")
                    ?.classList.add("homepageLogo_shrunk");
                document.querySelector(".profileButton")
                    ?.classList.add("profileButton_shrunk");

            } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
                document.querySelector(".navbar-container")
                    ?.classList.remove("navbar-container_shrunk");
                document.querySelector(".homepageLogo")
                    ?.classList.remove("homepageLogo_shrunk");
                document.querySelector(".profileButton")
                    ?.classList.remove("profileButton_shrunk");
            };
        };
        window.onscroll = function () { navShrink() };

    })

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => setShowMenu(false);
        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const onLoginReviewer = async (e) => {
        e.preventDefault();

        const data = await dispatch(
            login('demo@mcdemoface.com', 'SchmenuP@ssword')
        );
        if (data) setErrors(data.errors);
    };
    const onLoginOwner = async (e) => {
        e.preventDefault();

        const data = await dispatch(
            login('bob-ross@mcdemoface.com', 'SchmenuP@ssword')
        );
        if (data) { }
        setErrors(data.errors);
    };

    let sessionLinks;
    if (currUser && currUser.account_type === "Owner") {
        sessionLinks = (
            <div className='navbar-element-sessionCont'>
                <button className='profileButton' onClick={openMenu} >
                    <i className='fas fa-user-tie'></i>&nbsp;&nbsp;{currUser.username}
                </button>
                {showMenu && (
                    <div className='profile-dropdown'>
                        <NavLink to={`/users/${currUser.id}`} exact={true}>
                            <button className="button1" type="button">User Page</button>
                        </NavLink>
                        <NavLink to='/restaurants/createnew' exact={true}>
                            <button className="button1" type="button">Add a new restaurant</button>
                        </NavLink>
                        {/* <RestaurantAddModal /> */}
                        <LogoutButton />
                    </div>
                )
                }
            </div >
        );
    } else if (currUser && currUser.account_type === "Reviewer") {
        sessionLinks = (
            <div className='navbar-element-sessionCont'>
                <button className="profileButton" onClick={openMenu} >
                    <i className="fas fa-users"></i>&nbsp;&nbsp;{currUser.username}
                </button>
                {showMenu && (
                    <div className="profile-dropdown">
                        <NavLink to={`/users/${currUser.id}`} exact={true}>
                            <button className="button1" type="button">User Page</button>
                        </NavLink>
                        <NavLink to="/restaurants" exact={true}>
                            <button className="button1" type="button">Explore restaurants!</button>
                        </NavLink>
                        <LogoutButton />
                    </div>
                )}
            </div>
        );
    } else {
        sessionLinks = (
            <div className='navbar-element-loggedOut'>
                <div className='navbar-button-container'>
                    <LoginFormModal />
                    <SignUpFormModal />
                </div>
                <DemoUserModal demoLogins={[onLoginReviewer, onLoginOwner]} errors={errors} setErrors={setErrors} />
            </div>
        );
    }


    return (
        <>
            <div className='navbar-displacement'></div>
            <div className='navbar-container'>
                <NavLink className='navbar-element-logo' exact to="/">
                    <img src={logo} className='homepageLogo' alt='Schmenu-Logo'></img>
                </NavLink>
                {loaded && sessionLinks}
            </div >
        </>
    );
}

export default NavBar;


//store session.js
// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(setUser(data));
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();
    if (data.errors) {
        return data;
    };
    dispatch(setUser(data))
    return data;
}

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/auth/logout/', {
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        dispatch(removeUser());
    }
};


export const signUp = (userData) => async (dispatch) => {
    const { firstName, lastName, username, email, about, profPixUrl, accountType, password } = userData
    const response = await fetch('/api/auth/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username,
            email,
            about,
            profile_pix: profPixUrl,
            account_type: accountType,
            password
        }),
    });

    const data = await response.json();
    if (data.errors) {
        return data;
    };
    dispatch(setUser(data))
    return data;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload }
        case REMOVE_USER:
            return { user: null }
        default:
            return state;
    }
}
