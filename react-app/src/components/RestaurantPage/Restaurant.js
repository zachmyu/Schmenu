import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneRestaurant } from '../../store/restaurant'
import { getAllRestItems } from '../../store/menu_item'
import { useParams } from "react-router-dom";
import './Restaurant.css'


function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currRestaurant = useSelector(state => state?.restaurants?.current)
    const restaurantItems = useSelector(state => state?.menu_items)
    const itemInfo = Object.values(restaurantItems)

    useEffect(() => {
        dispatch(getOneRestaurant(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getAllRestItems(id))
    }, [dispatch, id])

    return (
        <>
            {currRestaurant &&
                <>
                    <div className='container__currRestaurant-title'>
                        <img src={currRestaurant.restaurant_pix}
                            alt={currRestaurant.name}
                            className='currRestaurant-picture' />
                    </div>
                    <div className='container__Restaurant'>
                        <div className='container_Restaurant-left'>
                            <div className='container_Restaurant-summary'>
                                <h1 className='Restaurant-title'>{currRestaurant.name}</h1>
                                <hr />
                            </div>
                            <div className='container_Restaurant-details'>
                                <div className='Restaurant-details-element'>
                                    {currRestaurant.address}
                                </div>
                                <div className='Restaurant-details-element'>
                                    {currRestaurant.restaurant_type}
                                </div>
                                <div className='Restaurant-details-element'>
                                </div>
                            </div>
                            <div className='container_Restaurant-summary'>
                                {currRestaurant.description}
                            </div>
                            <div className='container_Restaurant-items'>
                                {itemInfo?.map(item => (
                                    <a href={`/menuitems/${item?.id}`} key={item?.id}>
                                        <h3>{item.food_name}</h3>
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
