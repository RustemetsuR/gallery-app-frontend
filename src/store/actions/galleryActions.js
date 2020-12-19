import { push } from "connected-react-router";
import axiosApi from "../../axiosApi";

const {
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAILURE,
    GET_AUTHORS_ALBUMS_SUCCESS,
    GET_AUTHORS_ALBUMS_FAILURE,
    ADD_IMAGE_SUCCESS,
    ADD_IMAGE_FAILURE,
    DELETE_IMAGE_SUCCESS,
    DELETE_IMAGE_FAILURE } = require("../actionTypes");

const getGallerySuccess = value => {
    return { type: GET_GALLERY_SUCCESS, value };
};

const getGalleryFailure = error => {
    return { type: GET_GALLERY_FAILURE, error };
};

const getAuthorsGallerySuccess = value => {
    return { type: GET_AUTHORS_ALBUMS_SUCCESS, value };
};

const getAuthorsGalleryFailure = error => {
    return { type: GET_AUTHORS_ALBUMS_FAILURE, error };
};

const addImageSuccess = () => {
    return { type: ADD_IMAGE_SUCCESS };
};

const addImageFailure = error => {
    return { type: ADD_IMAGE_FAILURE, error };
};

const deleteImageSuccess = () => {
    return { type: DELETE_IMAGE_SUCCESS };
};

const deleteImageFailure = error => {
    return { type: DELETE_IMAGE_FAILURE, error };
};

export const fetchGetGallery = () => {
    return async dispatch => {
        try {
            const response = await axiosApi.get('/gallery');
            dispatch(getGallerySuccess(response.data));
        } catch (e) {
            dispatch(getGalleryFailure(e.response.data));
        };
    };
};

export const fetchGetAuthorsGallery = id => {
    return async dispatch => {
        try {
            const response = await axiosApi.get('/gallery/' + id);
            dispatch(getAuthorsGallerySuccess(response.data));
        } catch (e) {
            console.log(e);
            dispatch(getAuthorsGalleryFailure(e.response.data));
        };
    };
};

export const fetchAddImage = data => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token
            };
            await axiosApi.post('/gallery/', data, { headers });
            dispatch(addImageSuccess());
            dispatch(push('/gallery'));
        } catch (e) {
            dispatch(addImageFailure(e));
        };
    };
};

export const fetchDeleteImage = id => {
    return async (dispatch, getState) => {
        try {
            const headers = {
                'Authorization': getState().user.user && getState().user.user.token
            };
            await axiosApi.delete('/gallery/' + id, { headers });
            dispatch(deleteImageSuccess());

            const response = await axiosApi.get('/gallery');
            dispatch(getGallerySuccess(response.data));
        } catch (e) {
            dispatch(deleteImageFailure(e));
        };
    };
};