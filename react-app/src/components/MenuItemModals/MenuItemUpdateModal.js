import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal'
import { updateItem, deleteItem } from '../../store/menu_item'


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
                onClick={() => setShowModal(true)}>Update menu item</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3>Update details for menu item</h3>
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
                                value={foodPixUrl}
                                onChange={(e) => setFoodPixUrl(e.target.value)}
                            />
                        </div>
                        <button type='submit' className="button3">
                            Submit Update
                        </button>
                    </form>
                    <button className="button3" onClick={() => (
                        handleDelete(currItem.id
                        ))}>Delete Menu Item?</button>
                </Modal>
            )}
        </>
    )
}


export default MenuItemUpdateModal;
