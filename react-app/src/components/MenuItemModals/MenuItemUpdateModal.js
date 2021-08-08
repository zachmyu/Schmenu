import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import { updateItem, deleteItem } from '../../store/menu_item'
import './MenuItemModal.css'


const MenuItemUpdateModal = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const currUser = useSelector(state => state?.session?.user);
    const currItem = useSelector(state => state?.menu_items?.current);
    const restId = currItem?.restaurant_id;

    const [showModal, setShowModal] = useState(false);
    const [foodName, setFoodName] = useState(currItem.food_name);
    const [price, setPrice] = useState(currItem.price);
    const [description, setDescription] = useState(currItem.description);
    const [foodPixUrl, setFoodPixUrl] = useState(currItem.food_pix);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateItem({
            creatorId: currUser.id, restaurantId: restId, foodName, price, description, foodPixUrl, menuItemId: currItem.id
        }))
        setFoodName(currItem.food_name)
        setPrice(currItem.price)
        setDescription(currItem.description)
        setFoodPixUrl(currItem.food_pix)
        setShowModal(false)
    }

    const handleDelete = (e) => {
        let alert = window.confirm('Are you sure you want to delete this menu item?')
        if (alert) {
            dispatch(deleteItem(currItem.id))
        }
        history.push(`/restaurants/${restId}`)
    }

    return (
        <>
            <button className="button1"
                onClick={() => setShowModal(true)}>Update Schmenu item</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='itemModal-container'>
                        <h3 className='modal-header'>Update details for menu item</h3>
                        <form className='itemModal-form' onSubmit={handleSubmit}>
                            <div className="itemModal-element">
                                <label>Name of menu item</label>
                                <input
                                    className="itemModal-input"
                                    placeholder='Name of menu item'
                                    value={foodName}
                                    onChange={(e) => setFoodName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="itemModal-element">
                                <label>Price of item</label>
                                <input type='number' step='0.01'
                                    className="itemModal-input"
                                    value={price}
                                    placeholder='Price of item'
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="itemModal-element">
                                <label>Description of item</label>
                                <textarea
                                    className="itemModal-text"
                                    value={description}
                                    placeholder='Description of item'
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="itemModal-element">
                                <label>Add a picture of the item</label>
                                <input
                                    className="itemModal-input"
                                    placeholder='Add a picture of the item'
                                    value={foodPixUrl}
                                    onChange={(e) => setFoodPixUrl(e.target.value)}
                                />
                            </div>
                            <div className='buttonContainer2'>
                                <button type='submit' className="button1">
                                    Submit Update
                                </button>
                                <button className="button2" onClick={() => (
                                    handleDelete(currItem.id
                                    ))}>Delete Menu Item?</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}


export default MenuItemUpdateModal;
