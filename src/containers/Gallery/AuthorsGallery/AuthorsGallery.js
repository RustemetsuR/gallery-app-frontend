import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GalleryListItem from '../../../components/GalleryListItem/GalleryListItem';
import { fetchGetAuthorsGallery } from '../../../store/actions/galleryActions';
import './AuthorsGallery.css';

const AuthorsGallery = props => {
    const dispatch = useDispatch();
    const authorsGallery = useSelector(state => state.gallery.authorsGallery);
    const user = useSelector(state => state.user.user);


    useEffect(() => {
        dispatch(fetchGetAuthorsGallery(props.match.params.id));
    }, [dispatch, props.match.params.id, authorsGallery]);

    const getToAddImagePage = () =>{
        props.history.replace('/addImage');
    };

    return (
        <div>
            {authorsGallery && Object.keys(authorsGallery).length > 0 ?
                <div>
                    <div className='author-info-box'>
                        {user._id === authorsGallery.userData._id ?
                            <button onClick={getToAddImagePage} className='add-image-button'>
                                Add Image
                             </button> : null}
                        <img className='authors-avatarImage' src={authorsGallery.userData.avatarImage} alt={authorsGallery.userData.username}/>
                        <h2 className='authors-username'>{authorsGallery.userData.username}</h2>
                    </div>
                    <div className='gallery-author-page-box'>
                        {authorsGallery.galleryData.length > 0 ? authorsGallery.galleryData.map(g => {
                            return <GalleryListItem
                                key={g._id}
                                title={g.imageTitle}
                                image={g.image}
                                authorID={authorsGallery.userData._id}
                                imageID={g._id}
                            />
                        }) : <h3>No Images</h3>}
                    </div>
                </div> : null}
        </div>
    );
};

export default AuthorsGallery;