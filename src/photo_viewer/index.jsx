import React from 'react';
import Header from "./components/Header/Header";
import AllSelectors from "./components/Selectors/AllSelectors";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import {useSelector} from 'react-redux';
import style from './index.module.scss';

const PhotoViewer = () => {
    const state = useSelector(state => state);

    let mappedPhotos = <span className={style.title}>Choose rover, camera and solar day</span>;

    if (state.allPhotos.photos !== undefined && state.wasPhotosSearched === true) {
        mappedPhotos = state.allPhotos.photos.map(item => <PhotoCard key={item.id} imgSrc={item.img_src}/>)
    }


    return (
        <div className={style.photoViewer}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.selectors}>
                <AllSelectors/>
            </div>
            <div className={style.photosArea}>
                {mappedPhotos.length === 0 ? <span className={style.title}>No Results Found</span> :
                    mappedPhotos}
            </div>
            <div className={style.button}>
            </div>
        </div>
    );
};

export default PhotoViewer;
