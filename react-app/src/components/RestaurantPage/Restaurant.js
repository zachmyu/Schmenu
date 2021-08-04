import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneRestaurant } from '../../store/restaurant'
import { getAllRestItems } from '../../store/menu_item'
import { useParams } from "react-router-dom";
import './Restaurant.css'
import RestaurantUpdateModal from "./RestaurantUpdateModal";


function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user)
    const currRestnt = useSelector(state => state?.restaurants?.current)
    const restaurantItems = useSelector(state => state?.menu_items)
    const itemInfo = Object.values(restaurantItems)

    useEffect(() => {
        dispatch(getOneRestaurant(id))
        dispatch(getAllRestItems(id))
    }, [dispatch, id])

    // useEffect(() => {

    // }, [dispatch, id])

    let ownerLinks;
    if (currUser && currUser.id === currRestnt?.owner_id) {
        ownerLinks = (
            <div>
                <RestaurantUpdateModal />
            </div>
        );
    } else {
        ownerLinks = (null);
    }

    return (
        <>
            {currRestnt &&
                <>
                    <div className='container__container_Restaurant-title'>
                        <img src={currRestnt?.restaurant_pix}
                            alt={currRestnt?.name}
                            className='container__Restaurant-picture' />
                    </div>
                    Helloooo Drew!
                    <div className='container__Restaurant'>
                        <div className='container_Restaurant-left'>
                            <div className='container_Restaurant-summary'>
                                {ownerLinks}
                                <h1 className='Restaurant-title'>{currRestnt?.name}</h1>
                                <hr />
                            </div>
                            <div className='container_Restaurant-details'>
                                <div className='Restaurant-details-element'>
                                    {currRestnt?.address}
                                </div>
                                <div className='Restaurant-details-element'>
                                    {currRestnt?.restaurant_type}
                                </div>
                                <div className='Restaurant-details-element'>
                                </div>
                            </div>
                            <div className='container_Restaurant-summary'>
                                {currRestnt?.description}
                            </div>
                            <div className='container_Restaurant-items'>
                                {itemInfo?.map(item => (
                                    <a href={`/menuitems/${item?.id}`} key={item?.id}>
                                        <h3>{item?.food_name}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
export default Restaurant
