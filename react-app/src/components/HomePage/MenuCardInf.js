import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllItems } from '../../store/menu_item'
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.css";


function MenuCardInf() {

    const dispatch = useDispatch()
    const menuItems = useSelector(state => state?.menu_items)
    const itemsArr = Object?.entries(menuItems)

    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])


    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(itemsArr?.slice(count.prev, count.next))

    const getMoreData = () => {
        if (current?.length === itemsArr?.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setCurrent(current?.concat(itemsArr?.slice(count?.prev + 10, count?.next + 10)))
        }, 1000)
        setCount((prevState) => ({ prev: prevState?.prev + 10, next: prevState?.next + 10 }))
    }

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

    return (
        <>

            <div className='menus-container'>
                <InfiniteScroll
                    dataLength={current?.length}
                    next={getMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    {current && current?.map(((item, idx) => (
                        <a href={`/menuitems/${item[1].id}`} key={item[1].id}>
                            <div className='menu-card' >
                                <img src={item[1].food_pix} className='menu-pix'
                                    alt={item[1].food_name} />
                                <div className='menu-description'>
                                    <div className='menu-title'><h3>{item[1].food_name}</h3></div>
                                    <div className='menu-price'>Cost: ${item[1].price}</div>
                                    <div className='menu-rating'>Rating:
                                        {avgRating(item[1].ratings)} </div>
                                </div>
                            </div>
                        </a>
                    )))}
                </InfiniteScroll>
            </div>
        </>
    );
}

export default MenuCardInf
