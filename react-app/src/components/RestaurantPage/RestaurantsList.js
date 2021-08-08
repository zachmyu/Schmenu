import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllRestaurants } from "../../store/restaurant";
import { useParams } from "react-router-dom";
import './Restaurant.css'


function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const currUser = useSelector(state => state?.session?.user)
    const allRests = useSelector(state => state?.restaurants)
    const restObjs = Object.values(allRests)

    // const itemInfo = Object.values(restaurantItems)

    useEffect(() => {
        dispatch(getAllRestaurants())
    }, [dispatch])



    return (
        <>
            {restObjs &&
                <div className='container-restaurants-background'>
                    <h1>Browse by list of Restaurants</h1>
                    {restObjs?.map(restaurant => (
                        <div className='container-restaurant' >
                            <a href={`/restaurants/${restaurant?.id}`} key={restaurant?.id}>
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
