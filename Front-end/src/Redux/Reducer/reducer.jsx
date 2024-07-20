import {
GET_CARS,
GET_CARS_BY_ID
} from '../Actions/actionstypes'

const initialState = {
    cars: [],
    carDetail: []
}

const carsReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_CARS:
            return{
                ...state,
                cars: action.payload,
            }
        case GET_CARS_BY_ID:
            return{
                ...state,
                carDetail: action.payload
            };
            default:
                return state;
    }

}

export default carsReducer;