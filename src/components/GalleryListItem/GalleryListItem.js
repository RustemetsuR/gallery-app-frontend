import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { apiURL } from '../../constants';
import { fetchDeleteImage } from '../../store/actions/galleryActions';
import Modal from '../UI/Modal/Modal';
import './GalleryListItem.css';

const GalleryListItem = props => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const user = useSelector(state => state.user.user);
    let button;
    const showModal = () =>{
        setModal(true);
    };

    const hideModal = () =>{
        setModal(false);
    };

    const deleteImage = () =>{
        dispatch(fetchDeleteImage(props.imageID));
    };

    if(user._id === props.authorID){
        button = (
            <button className='delete-image-button' onClick={() => deleteImage()}>
                Delete
            </button>
        )
    }

    return (
        <div className='gallery-list-item-box'>
            <img className='gallery-list-item-image' src={apiURL + '/uploads/' + props.image} alt={props.title} onClick={showModal}/>
            <h3>{props.title}</h3>
            {props.authorID && props.username ? <NavLink to={'/gallery/' + props.authorID}>{props.username}</NavLink> : null}
            <Modal show={modal} closed={hideModal}>
                <img className='modal-image' src={apiURL + '/uploads/' + props.image} alt={props.title} />
            </Modal>
            {button}
        </div>
    );
};

export default GalleryListItem;