import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddImage } from '../../../store/actions/galleryActions';
import './AddImage.css';


const AddImage = () => {

    const dispatch = useDispatch();

    const [inputData, setInputData] = useState({
        image: '',
        imageTitle: '',
    });

    const changeTitle = event => {
        setInputData({ ...inputData, imageTitle: event.target.value, });
    };

    const changeImage = event => {
        setInputData({ ...inputData, image: event.target.files[0] });
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', inputData.image);
        formData.append('imageTitle', inputData.imageTitle);
        dispatch(fetchAddImage(formData));
    };


    return (
        <div>
            <form onSubmit={submitFormHandler} className='add-image-form-box'>
                <h4>Show your new image to the world!</h4>
                <input onChange={changeTitle} value={inputData.imageTitle} placeholder='Title'/>
                <input onChange={changeImage} type='file'/>

                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddImage;