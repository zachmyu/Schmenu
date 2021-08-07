import React, { useState } from 'react';
import { Modal } from '../../context/Modal'


const AboutModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="footer-button"
                onClick={() => setShowModal(true)}>
                <i className="fas fa-question-circle"></i> About this app</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='about-container'>
                        <h3>Have you ever had a craving for a specific food, but couldn't find it? Schmenu is designed to help you solve this problem!</h3>
                        <span> Schmenu has been designed so you will be searching and exploring items by food name instead of restaurant name. Check out ratings on each food item by other people, leave ratings for them yourself, and look for places that have the one thing that you're craving!</span>
                        <br />
                        <br />
                        <span>You don't need to care if the service is great, you're there for a specific food item and it's got to be good according to the reviews! Or, if you have found a newly created menu item that doesn't yet exist, feel free to add a submission for it to our pages as well.</span>
                        <br />
                        <br />
                        <span>If you're a restaurant owner, you can also sign up your account as an Owner! You'll be able to add, edit, and delete restaurants that you've just opened, or unfortunately had to close... You will not be able to leave reviews, as we wouldn't want restaurant owners to manipulate the ratings on their food items. Honest reviews by consumers is what we want!</span>
                        <br />
                        <br />
                        <span>So click around, explore the website and find your favorite items, because who needs menus anymore with this app. Menu Schmenu!!</span>
                        <br />
                        <br />
                        <div className='about-me'>
                            <span>This app was conceptualized, created, and designed by Zach Yu. Copyright 2021 </span>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default AboutModal;
