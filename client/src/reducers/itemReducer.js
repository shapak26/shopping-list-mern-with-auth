import { v1 as uuidv1 } from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';

const initialState = {
    item: [

    ]
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                item: action.payload
            }

        case DELETE_ITEMS:
            return {
                ...state,
                item: state.item.filter(item => item._id !== action.payload)
            }

        case ADD_ITEMS:
            return {
                ...state,
                item: [...state.item]
            }

        default:
            return state
    }
}