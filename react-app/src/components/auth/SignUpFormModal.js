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
			if (data) {
				setErrors(data)
			}
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
