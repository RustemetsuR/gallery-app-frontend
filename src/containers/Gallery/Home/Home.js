import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GalleryListItem from '../../../components/GalleryListItem/GalleryListItem';
import { fetchGetGallery } from '../../../store/actions/galleryActions';
import './Home.css';

const Home = () => {
    const images = useSelector(state => state.gallery.gallery);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGetGallery());
    }, [dispatch]);

    return (
        <div>
            <div className='gallery-main-page-box'>
                {images.map(i => {
                    return <GalleryListItem
                        key={i._id}
                        title={i.imageTitle}
                        authorID={i.userID._id}
                        image={i.image}
                        username={i.userID.username} 
                        imageID={i._id}/>
                })}
            </div>

        </div>
    );
};

export default Home;