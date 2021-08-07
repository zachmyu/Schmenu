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
            <RatingAddModal />
        );
    } else {
        sessionLinks = (
            <h3>Please sign in as a Reviewer in order to add a review!</h3>
        );
    }

    const reviewUpdateLinks = (currRating) => {
        return <RatingUpdateModal currRating={currRating} />
    };

    const star = (rating) => {
        if (rating === 1) return `${rating}⭐`
        else if (rating === 2) return `${rating} ⭐⭐`
        else if (rating === 3) return `${rating} ⭐⭐⭐`
        else if (rating === 4) return `${rating} ⭐⭐⭐⭐`
        else if (rating === 5) return `${rating} ⭐⭐⭐⭐⭐`
    }

    return (
        <>
            <hr />
            <div className='ratingsHeader'>
                <h2>Ratings for this Schmenu item</h2>
                {sessionLinks}
            </div>
            {ratingInfo?.map(rating => (
                <div className='ratings-container' key={rating.id}>
                    <h3>{star(rating.rating)}</h3>
                    <h3>{rating.review}</h3>
                    {currUser && currUser.id === rating.user_id ?
                        reviewUpdateLinks(rating) : null}
                </div>
            ))}
        </>
    )
}

export default Ratings
