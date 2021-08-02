// ratings get one, get all, create, edit, delete
const READ_SINGLE_RATING = 'rating/READ_SINGLE_RATING'
const READ_ALL_RATINGS = 'rating/READ_ALL_RATINGS'
const CREATE_RATING = 'rating/CREATE_RATING'
const UPDATE_RATING = 'rating/UPDATE_RATING'
const DELETE_RATING = 'rating/DELETE_RATING'

//Functions
const loadOneRating = (rating) => ({
    type: READ_SINGLE_RATING,
    payload: rating
});

const loadAllRatings = (ratings) => ({
    type: READ_ALL_RATINGS,
    payload: ratings
});

const addRating = (rating) => ({
    type: CREATE_RATING,
    payload: rating
});

const changeRating = (rating_id) => ({
    type: UPDATE_RATING,
    payload: rating_id
});

const removeRating = (rating_id) => ({
    type: DELETE_RATING,
    payload: rating_id
});

//Thunks
export const getOneRating = (ratingId) => async dispatch => {
    const res = await fetch(`/api/ratings/${ratingId}`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneRating(data))
    } else {
        throw res
    }
}

export const getAllRatings = () => async dispatch => {
    const res = await fetch(`/api/ratings`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllRatings(data))
    } else {
        throw res
    }
}

export const createRating = (ratingData) => async dispatch => {
    const { userId, menuItemId, review, rating } = ratingData

    const res = await fetch(`/api/ratings/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            menu_item_id: menuItemId,
            review: review,
            rating: rating
        }),
    });
    // console.log("OOOOO HERE IS THE DATAAA!", res)
    const data = await res.json();


    if (res.ok) {
        dispatch(addRating(data))
    } else {
        throw res
    }
    return data
}

export const UpdateRating = (ratingData) => async dispatch => {
    const { userId, menuItemId, review, rating, ratingId } = ratingData

    const res = await fetch(`/api/ratings/${ratingId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            menu_item_id: menuItemId,
            review: review,
            rating: rating
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(changeRating(data))
        dispatch(loadOneRating(ratingId))
    } else {
        throw res
    }
    return data
}

export const deleteRating = (ratingId) => async dispatch => {
    const res = await fetch(`/api/ratings/${ratingId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeRating(ratingId));
    } else {
        throw res
    }
}

//Reducers
const initialState = {}

const ratingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_RATING:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_RATINGS:
            newState = { ...state };
            action.payload.forEach((rating) => {
                newState[action.rating.id] = rating;
            });
            return newState

        case CREATE_RATING:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState

        case UPDATE_RATING:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case DELETE_RATING:
            newState = { ...state }
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}

export default ratingsReducer;
