import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

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
      if (data.errors) {
        setErrors(data.errors)
      }
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <button className='button3' onClick={() => setShowModal(true)}>SignUp</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <label>First Name</label>
              <input
                className="newUser-element"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                className="newUser-element"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>User Name</label>
              <input
                className="newUser-element"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                className="newUser-element"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>About</label>
              <textarea
                className="newUser-element"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Profle Picture</label>
              <input
                className="newUser-element"
                value={profPixUrl}
                onChange={(e) => setProfPixUrl(e.target.value)}

              />
            </div>
            <div className='review-radio-select' >
              Select Account Type
              Owner
              <input
                type="radio" id='ownerRadio' value={accountType} checked={"Owner" === accountType}
                onChange={(e) => setAccountType("Owner")} onClick={() => setAccountType("Owner")}
              />

              Reviewer
              <input
                type="radio" id='reviewerRadio' value={accountType} checked={"Reviewer" === accountType}
                onChange={(e) => setAccountType("Reviewer")} onClick={() => setAccountType("Reviewer")}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                className="newUser-element"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Repeat Password</label>
              <input
                className="newUser-element"
                type='password'
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Sign Up</button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default SignUpFormModal;
