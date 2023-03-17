export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "ADD_FAVORITE";

export const addFavourite = (character) => {
    return{type: ADD_FAVORITE, payload: character};
};

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id };
};