import React from 'react';
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'
// import MenuItemCards from './MenuItemCards';
import MenuCardInf from './MenuCardInf'
import "./Home.css";


function HomePage() {
    // const [search, setSearch] = useState('')

    // let SearchBar = []
    // const handleClick = () => {
    //     const venueFilter = venueArray.filter((venue) => venue.name.toLowerCase().includes(search.toLowerCase()))
    //     venueForSearchBar.push(venueFilter)
    //     setResults(venueForSearchBar)
    //     setSearch('')
    //     return history.push("/search")
    // }

    return (
        <>
            <div className='splash-container'>
                <h1 id='slogan'>What's your craving today?</h1>
                <div className='splash-booking-container'>

                    {/* <form onSubmit={handleClick} className='splash-booking-form' >
                        <input
                            name='searchbar'
                            id='home-search'
                            type='text'
                            placeholder='Place or Date Type'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            required
                        ></input>
                        <button className='splash-button'>Let's go</button>
                    </form> */}
                </div>


            </div>
            {/* <MenuItemCards /> */}
            <MenuCardInf />
        </>

    );
}

export default HomePage
