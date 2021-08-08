import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllRestaurants } from "../../store/restaurant";
import './Restaurant.css'


function Restaurant() {
    const dispatch = useDispatch();
    const allRests = useSelector(state => state?.restaurants)
    const restObjs = Object.values(allRests)

    useEffect(() => {
        dispatch(getAllRestaurants())
    }, [dispatch])

    return (
        <>
            {restObjs &&
                <div className='container-restaurants-background'>
                    <h1>Browse by list of Restaurants</h1>
                    {restObjs?.map(restaurant => (
                        <div className='container-restaurant' key={restaurant?.id}>
                            <a href={`/restaurants/${restaurant?.id}`}>
                                <div className='container-restaurants-details'>
                                    <img src={restaurant?.restaurant_pix}
                                        alt={restaurant?.name}
                                        className='restaurant-thumbnail' />
                                    <span>{restaurant?.description}</span>
                                </div>
                                <div className='container-restaurant-nametype'>
                                    <span>Type: {restaurant?.restaurant_type}</span>
                                    <h2>{restaurant?.name}</h2>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
export default Restaurant
