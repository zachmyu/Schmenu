import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { updateRating } from '../../store/rating'


const RatingUpdateModal = ({ currRating }) => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);
    // const history = useHistory()

    const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(currRating.rating);
    const [review, setReview] = useState(currRating.review);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = dispatch(updateRating({
            userId: currUser.id, menuItemId: currItem?.id, review, rating, ratingId: currRating.id
        }))
        if (data) {
            console.log("Errors were logged: ", data)
        }
        setRating(0)
        setReview('')
        setShowModal(false)

        // history.push(`/menuitems/${currItem?.id}`)
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
                onClick={() => console.log('KEEEEEEEEEEEEEEEEEEEEEEEEY', currRating)}>Check stuffs!</button>
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
                        {/* <div className='review-button-container'>
                            <button className="button2" type="submit">Submit Review</button>
                        </div> */}
                        <button type='submit' className="button3">
                            Submit your review!
                        </button>
                    </form>
                </Modal>
            )}
        </>
    )
}


export default RatingUpdateModal;
