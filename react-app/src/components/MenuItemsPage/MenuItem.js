import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import { getOneItem } from '../../store/menu_item'
import { getAllItemRatings } from '../../store/rating'
import { getOneRestaurant } from '../../store/restaurant';
import MenuItemUpdateModal from "../MenuItemModals/MenuItemUpdateModal";
import RatingAddModal from '../RatingsModals/RatingAddModal';
import Ratings from "./Ratings";
import './MenuItem.css'


function MenuItem() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user)
    const menuItem = useSelector(state => state?.menu_items?.current)
    const restId = menuItem?.restaurant_id
    const restName = useSelector(state => state?.restaurants?.current?.name)
    const ratingDetails = useSelector(state => state?.ratings)
    const ratingInfo = Object.values(ratingDetails)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        dispatch(getOneItem(id))
        dispatch(getAllItemRatings(id))
    }, [dispatch, id])

    useEffect(() => {
        if (mounted) {
            dispatch(getOneRestaurant(restId))
        } else {
            setMounted(true)
        }
    }, [dispatch, restId])

    const avgRating = () => {
        let total = 0
        ratingInfo?.forEach(rating => total += rating?.rating)
        let avg = ~~((total / ratingInfo.length) * 10) / 10
        return avg
    }

    let sessionLinks;
    if (currUser && currUser.account_type === "Reviewer") {
        sessionLinks = (
            <>
                <MenuItemUpdateModal />
                <RatingAddModal />
            </>
        );
    } else if (currUser && currUser.account_type === "Owner") {
        sessionLinks = (
            <>
                <MenuItemUpdateModal />
                <h3>Account type needs to be Reviewer to add a review!</h3>
            </>
        );
    } else {
        sessionLinks = (
            <h4>Please sign in to make changes</h4>
        );
    }

    let burritoCat;
    if (menuItem?.food_pix) {
        burritoCat = (
            <img src={menuItem?.food_pix}
                alt={menuItem?.food_name}
                className="menu-pix" />
        )
    } else {
        burritoCat = (
            <img src="https://i.imgur.com/hCO0SZp.png"
                alt="burrito-cat!"
                className="menu-pix" />
        )
    }


    return (
        <>
            {menuItem &&
                <div className='menuItem-container'>
                    <div className='menuItem-container-picture'>
                        {burritoCat}
                    </div>
                    <div className='menuItem-background'>
                        <div className='container_menuItem-summary'>
                            <h1>{menuItem.food_name}</h1>
                            <h3>Restaurant:&nbsp;&nbsp; <a
                                href={`/restaurants/${menuItem.restaurant_id}`}>
                                {restName}
                                <hr />
                            </a></h3>
                        </div>
                        <div className='menuItem-container-info'>
                            <div className='menuItem-container-info-left'>
                                <div className='menuItem-details-container'>
                                    <div className='menuItem-details-element'>
                                        <i className="fas fa-star"
                                            style={{ color: "Gold" }}></i>
                                        <span> {avgRating()}</span>
                                    </div>
                                    <div className='menuItem-details-element'>
                                        <i className="far fa-comment-alt"
                                            style={{ color: "RoyalBlue" }}> </i>
                                        <span> {ratingInfo.length} reviews</span>
                                    </div>
                                    <div className='menuItem-details-element'>
                                        <i className="fas fa-money-bill-wave"
                                            style={{ color: "ForestGreen" }}></i>
                                        <span> Price: ${menuItem.price}</span>
                                    </div>
                                </div>
                                <div className='container_menuItem-summary'>
                                    <h4>About this Schmenu item: </h4>
                                    {menuItem.description}
                                </div>
                                <Ratings ratingInfo={ratingInfo} />
                            </div>
                            <div className='menuItem-container-info-right'>
                                <h3>Options:</h3>
                                {sessionLinks}
                                {/*Save Stuff*/}
                                {/*Map of location*/}
                                {/*Questions about this item?*/}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default MenuItem
