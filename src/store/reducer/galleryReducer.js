const { 
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAILURE,
    GET_AUTHORS_ALBUMS_SUCCESS,
    GET_AUTHORS_ALBUMS_FAILURE,
    ADD_IMAGE_SUCCESS,
    ADD_IMAGE_FAILURE,
    DELETE_IMAGE_SUCCESS,
    DELETE_IMAGE_FAILURE, } = require("../actionTypes");

const initialState = {
    gallery: [],
    authorsGallery: [],
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GALLERY_SUCCESS:
            return { ...state, gallery: action.value, error: null };
        case GET_GALLERY_FAILURE:
            return { ...state, error: action.error };
        case GET_AUTHORS_ALBUMS_SUCCESS:
            return { ...state, authorsGallery: action.value, error: null };
        case GET_AUTHORS_ALBUMS_FAILURE:
            return { ...state, error: action.error };
        case ADD_IMAGE_SUCCESS:
            return {...state, error: null};
        case ADD_IMAGE_FAILURE:
            return {...state, error: action.value};
        case DELETE_IMAGE_SUCCESS:
            return {...state, error: null};
        case DELETE_IMAGE_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    };
};

export default userReducer;