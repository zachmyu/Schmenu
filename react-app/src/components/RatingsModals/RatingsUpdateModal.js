import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux';
import { updateRating, deleteRating } from '../../store/rating'
import './RatingsModal.css'

const RatingUpdateModal = ({ currRating }) => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(currRating.rating);
    const [review, setReview] = useState(currRating.review);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateRating({
            userId: currUser.id,
            menuItemId: currItem?.id,
            review,
            rating,
            ratingId: currRating.id
        }))
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
                <input
                    type='radio' id={i} value={i} checked={i === rating}
                    onChange={(e) => setRating(i)} onClick={() => setRating(i)}
                >
                </input>
                {i}⭐
            </div>
        ))
    }


    return (
        <>
            <button className='button1'
                onClick={() => setShowModal(true)}>
                Update your rating!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='ratingsModal-container'>
                        <h3 className='modal-header'>Changed your mind? Update your review!</h3>
                        <form className='ratingsModal-form' onSubmit={handleSubmit}>
                            <div className='review-radio-container'>
                                <h3 className='modal-header'>Rating</h3>
                                <div className='review-radio-select'>
                                    {ratingRadio()}
                                </div>
                            </div>
                            <div className='ratingsModal-element'>
                                <textarea
                                    className='ratingsModal-text'
                                    value={review}
                                    placeholder='Update your review!'
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='buttonContainer2'>
                                <button type='submit' className='button1'>
                                    Submit your review!
                                </button>
                                <button className='button2' onClick={() => (
                                    handleDelete(currRating.id
                                    ))}>Delete rating?</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}


export default RatingUpdateModal;
