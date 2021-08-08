import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal'
import { createItem } from '../../store/menu_item';
import './MenuItemModal.css'


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
            <button className='button1'
                onClick={() => setShowModal(true)}>Add a new menu item!
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='itemModal-container'>
                        <h3 className='modal-header'>Submit a new menu item!!</h3>
                        <form className='itemModal-form' onSubmit={handleSubmit}>
                            <div className='itemModal-element'>
                                <label>Name of menu item</label>
                                <input
                                    className='itemModal-input'
                                    placeholder='Name of menu item'
                                    value={foodName}
                                    onChange={(e) => setFoodName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='itemModal-element'>
                                <label>Price of item</label>
                                <input type='number' step='0.01'
                                    className='itemModal-input'
                                    value={price}
                                    placeholder='Price of item'
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='itemModal-element'>
                                <label>Description of item</label>
                                <textarea
                                    className='itemModal-text'
                                    value={description}
                                    placeholder='Description of item'
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='itemModal-element'>
                                <label>Add a picture of the item</label>
                                <input
                                    className='itemModal-input'
                                    placeholder='Add a picture of the item'
                                    value={foodPix}
                                    onChange={(e) => setFoodPix(e.target.value)}
                                />
                            </div>
                            <div className='buttonContainer'>
                                <button type='submit' className='button1'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default MenuItemAddModal;
