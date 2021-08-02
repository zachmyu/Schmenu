import React from 'react';
import './MenuItem.css';
import { useSelector } from 'react-redux';
import RatingAddModal from '../RatingsModals/RatingAddModal';
import RatingUpdateModal from '../RatingsModals/RatingsUpdateModal';


function Ratings({ ratingInfo }) {


    const currUser = useSelector(state => state?.session.user)
    // const currItem = useSelector(state => state?.menu_items?.current)

    let sessionLinks;
    if (currUser && currUser.account_type === "Reviewer") {
        sessionLinks = (
            <>
                <div className='navbar-button'>
                    <h3>Placeholder for add review modal</h3>
                    <RatingAddModal />
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <h3>Please sign in as a Reviewer in order to add a review!</h3>
            </>
        );
    }

    // let reviewUpdateLinks;
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
                    {currUser && currUser.id === rating.user_id ? reviewUpdateLinks(rating) : null}
                </div>
            ))}
            {sessionLinks}
        </>
    )

}

export default Ratings
