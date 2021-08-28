import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function User() {
  const history = useHistory()
  const currUser = useSelector(state => state?.session?.user);
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    history.push('/');
  }

  let userPage;
  if (currUser === userId && currUser.account_type === "Owner") {
    userPage = (
      <div className='navbar-element-sessionCont'>
        <li> Space for owner restaurants</li>
      </div >
    );
  } else if (currUser === userId && currUser.account_type === "Reviewer") {
    userPage = (
      <div className='navbar-element-sessionCont'>
        <li> Space for created reviews</li>
      </div>
    );
  } else {
    userPage = (
      <div className='navbar-element-loggedOut'>
        <li> Update user info</li>
      </div>
    );
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      {userPage}
      <li> Space for owner restaurants</li>
      <li> Space for created reviews</li>
      <li> Update user info</li>

    </ul>

  );
}
export default User;
