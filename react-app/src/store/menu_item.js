// menu_items get one, get all, create, edit, delete
const READ_SINGLE_MENU_ITEM = 'menu_item/READ_SINGLE_MENU_ITEM'
const READ_ALL_MENU_ITEMS = 'menu_item/READ_ALL_MENU_ITEMS'
const CREATE_MENU_ITEM = 'menu_item/CREATE_MENU_ITEM'
const UPDATE_MENU_ITEM = 'menu_item/UPDATE_MENU_ITEM'
const DELETE_MENU_ITEM = 'menu_item/DELETE_MENU_ITEM'


//Functions
const loadOneItem = (menu_item) => ({
    type: READ_SINGLE_MENU_ITEM,
    payload: menu_item
});

const loadAllItems = (menu_items) => ({
    type: READ_ALL_MENU_ITEMS,
    payload: menu_items
});

const addItem = (menu_item) => ({
    type: CREATE_MENU_ITEM,
    payload: menu_item
});

const changeItem = (menu_item_id) => ({
    type: UPDATE_MENU_ITEM,
    payload: menu_item_id
});

const removeItem = (menu_item_id) => ({
    type: DELETE_MENU_ITEM,
    payload: menu_item_id
});

//Thunks
export const getOneItem = (menuItemId) => async dispatch => {
    const res = await fetch(`/api/menu_items/${menuItemId}`)
    const data = await res.json();

    if (res.ok) {
        dispatch(loadOneItem(data))
    } else {
        throw res
    }
}

export const getAllItems = () => async dispatch => {
    const res = await fetch(`/api/menu_items`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllItems(data))
    } else {
        throw res
    }
}

export const createItem = (itemData) => async dispatch => {
    const { creatorId, restaurantId, foodName, price, description, foodPixUrl } = itemData

    const res = await fetch(`/api/menu_items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creator_id: creatorId,
            restaurant_id: restaurantId,
            food_name: foodName,
            price: price,
            description: description,
            food_pix: foodPixUrl
        }),
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(addItem(data))
    } else {
        throw res
    }
    return data
}

export const UpdateItem = (itemData) => async dispatch => {
    const { creatorId, restaurantId, foodName, price, description, foodPixUrl, menuItemId } = itemData

    const res = await fetch(`/api/menu_items/${menuItemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            creator_id: creatorId,
            restaurant_id: restaurantId,
            food_name: foodName,
            price: price,
            description: description,
            food_pix: foodPixUrl
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(changeItem(data));
        dispatch(loadOneItem(menuItemId));
    } else {
        throw res
    }
    return data
}

export const deleteItem = (menuItemId) => async dispatch => {
    const res = await fetch(`/api/menu_items/${menuItemId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeItem(menuItemId));
    } else {
        throw res
    }
}

//Reducers
const initialState = {}

const menu_itemsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_MENU_ITEM:
            newState = { ...state };
            newState.current = action.payload;
            return newState;

        case READ_ALL_MENU_ITEMS:
            newState = { ...state };
            action.payload.forEach((menu_item) => {
                newState[menu_item.id] = menu_item;
            });
            return newState

        case CREATE_MENU_ITEM:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState

        case UPDATE_MENU_ITEM:
            return {
                ...state,
                [action.payload.id]: action.payload
            }

        case DELETE_MENU_ITEM:
            newState = { ...state }
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}

export default menu_itemsReducer;
