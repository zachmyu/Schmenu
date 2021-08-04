import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneItem } from '../../store/menu_item'
import { getAllItemRatings } from '../../store/rating'
import { getOneRestaurant } from '../../store/restaurant';
import { useParams } from "react-router-dom";
import MenuItemUpdateModal from "../MenuItemModals/MenuItemUpdateModal";
import './MenuItem.css'
import Ratings from "./Ratings";


function MenuItem() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const currUser = useSelector(state => state?.session?.user)
    const menuItem = useSelector(state => state?.menu_items?.current)
    const restId = menuItem?.restaurant_id
    const restName = useSelector(state => state?.restaurants?.current?.name)
    const ratingDetails = useSelector(state => state?.ratings)
    const ratingInfo = Object.values(ratingDetails)

    useEffect(() => {
        dispatch(getOneItem(id))
        dispatch(getAllItemRatings(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getOneRestaurant(restId))
    }, [dispatch, restId])

    const avgRating = () => {
        let total = 0
        ratingInfo?.forEach(rating => total += rating?.rating)
        let avg = ~~((total / ratingInfo.length) * 10) / 10
        return avg
    }

    let sessionlinks;
    if (currUser) {
        sessionlinks = (
            <div className='navbar-button'>
                <MenuItemUpdateModal />
            </div>
        );
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
                                Restaurant: <a href={`/restaurants/${menuItem.restaurant_id}`}>{restName}</a>
                            </div>
                            {sessionlinks}
                            <div className='container_menuItem-details'>
                                <div className='menuItem-details-element'>
                                    <i className="fas fa-star"></i>
                                    <span>{avgRating()}</span>
                                </div>
                                <div className='menuItem-details-element'>
                                    <i className="far fa-comment-alt"> </i>
                                    <span>{ratingInfo.length} reviews</span>
                                </div>
                                <div className='menuItem-details-element'>
                                    <i className="fas fa-money-bill-wave"></i>
                                    <span>Price: ${menuItem.price}</span>
                                </div>
                            </div>
                            <div className='container_menuItem-summary'>
                                {menuItem.description}
                            </div>
                            <Ratings ratingInfo={ratingInfo} />
                        </div>
                        <div className='container_menuItem-right'>
                            {/*sidebar stuff?*/}
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default MenuItem
