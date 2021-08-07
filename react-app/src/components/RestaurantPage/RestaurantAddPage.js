import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createRestaurant } from '../../store/restaurant';
import './Restaurant.css'


const RestaurantAdd = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const history = useHistory()

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
        history.push(`/restaurants/${data.restaurant.id}`)
    }

    if (!currUser || currUser.account_type !== 'Owner') history.push('/')

    return (
        <>
            {currUser &&
                <div className='formPage-container'>
                    <h3>Add a new restaurant</h3>
                    <form className='create-form' onSubmit={handleSubmit}>
                        <div className='formPage-element'>
                            <label>Name of Restaurant: </label>
                            <input className='newRest-element' value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>
                        <div className='formPage-element'>
                            <label>Address of Restaurant: </label>
                            <textarea id='newRest-address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required />
                        </div>
                        <div className='formPage-element'>
                            <label>Restaurant Type: </label>
                            <select className='newRest-element' value={restaurantType}
                                onChange={(e) => setRestaurantType(e.target.value)}>
                                <option value='Fine-Dining'>Fine Dining</option>
                                <option value='Casual-Dining'>Casual Dining</option>
                                <option value='Fast-Food'>Fast Food</option>
                                <option value='Cafe'>Cafe</option>
                                <option value='Buffet'>Buffet</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div className='formPage-element'>
                            <label>Description of the Restaurant: </label>
                            <textarea id='newRest-description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required />
                        </div>
                        <div className='formPage-element'>
                            <label>URL of Restaurant Picture: </label>
                            <input className='newRest-element'
                                value={restntPixUrl}
                                onChange={(e) => setRestntPixUrl(e.target.value)} />
                        </div>
                        <div className='formPage-element-hidden'>
                            <input className='review-text-element'
                                type='number' step='0.01'
                                value={latitude} hidden
                                placeholder='Latitude of restaurant location'
                                onChange={(e) => setLatitude(e.target.value)} />
                        </div>
                        <div className='formPage-element-hidden'>
                            <input className='review-text-element'
                                type='number' step='0.01'
                                value={longitude} hidden
                                placeholder='Latitude of restaurant location'
                                onChange={(e) => setLongitude(e.target.value)} />
                        </div>
                        <div className='buttonContainer'>
                            <button className='button2' type='submit'>Submit Restaurant</button>
                        </div>
                    </form >
                </div>
            }
        </>
    )
}

export default RestaurantAdd;
