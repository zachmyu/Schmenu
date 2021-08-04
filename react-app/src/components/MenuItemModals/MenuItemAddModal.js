import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal'
import { createItem } from '../../store/menu_item';


const MenuItemAddModal = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user);
    const currRestnt = useSelector(state => state?.restaurants?.current);

    const [showModal, setShowModal] = useState(false);
    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [foodPix, setFoodPix] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItem({
            creatorId: currUser.id, restaurantId: currRestnt?.id, foodName, price, description, foodPix
        }))
        setFoodName('')
        setPrice(0)
        setDescription('')
        setFoodPix('')
        setShowModal(false)
    }

    return (
        <>
            <button className="navbar-button"
                onClick={() => setShowModal(true)}>Add a new menu item!</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Submit a new menu item!!</h3>
                    <form className='ratings-container' onSubmit={handleSubmit}>
                        <div className="review-element-container">
                            <input
                                className="review-element"
                                placeholder='Name of menu item'
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="review-element-container">
                            <input type='number' step='0.01'
                                className="review-text-element"
                                value={price}
                                placeholder='Price of item'
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="review-element-container">
                            <textarea
                                className="review-text-element"
                                value={description}
                                placeholder='Description of item'
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="review-element-container">
                            <input
                                className="review-element"
                                placeholder='Add a picture of the item'
                                value={foodPix}
                                onChange={(e) => setFoodPix(e.target.value)}
                            />
                        </div>

                        <button type='submit' className="button3">
                            Submit
                        </button>
                    </form>
                </Modal>
            )}
        </>
    )
}

export default MenuItemAddModal;
