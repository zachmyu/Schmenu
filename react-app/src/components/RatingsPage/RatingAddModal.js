import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { createRating } from '../../store/rating';


const RatingAddModal = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);
    // const history = useHistory()

    const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = dispatch(createRating({
            userId: currUser.id, menuItemId: currItem?.id, review, rating
        }))
        if (data) {
            console.log("Errors were logged: ", data)
        }
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
            <button className="navbar-button" onClick={() => setShowModal(true)}>Add a rating!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Tried this dish? Tell us your thoughts!</h3>
                    <form className='ratings-container' onSubmit={handleSubmit}>
                        <div className="review-radio-container">
                            <h3>Rating</h3>
                            {ratingRadio()}
                        </div>
                        <div className="review-element-container">
                            <textarea
                                className="review-text-element"
                                value={review}
                                placeholder='Add your review!'
                                onChange={(e) => setReview(e.target.value)}
                                required
                            />
                        </div>
                        {/* <div className='review-button-container'>
                            <button className="button2" type="submit">Submit Review</button>
                        </div> */}
                        <button type='submit' className="button3"> Submit your review! </button>
                    </form>
                </Modal>
            )}
        </>
    )
}


export default RatingAddModal
    ;
