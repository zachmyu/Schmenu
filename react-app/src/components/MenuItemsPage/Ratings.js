import React from 'react';
import { useSelector } from 'react-redux';
import RatingAddModal from '../RatingsModals/RatingAddModal';
import RatingUpdateModal from '../RatingsModals/RatingsUpdateModal';
import './MenuItem.css';


function Ratings({ ratingInfo }) {
    const currUser = useSelector(state => state?.session.user)

    let sessionLinks;
    if (currUser && currUser.account_type === "Reviewer") {
        sessionLinks = (
            <div className='button1'>
                <RatingAddModal />
            </div>
        );
    } else {
        sessionLinks = (
            <h3>Please sign in as a Reviewer in order to add a review!</h3>
        );
    }

    const reviewUpdateLinks = (currRating) => {
        return (
            <div className='navbar-button'>
                <RatingUpdateModal currRating={currRating} />
            </div>
        )
    };

    return (
        <>
            <h1>Ratings here!!</h1>
            {ratingInfo?.map(rating => (
                <div className='rating-review' key={rating.id}>
                    <h3>{rating.rating}</h3>
                    <h3>{rating.review}</h3>
                    {currUser && currUser.id === rating.user_id ?
                        reviewUpdateLinks(rating) : null}
                </div>
            ))}
            {sessionLinks}
        </>
    )
}

export default Ratings
