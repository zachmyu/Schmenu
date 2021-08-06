
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import RestaurantAddModal from '../RestaurantPage/RestaurantAddModal';
import DemoUserModal from '../auth/DemoUserModal';
import logo from './logo.png'
import './Nav.css';

const NavBar = ({ loaded }) => {
  const currUser = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);

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

  let sessionLinks;
  if (currUser && currUser.account_type === "Owner") {
    sessionLinks = (
      <div className='navbar-element-sessionCont'>
        <button className='profileButton' onClick={openMenu} >
          <i class='fas fa-user-tie'></i>&nbsp;&nbsp;{currUser.username}
        </button>
        {showMenu && (
          <div className='profile-dropdown'>
            <NavLink to={`/users/${currUser.id}`} exact={true}>
              <button className="button1" type="button">User Page</button>
            </NavLink>
            <RestaurantAddModal />

            <LogoutButton />
          </div>
        )}
      </div>
    );
  } else if (currUser && currUser.account_type === "Reviewer") {
    sessionLinks = (
      <div className='navbar-element-sessionCont'>
        <button className="profileButton" onClick={openMenu} >
          <i class="fas fa-users"></i>&nbsp;&nbsp;{currUser.username}
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
          {/* </div> */}
          {/* <div className='navbar-button-container'> */}
          <SignUpFormModal />
        </div>
        {/* <div className='navbar-button-container'> */}
        <DemoUserModal />
        {/* </div> */}
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
