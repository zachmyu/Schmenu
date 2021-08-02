import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneItem } from '../../store/menu_item'
import { getAllItemRatings } from '../../store/rating'
import { useParams } from "react-router-dom";
import './MenuItem.css'
import Ratings from "./Ratings";


function MenuItem() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const menuItem = useSelector(state => state?.menu_items.current)
    const ratingDetails = useSelector(state => state?.ratings)
    const ratingInfo = Object.values(ratingDetails)

    useEffect(() => {
        dispatch(getOneItem(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllItemRatings(id))
    }, [dispatch, id])

    const avgRating = () => {
        let total = 0
        ratingInfo?.forEach(rating => total += rating?.rating)
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
