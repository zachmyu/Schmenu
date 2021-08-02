import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { updateRating, deleteRating } from '../../store/rating'


const RatingUpdateModal = ({ currRating }) => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(currRating.rating);
    const [review, setReview] = useState(currRating.review);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = dispatch(updateRating({
            userId: currUser.id,
            menuItemId: currItem?.id,
            review,
            rating,
            ratingId: currRating.id
        }))
        if (data) {
            console.log("Errors were logged: ", data)
        }
        setRating(currRating.rating)
        setReview(currRating.review)
        setShowModal(false)
    }

    const handleDelete = (e) => {
        let alert = window.confirm('Are you sure you want to delete this review?')
        if (alert) {
            dispatch(deleteRating(currRating.id))
        }
    }

    const ratingRadio = () => {
        return [1, 2, 3, 4, 5].map(i => (
            <div className='review-radio-select' key={i}>
                {i}
                <input
                    type="radio" id={i} value={i} checked={i === rating}
                    onChange={(e) => setRating(i)} onClick={() => setRating(i)}
                >
                </input>
            </div>
        ))
    }


    return (
        <>
            <button className="navbar-button"
                onClick={() => setShowModal(true)}>Update your rating!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Changed your mind? Update your review!</h3>
                    <form className='ratings-container' onSubmit={handleSubmit}>
                        <div className="review-radio-container">
                            <h3>Rating</h3>
                            {ratingRadio()}
                        </div>
                        <div className="review-element-container">
                            <textarea
                                className="review-text-element"
                                value={review}
                                placeholder='Update your review!'
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />
                        </div>
                        <button type='submit' className="button3">
                            Submit your review!
                        </button>
                    </form>
                    <button className="button3" onClick={() => (
                        handleDelete(currRating.id
                        ))}>Delete rating?</button>
                </Modal>
            )}
        </>
    )
}


export default RatingUpdateModal;
