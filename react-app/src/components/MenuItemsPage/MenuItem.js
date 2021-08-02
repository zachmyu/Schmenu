import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneItem } from '../../store/menu_item'
// import { updateReview, deleteReview } from '../../store/reviews'
import { useParams, useHistory } from "react-router-dom";
// import ReviewFormModal from '../ReviewFormModal/ReviewCreateForm'
// import { createFavorites, deleteFavorites } from '../../store/favorite'
import './MenuItem.css'
import Ratings from "./Ratings";
// import '../ReviewFormModal/ReviewForm.css'

function MenuItem() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    //Save button functions
    const [buttonUnSave, setButtonUnSave] = useState('button-removeSave')
    const [buttonAddSave, setButtonAddSave] = useState('button-addSave')
    const [oneClickBtn, setOneClickBtn] = useState(false)

    const user = useSelector(state => state?.session.user)
    const menuItem = useSelector(state => state?.menu_items.current)
    const userSaves = user ? Object.values(user?.saves) : null
    console.log("HEELLLLLLLLOOOOOOOOOOOOOOOOOOOOOOO", menuItem)
    const ratingInfo = menuItem ? Object.values(menuItem?.ratings) : null
    // const faveFind = userSaves?.find(save => save?.menu_item_id === id)

    useEffect(() => {
        dispatch(getOneItem(id))
    }, [dispatch, id])

    const avgRating = () => {
        let total = 0
        ratingInfo?.forEach(rating => total += rating?.rating)
        // let avg = Math.round((total / ratingInfo.length) * 10) / 10
        let avg = ~~((total / ratingInfo.length) * 10) / 10
        return avg
    }



    return (
        <>
            {menuItem &&
                <>
                    <div className='container__menuItem-title'>
                        <img src={menuItem.food_pix}
                            alt={menuItem.food_name}
                            className='menuItem-picture' />
                    </div>
                    <div className='container__menuItem'>
                        <div className='container_menuItem-left'>
                            <div className='container_menuItem-summary'>
                                <h1 className='menuItem-title'>{menuItem.food_name}</h1>
                                <hr />
                            </div>
                            <div className='container_menuItem-details'>
                                <div className='menuItem-details-element'>
                                    <i class="fas fa-star"></i>
                                    <span>{avgRating()}</span>
                                </div>
                                <div className='menuItem-details-element'>
                                    <i class="far fa-comment-alt"> </i>

                                    <span>{(Object.values(menuItem.ratings)).length} reviews</span>
                                </div>
                                <div className='menuItem-details-element'>
                                    <i class="fas fa-money-bill-wave"></i>
                                    <span>Price: ${menuItem.price}</span>
                                </div>
                            </div>
                            <div className='container_menuItem-summary'>
                                {menuItem.description}
                            </div>
                            <Ratings ratingInfo={ratingInfo} />
                            {/* {reviewChange} */}
                        </div>
                        <div className='container_menuItem-right'>
                            {/* <div id="menuItemElement-reservation">{makeReservation}</div> */}
                            {/* <div id="menuItemElement-maps">Google Maps Placeholder</div> */}
                            {/* <div id="menuItemElement-info">Various Information Placeholder</div> */}
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default MenuItem
