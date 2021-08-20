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

    const derpCat = (oneRest) => {
        if (oneRest?.restaurant_pix) {
            return <img src={oneRest?.restaurant_pix}
                alt={oneRest?.name}
                className="restaurant-thumbnail" />
        } else {
            return <img src="https://i.imgur.com/qK8h9Da.png"
                alt="derp-cat!"
                className="restaurant-thumbnail" />
        }
    }

    return (
        <>
            {restObjs &&
                <div className='container-restaurants-background'>
                    <h1>Browse by list of Restaurants</h1>
                    {restObjs?.map(restaurant => (
                        <div className='container-restaurant' key={restaurant?.id}>
                            <a href={`/restaurants/${restaurant?.id}`}>
                                <div className='container-restaurants-details'>
                                    {derpCat(restaurant)}
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
