import React, {useEffect, useRef, useState} from 'react';
import Header from "./components/Header/Header";
import AllSelectors from "./components/Selectors/AllSelectors";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import {useSelector} from 'react-redux';
import {Button} from 'antd';
import style from './index.module.scss';

const PhotoViewer = () => {
    const state = useSelector(state => state);
    const shownPhotosQuantity = useRef(1);
    const mapArr = useRef([]);
    const [mapArr_2, setMapArr_2] = useState([1]);
    // const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);
    const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(false);

    let newArr = [];
    let mappedPhotos = <span className={style.title}>Choose rover, camera and solar day</span>;

    function loadMore() {
        shownPhotosQuantity.current += 1;
        setMapArr_2(newArr.slice(0, shownPhotosQuantity.current));
        mappedPhotos = mapArr_2.map(item => <PhotoCard key={item.id} imgSrc={item.img_src}/>)

        // if (mapArr_2.length >= state.allPhotos.photos.length && isLoadMoreVisible === true) {
        //     setIsLoadMoreVisible(false);
        //     console.log('isLoadMoreVisible_false: ', isLoadMoreVisible)
        // }
    }

    console.log('isLoadMoreVisible: ', isLoadMoreVisible)

    if (state.allPhotos.photos !== undefined && state.wasPhotosSearched === true) {
        newArr = [...state.allPhotos.photos];
        mapArr.current = newArr.slice(0, shownPhotosQuantity.current);
        mappedPhotos = mapArr.current.map(item => <PhotoCard key={item.id} imgSrc={item.img_src}/>)

        if (mapArr_2.length >= state.allPhotos.photos.length && isLoadMoreVisible === true) {
            setIsLoadMoreVisible(false);
            console.log('isLoadMoreVisible_false: ', isLoadMoreVisible)
        }

        if (mapArr.current.length < newArr.length && isLoadMoreVisible === false) {
            setIsLoadMoreVisible(true);
            console.log('isLoadMoreVisible_true: ', isLoadMoreVisible)
        }
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

            {isLoadMoreVisible ?
                <div className={style.button}>
                    <Button className={style.button} onClick={loadMore}>
                        Load more
                    </Button>
                </div> : <></>
            }
        </div>
    );
};

export default PhotoViewer;
