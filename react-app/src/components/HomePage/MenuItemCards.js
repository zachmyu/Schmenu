import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllItems } from '../../store/menu_item'
import "./Home.css";


function MenuItemCards() {
    const dispatch = useDispatch()
    const menuItems = useSelector(state => state?.menu_items)
    const itemsArr = Object?.entries(menuItems)

    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const avgRating = (ratings) => {
        let total = 0
        if (ratings !== {}) {
            const singleRating = Object.values(ratings)
            singleRating?.forEach(rate => (
                total += rate?.rating
            ))
            let avg = ~~((total / singleRating.length) * 10) / 10
            if (avg === 0) return `⭐No ratings have been submitted`
            else if (avg > 0 && avg <= 1) return `${avg}⭐`
            else if (avg > 1 && avg <= 2) return `${avg}⭐⭐`
            else if (avg > 2 && avg <= 3) return `${avg}⭐⭐⭐`
            else if (avg > 3 && avg <= 4) return `${avg}⭐⭐⭐⭐`
            else if (avg > 4 && avg <= 5) return `${avg}⭐⭐⭐⭐⭐`
        }
    }

    const burritoCat = (oneItem) => {
        if (oneItem?.food_pix) {
            return <img src={oneItem?.food_pix}
                alt={oneItem?.food_name}
                className="menu-pix" />
        } else {
            return <img src="/images/defaultRest.png"
                alt="burrito-cat!"
                className="menu-pix" />
        }
    }

    return (
        <div className='menus-container'>
            {itemsArr && itemsArr.map(item => (
                <a href={`/menuitems/${item[1].id}`} key={item[1].id}>
                    <div className='menu-card' >
                        {burritoCat(item[1])}
                        <div className='menu-description'>
                            <div className='menu-title'><h3>{item[1].food_name}</h3></div>
                            <div className='menu-price'>Cost: ${item[1].price}</div>
                            <div className='menu-rating'>Rating:
                                {avgRating(item[1].ratings)} </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default MenuItemCards
