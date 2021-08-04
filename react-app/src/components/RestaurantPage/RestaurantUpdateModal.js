import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import { updateRestaurant, deleteRestaurant } from '../../store/restaurant'


const RestaurantUpdateModal = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const history = useHistory()
    const currRestnt = useSelector(state => state?.restaurants?.current);

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState(currRestnt.name);
    const [address, setAddress] = useState(currRestnt.address);
    const [restaurantType, setRestaurantType] = useState(currRestnt.restaurant_type);
    const [description, setDescription] = useState(currRestnt.description);
    const [restntPixUrl, setRestntPixUrl] = useState(currRestnt.restaurant_pix);
    const [latitude, setLatitude] = useState(currRestnt.latitude);
    const [longitude, setLongitude] = useState(currRestnt.longitude);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateRestaurant({
            ownerId: currUser.id,
            name,
            address,
            restaurantType,
            description,
            restntPixUrl,
            latitude,
            longitude,
            restaurantId: currRestnt.id
        }))
        setName('')
        setAddress('')
        setRestaurantType('Fine-Dining')
        setDescription('')
        setRestntPixUrl('')
        setShowModal(false)
    }

    const handleDelete = (e) => {
        let alert = window.confirm('Are you sure you want to delete this restaurant?')
        if (alert) {
            dispatch(deleteRestaurant(currRestnt.id))
        }
        history.push(`/`)
    }

    return (
        <>
            <button className="navbar-button"
                onClick={() => setShowModal(true)}>Update your restaurant!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Update your restaurant details</h3>
                    <form className='ratings-container' onSubmit={handleSubmit}>
                        <div className="review-element-container">
                            <input
                                className="review-element"
                                placeholder='Name of restaurant'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="review-element-container">
                            <textarea
                                className="review-text-element"
                                value={address}
                                placeholder='Address of restaurant'
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className='reservation-element'>
                            <span>Restaurant Type: </span>
                            <select value={restaurantType}
                                onChange={(e) => { setRestaurantType(e.target.value) }}>
                                <option value='Fine-Dining'>Fine Dining</option>
                                <option value='Casual-Dining'>Casual Dining</option>
                                <option value='Fast-Food'>Fast Food</option>
                                <option value='Cafe'>Cafe</option>
                                <option value='Buffet'>Buffet</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div className="review-element-container">
                            <textarea
                                className="review-text-element"
                                value={description}
                                placeholder='Add a description of the restaurant'
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="review-element-container">
                            <input
                                className="review-text-element"
                                value={restntPixUrl}
                                placeholder='Enter a url for a picture of the restaurant'
                                onChange={(e) => setRestntPixUrl(e.target.value)}
                            />
                        </div>
                        <div className="review-element-container">
                            <input type='number' step='0.01'
                                className="review-text-element"
                                value={latitude}
                                placeholder='Latitude of restaurant location'
                                onChange={(e) => setLatitude(e.target.value)}
                                hidden
                            />
                        </div>
                        <div className="review-element-container">
                            <input type='number' step='0.01'
                                className="review-text-element"
                                value={longitude}
                                placeholder='Latitude of restaurant location'
                                onChange={(e) => setLongitude(e.target.value)}
                                hidden
                            />
                        </div>
                        <div className='review-button-container'>
                            <button className="button2" type="submit">Update restaurant info</button>
                        </div>
                    </form>
                    <button className="button3" onClick={() => (
                        handleDelete(currRestnt.id
                        ))}>Delete this restaurant?</button>
                </Modal>
            )}
        </>
    )
}


export default RestaurantUpdateModal;
