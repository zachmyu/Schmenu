import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getOneRestaurant } from '../../store/restaurant'
import { getAllRestItems } from '../../store/menu_item'
import RestaurantUpdateModal from "./RestaurantUpdateModal";
import MenuItemAddModal from "../MenuItemModals/MenuItemAddModal";
import { useParams } from "react-router-dom";
import './Restaurant.css'


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

    let ownerLinks;
    if (currUser && currUser.id === currRestnt?.owner_id) {
        ownerLinks = (
            <RestaurantUpdateModal />
        );
    }

    let sessionlinks;
    if (currUser) {
        sessionlinks = (
            <MenuItemAddModal />
        );
    }

    let contentPicture;
    if (currRestnt?.restaurant_pix) {
        contentPicture = (
            <img src={currRestnt?.restaurant_pix}
                alt={currRestnt?.name}
                className="restaurant-picture" />
        )
    } else {
        contentPicture = (
            <img src="https://i.imgur.com/qK8h9Da.png"
                alt="derp-cat!"
                className="restaurant-picture" />
        )
    }

    return (
        <>
            {currRestnt &&
                <div className='restaurant-container'>
                    <div className='restaurant-container-picture'>
                        {contentPicture}
                    </div>
                    <div className='restaurant-background'>
                        <div className='restaurant-elements-container'>
                            <div className='container_restaurant-summary'>
                                {ownerLinks}
                                <h1>{currRestnt?.name}</h1>
                                <hr />
                            </div>
                            <div className='container_Restaurant-details'>
                                <div className='Restaurant-details-element'>
                                    <h3>Restaurant Address:&nbsp;&nbsp;</h3>
                                    <h4>{currRestnt?.address}</h4>
                                </div>
                                <div className='Restaurant-details-element'>
                                    <h3>Restaurant Type:&nbsp;&nbsp;</h3>
                                    <h4>{currRestnt?.restaurant_type}</h4>
                                </div>
                            </div>
                            <div className='Restaurant-details-element'>
                                <h4>About this Restaurant: </h4>
                                {currRestnt?.description}
                                <hr></hr>
                            </div>
                            <h2>Schmenu item offered at this restaurant:</h2>
                            {itemInfo?.map(item => (
                                <a href={`/menuitems/${item?.id}`} key={item?.id}>
                                    <div className='container_Restaurant-items'>
                                        <div className='container_Restaurant-items-details'>
                                            <img src={item.food_pix}
                                                alt={item.food_name}
                                                className='menuItem-thumbnail' />
                                            <span>{item?.description}</span>
                                        </div>
                                        <h4 className='menuItem-names'>{item?.food_name}</h4>
                                    </div>
                                </a>
                            ))}
                            {sessionlinks}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Restaurant
