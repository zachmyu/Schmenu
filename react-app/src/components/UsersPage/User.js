import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import { getAllOnwerRestaurants } from '../../store/restaurant';
import { getAllUserRatings } from '../../store/rating';
import { getAllUserSaves } from '../../store/save';
import './User.css'

function User() {
	const history = useHistory();
	const dispatch = useDispatch();
	const currUser = useSelector(state => state?.session?.user);

	const restaurantList = useSelector(state => state?.restaurants)
	const ratingList = useSelector(state => state?.ratings)
	const saveList = useSelector(state => state?.saves)
	const ownerRestsArr = Object.values(restaurantList)
	const userRatesArr = Object.values(ratingList)
	const userSavesArr = Object.values(saveList)

	const [user, setUser] = useState({});
	const { userId } = useParams();

	useEffect(() => {
		if (!userId) return;
		(async () => {
			const response = await fetch(`/api/users/${userId}`);
			const user = await response.json();
			setUser(user);
		})();
		dispatch(getAllOnwerRestaurants(userId));
		dispatch(getAllUserRatings(userId));
		dispatch(getAllUserSaves(userId));
	}, [dispatch, userId]);

	if (!user) {
		return null;
	}

	let userPage;
	if (currUser === userId && currUser.account_type === "Owner") {
		userPage = (
			<div className='navbar-element-sessionCont'>
				<ul>
					{ownerRestsArr && ownerRestsArr?.map(restaurant => (
						restaurant?.name
					))}
				</ul>
				<ul>
					{userSavesArr && userSavesArr?.map(save => (
						save?.restaurant_id
					))}
				</ul>
				<button> Update user info</button>
			</div >
		);
	} else if (currUser === userId && currUser.account_type === "Reviewer") {
		userPage = (
			<div className='navbar-element-sessionCont'>
				<ul>
					{userRatesArr && userRatesArr?.map(rating => (
						rating?.rating
					))}
				</ul>
				<ul>
					{userSavesArr && userSavesArr?.map(save => (
						save?.restaurant_id
					))}
				</ul>
				<button> Update user info</button>
			</div>
		);
	} else {
		userPage = (
			<div className='navbar-element-loggedOut'>

				<h1>Please log in as user to update info!</h1>


			</div>
		);
	}

	return (
		<ul>
			<li>
				<div className='userDetail'>User Id: {userId}</div>
			</li>
			<li>
				<div className='userDetail'>Username: {user.username}</div>
			</li>
			<li>
				<div className='userDetail'>Email: {user.email}</div>
			</li>
			{userPage}
			<li> Space for owner restaurants</li>
			<li> Space for created reviews</li>
			<li> Update user info</li>

		</ul>

	);
}
export default User;
