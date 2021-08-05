import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllItems } from '../../store/menu_item'
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.css";

function MenuItemCards() {

    const dispatch = useDispatch()
    const menuItems = useSelector(state => state?.menu_items)
    const itemsArr = Object.entries(menuItems)
    // console.log("HHHHHHHHHHHHHHHHHEEEEEEEEEEERRRRRRRRRREEEEEEEEEE", itemsArr)

    const [count, setCount] = useState({
        prev: 0,
        next: 10
    })
    const [hasMore, setHasMore] = useState(true);
    const [current, setCurrent] = useState(itemsArr.slice(count.prev, count.next))

    const getMoreData = () => {
        if (current.length === itemsArr.length) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setCurrent(current.concat(itemsArr.slice(count.prev + 10, count.next + 10)))
        }, 2000)
        setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }

    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const avgRating = (ratings) => {
        let total = 0
        if (ratings !== {}) {
            const singleRating = Object.values(ratings)
            singleRating.forEach(rate => (
                total += rate?.rating
            ))
            let avg = ~~((total / singleRating.length) * 10) / 10
            if (avg === 0) return "⭐"
            else if (avg > 0 && avg <= 2) return "⭐⭐"
            else if (avg > 2 && avg <= 3) return "⭐⭐⭐"
            else if (avg > 3 && avg <= 4) return "⭐⭐⭐⭐"
            else if (avg > 4 && avg <= 5) return "⭐⭐⭐⭐⭐"
            // return avg

        }
    }



    return (
        <div className='splash-venues-container'>
            <InfiniteScroll
                dataLength={current.length}
                next={getMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                <div>
                    {current && current.map(((item, idx) => (
                        < div key={idx} className="post" >
                            {console.log("HHHHHHHHHHHHHHHHHEEEEEEEEEEERRRRRRRRRREEEEEEEEEE")}
                            {/* {console.log("HHHHHHHHHHHHHHHHHEEEEEEEEEEERRRRRRRRRREEEEEEEEEE", current[idx][1].food_name)} */}
                            {/* <h3>{`${item.food_name}`}</h3> */}
                            {/* <p>{item.price}</p> */}
                        </div>
                    )))
                    }
                </div>
            </InfiniteScroll>
            {/* {itemsArr.map(item => (
                <a href={`/menuitems/${item.id}`} key={item.id}>
                    <div className='splash-venue-card' >
                        <img src={item.food_pix} className='splash-venue-pix' alt={item.food_name} />
                        <div className='splash-venue-description'>
                            <div className='splash-venue-title'><h3>{item.food_name}</h3></div>
                            <div className='splash-venue-location'>Cost: ${item.price}</div>
                            <div className='splash-venue-location'>Rating:
                                {avgRating(item.ratings)} </div>
                        </div>
                    </div>
                </a>
            ))} */}


        </div >

    );
}

export default MenuItemCards
