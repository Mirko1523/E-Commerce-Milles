import axios from 'axios'
import {
GET_CARS,
GET_CARS_BY_ID
} from "../Actions/actionstypes"


export function getcars (){
    return async function (dispatch){
        try{
        const response = await axios('http://localhost:3001/cars')
        dispatch({
            type: GET_CARS,
            payload: response.data
        })
        }catch(error){
         console.error("Error en la accion get-cars", error)
        }
    }
}

export function getcarsbyid (){
    return async function (dispatch){
        try{
        const response = await axios('http://localhost:3001/cars')
        dispatch({
            type: GET_CARS_BY_ID,
            payload: response.data
        })
        }catch(error){
         console.error("Error en la accion GET_CARS_BY_ID", error)
        }
    }
}