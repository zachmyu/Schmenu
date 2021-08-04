// restaurants get one, get all, create, edit, delete
const READ_SINGLE_RESTAURANT = 'restaurant/READ_SINGLE_RESTAURANT'
const READ_ALL_RESTAURANTS = 'restaurant/READ_ALL_RESTAURANTS'
const CREATE_RESTAURANT = 'restaurant/CREATE_RESTAURANT'
const UPDATE_RESTAURANT = 'restaurant/UPDATE_RESTAURANT'
const DELETE_RESTAURANT = 'restaurant/DELETE_RESTAURANT'

//Functions
const loadOneRestaurant = (restaurant) => ({
    type: READ_SINGLE_RESTAURANT,
    payload: restaurant
});

const loadAllRestaurants = (restaurants) => ({
    type: READ_ALL_RESTAURANTS,
    payload: restaurants
});

const addRestaurant = (restaurant) => ({
    type: CREATE_RESTAURANT,
    payload: restaurant
});

const changeRestaurant = (restaurant_id) => ({
    type: UPDATE_RESTAURANT,
    payload: restaurant_id
});

const removeRestaurant = (restaurant_id) => ({
    type: DELETE_RESTAURANT,
    payload: restaurant_id
});

//Thunks
export const getOneRestaurant = (restaurantId) => async dispatch => {
    const res = await fetch(`/api/restaurants/${restaurantId}/`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneRestaurant(data))
    } else {
        throw res
    }
}

export const getAllRestaurants = () => async dispatch => {
    const res = await fetch(`/api/restaurants/`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllRestaurants(data))
    } else {
        throw res
    }
}

export const createRestaurant = (restaurantData) => async dispatch => {
    const { ownerId, name, address, restaurantType, description, restaurantPixUrl, latitude, longitude } = restaurantData
    const res = await fetch(`/api/restaurants/create/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner_id: ownerId,
            name: name,
            address: address,
            restaurant_type: restaurantType,
            description: description,
            restaurant_pix: restaurantPixUrl,
            latitude: latitude,
            longitude: longitude
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(addRestaurant(data))
    } else {
        throw res
    };
    return data
}

export const UpdateRestaurant = (restaurantData) => async dispatch => {
    const { ownerId, name, address, restaurantType, description, restaurantPixUrl, latitude, longitude, restaurantId } = restaurantData

    const res = await fetch(`/api/restaurants/${restaurantId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            owner_id: ownerId,
            name: name,
            address: address,
            restaurant_type: restaurantType,
            description: description,
            restaurant_pix: restaurantPixUrl,
            latitude: latitude,
            longitude: longitude,
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(changeRestaurant(data));
        dispatch(loadOneRestaurant(restaurantId));
    } else {
        throw res
    };
    return data
}

export const deleteRestaurant = (restaurantId) => async dispatch => {
    const res = await fetch(`/api/restaurants/${restaurantId}/`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeRestaurant(restaurantId));
    } else {
        throw res
    }
}

//Reducers
const initialState = {}

const restaurantsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_RESTAURANT:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_RESTAURANTS:
            newState = {};
            action.payload.forEach((restaurant) => {
                newState[restaurant.id] = restaurant;
            });
            return newState

        case CREATE_RESTAURANT:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState

        case UPDATE_RESTAURANT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case DELETE_RESTAURANT:
            newState = { ...state }
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}

export default restaurantsReducer;
