// Add user get one, edit, delete
// const GET_ALL_USERS = '' (Not sure if all users needed)
const READ_SINGLE_USER = 'user/READ_SINGLE_USER'
const UPDATE_USER = 'user/UPDATE_USER'
const DELETE_USER = 'user/DELETE_USER'

//Functions
const loadOneUser = (user) => ({
    type: READ_SINGLE_USER,
    payload: user
});

const loadAllUsers = (user) => ({
    type: READ_SINGLE_USER,
    payload: user
});

const changeUser = (user_id) => ({
    type: UPDATE_USER,
    payload: user_id
});

const removeUser = (user_id) => ({
    type: DELETE_USER,
    payload: user_id
});

//Thunks
export const getOneUser = (userId) => async dispatch => {
    const res = await fetch(`api/users/${userId}`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneUser(data))
    } else {
        throw res
    }
}

export const getAllUsers = () => async dispatch => {
    const res = await fetch(`api/users`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllUsers(data))
    } else {
        throw res
    }
}

export const UpdateUser = (userData) => async dispatch => {
    const { firstName, lastName, username, email, about, profilePixUrl, accountType, password, userId } = userData

    const res = await fetch(`api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            about: about,
            profile_pix: profilePixUrl,
            account_type: accountType,
            password: password
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(changeUser(data));
        dispatch(loadOneUser(userId));
    } else {
        throw res
    };
    return data;
}

export const deleteUser = (userId) => async dispatch => {
    const res = await fetch(`/api/products/${userId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeUser(data));
    } else {
        throw res
    }
}

//Reducers
const initialState = {}

const usersReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_USER:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_USERS:
            newState = {};
            action.payload.forEach((user) => {
                newState[restaurant.id] = restaurant;
            });
            return newState

        case UPDATE_USER:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_USER:
            newState = { ...state }
            delete newState[payload.id]
            return newState
        default:
            return state;
    }
}

export default usersReducer;
