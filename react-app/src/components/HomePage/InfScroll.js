import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function InfScroll(pageNum) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [loadItems, setLoadItems] = useState([]);
    const [hasMore, setHasMore] = useState(false);


    useEffect(() => {
        setLoading(true);
        setError(false);

        axios({
            method: 'GET',
            url: '/api/menu_items/',
            params: { page: pageNum }
        }).then(res => {
            const itemArr = Object.values(res.data);
            setLoadItems(prevItems => {
                return [...prevItems, itemArr.map(item =>
                    console.log(item.food_name)
                )];
            });
            setHasMore(itemArr.length > 0);
            setLoading(false);
        }).catch(e => {
            setError(true)
        })
    }, [pageNum]);



    return null

}
