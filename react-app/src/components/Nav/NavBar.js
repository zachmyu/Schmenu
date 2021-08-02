
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import logo from './logo.png'
import DemoUserModal from '../auth/DemoUserModal';

const NavBar = ({ loaded }) => {
  const currentUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (currentUser && currentUser.account_type === "Owner") {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <NavLink to={`/users/${currentUser.id}`} exact={true} className='navbar-button'>
            "User Page"
          </NavLink>
        </div>
        <div className='navbar-button'>
          <LogoutButton />
        </div>
        <div className='navbar-button-container'>
          <span>Add Restaurant Button Here</span>
          {/* <AddRestaurantModal /> */}
        </div>
      </>
    );
  } else if (currentUser && currentUser.account_type === "Reviewer") {
    sessionLinks = (
      <>
        <div className='navbar-button'>
          <NavLink to={`/users/${currentUser.id}`} exact={true} className='navbar-button'>
            "User Page"
          </NavLink>
        </div>
        <div className='navbar-button'>
          <LogoutButton />
        </div>
      </>
    );






  } else {
    sessionLinks = (
      <>
        <div className='navbar-button-container'>
          <LoginFormModal />
        </div>
        <div className='navbar-button-container'>
          <SignUpFormModal />
        </div>
        <div className='navbar-button-container'>
          <DemoUserModal />
        </div>

      </>
    );
  }


  return (
    <div className='navbar__container'>
      <NavLink className='navbar__element-logo' exact to="/">
        <img src={logo} id='homepageLogo' alt='homepageLogo'></img>
      </NavLink>
      <div className='navbar__element-sessionCont'>
        {loaded && sessionLinks}
      </div>
    </div >
  );
}

export default NavBar;
