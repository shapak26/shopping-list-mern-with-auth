import axios from 'axios'
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from './types';


export const getItems = () => dispatch => {
    axios.get('/api/items')
        .then(res => dispatch(
            {
                type: GET_ITEMS,
                payload: res.data
            }
        ))

}



export const deleteItem = (id) => dispatch => {
    axios.delete('/api/items/' + id)
        .then(res => dispatch(
            {
                type: DELETE_ITEMS,
                payload: id
            }
        ))

}

export const addItem = (name) => dispatch => {
    axios.post('/api/items', name)
        .then(res => dispatch(
            {
                type: ADD_ITEMS,
                payload: res.data
            }
        ))

}

