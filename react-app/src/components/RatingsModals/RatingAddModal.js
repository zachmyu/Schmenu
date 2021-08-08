import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal'
import { createRating } from '../../store/rating';
import './RatingsModal.css'


const RatingAddModal = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);

    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRating({
            userId: currUser.id, menuItemId: currItem?.id, review, rating
        }))
        setRating(0)
        setReview('')
        setShowModal(false)
    }

    const ratingRadio = () => {
        return [1, 2, 3, 4, 5].map(i => (
            <div className='review-radio-star' key={i}>
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
            <div className='buttonContainer'>
                <button className='button1'
                    onClick={() => setShowModal(true)}>
                    Add a rating!</button>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='ratingsModal-container'>
                        <h3 className='modal-header'>Tried this dish? Tell us your thoughts!</h3>
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
                                    placeholder='Add your review!'
                                    onChange={(e) => setReview(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='buttonContainer'>
                                <button type='submit' className='button1'>
                                    Submit your review!
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default RatingAddModal;
