// saves get all, create, delete
const READ_SINGLE_SAVE = 'save/READ_SINGLE_SAVE'
const READ_ALL_SAVES = 'save/READ_ALL_SAVES'
const CREATE_SAVE = 'save/CREATE_SAVE'
const DELETE_SAVE = 'save/DELETE_SAVE'

//Functions
const loadAllSaves = (saves) => ({
    type: READ_ALL_SAVES,
    payload: saves
});

const addSave = (save) => ({
    type: CREATE_SAVE,
    payload: save
});

const removeSave = (save_id) => ({
    type: DELETE_SAVE,
    payload: save_id
});

//Thunks
export const getAllSaves = () => async dispatch => {
    const res = await fetch(`api/saves`);
    const data = await res.json();

    if (res.ok) {
        dispatch(loadAllSaves(data))
    } else {
        throw res
    }
}

export const createSave = (saveData) => async dispatch => {
    const { userId, menuItemId } = saveData

    const res = await fetch(`/api/saves`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: userId,
            menu_item_id: menuItemId,
        }),
    });
    const data = await res.json();

    if (res.ok) {
        dispatch(addSave(data))
    } else {
        throw res
    }
    return data
}

export const deleteSave = (menuItemId) => async dispatch => {
    const res = await fetch(`/api/saves/${menuItemId}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(removeSave(data));
    } else {
        throw res
    }
}

//Reducers
const initialState = {}

const savesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case READ_SINGLE_SAVE:
            newState = {};
            action.payload.forEach((save) => {
                newState[save.id] = save;
            });
            return newState

        case READ_ALL_SAVES:
            newState = {};
            action.payload.forEach((save) => {
                newState[save.id] = save;
            });
            return newState

        case CREATE_SAVE:
            newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload;
            return newState

        case DELETE_SAVE:
            newState = { ...state }
            delete newState[payload.id]
            return newState
        default:
            return state;
    }
}

export default savesReducer;
