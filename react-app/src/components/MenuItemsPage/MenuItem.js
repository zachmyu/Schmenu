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
            <MenuItemUpdateModal />
        );
    } else {
        sessionlinks = (
            <h4>Please sign in to make changes</h4>
        );
    }

    return (
        <>
            {menuItem &&
                <div className='menuItem-container'>
                    <div className='menuItem-container-picture'>
                        <img src={menuItem.food_pix}
                            alt={menuItem.food_name}
                            className='menuItem-picture' />
                    </div>
                    <div className='menuItem-background'>
                        <div className='container_menuItem-summary'>
                            <h1>{menuItem.food_name}</h1>
                            <hr />
                            <h3>Restaurant:&nbsp;&nbsp; <a
                                href={`/restaurants/${menuItem.restaurant_id}`}>
                                {restName}
                            </a></h3>
                        </div>
                        <div className='menuItem-container-info'>
                            <div className='menuItem-container-info-left'>

                                <div className='menuItem-details-container'>
                                    <div className='menuItem-details-element'>
                                        <i className="fas fa-star" style={{ color: "Gold" }}></i>
                                        <span> {avgRating()}</span>
                                    </div>
                                    <div className='menuItem-details-element'>
                                        <i className="far fa-comment-alt" style={{ color: "RoyalBlue" }}> </i>
                                        <span> {ratingInfo.length} reviews</span>
                                    </div>
                                    <div className='menuItem-details-element'>
                                        <i className="fas fa-money-bill-wave" style={{ color: "ForestGreen" }}></i>
                                        <span> Price: ${menuItem.price}</span>
                                    </div>

                                </div>
                                <div className='container_menuItem-summary'>
                                    {menuItem.description}
                                </div>
                                <Ratings ratingInfo={ratingInfo} />
                            </div>
                            <div className='menuItem-container-info-right'>
                                {/*sidebar stuff?*/}
                                {sessionlinks}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default MenuItem
