import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import { createRestaurant } from '../../store/restaurant';


const RestaurantAddModal = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const history = useHistory()

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [restaurantType, setRestaurantType] = useState('Fine-Dining');
    const [description, setDescription] = useState('');
    const [restntPixUrl, setRestntPixUrl] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(createRestaurant({
            ownerId: currUser.id,
            name,
            address,
            restaurantType,
            description,
            restntPixUrl,
            latitude,
            longitude
        }))
        setName('')
        setAddress('')
        setRestaurantType('Fine-Dining')
        setDescription('')
        setRestntPixUrl('')
        setShowModal(false)
        history.push(`/restaurants/${data.restaurant.id}`)
    }

    return (
        <>
            <button className="navbar-button"
                onClick={() => setShowModal(true)}>Add a new restaurant</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Add a new restaurant</h3>
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
                            <button className="button2" type="submit">Submit New Restaurant</button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
}

export default RestaurantAddModal;
