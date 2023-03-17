import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavourites: [],
}

const rootReducer = (state= initialState, action) => {
    switch (action.type){
        case ADD_FAVORITE:
            return {...state, myFavourites:[...state.myFavourites, action.payload]};
        case REMOVE_FAVORITE:
            return {...state, myFavourites: state.myFavourites.filter(char => char.id !== action.payload)};
        default:
            return {...state};
    }
};

export default rootReducer;