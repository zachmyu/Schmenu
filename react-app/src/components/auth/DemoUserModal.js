import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const DemoUserModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLoginReviewer = async (e) => {
        e.preventDefault();

        const data = await dispatch(
            login('demo@mcdemoface.com', 'SchmenuP@ssword')
        );
        if (data) setErrors(data);
    };
    const onLoginOwner = async (e) => {
        e.preventDefault();

        const data = await dispatch(
            login('bob-ross@mcdemoface.com', 'SchmenuP@ssword')
        );
        if (data) setErrors(data);
    };

    if (user) {
        return <Redirect to='/' />;
    }

    return (
        <>
            <button className="navbar-button" onClick={() => setShowModal(true)}>Demo Users</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div className='login__demoUsers'>
                        <form onSubmit={onLoginReviewer}>
                            <div className='form'>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
                            <button type='submit' className="button3"> Demo as Reviewer </button>
                        </form>
                        <form onSubmit={onLoginOwner}>
                            <div className='form'>
                                {errors.map((error, ind) => (
                                    <div key={ind}>{error}</div>
                                ))}
                            </div>
                            <button type='submit' className="button3"> Demo as Owner </button>
                        </form>
                    </div>
                </Modal>
            )}
        </>
    )
}


export default DemoUserModal;
