import React from 'react';
import style from './photocard.module.scss';

const PhotoCard = ({imgSrc}) => {
    return (
        <div className={style.card}>
            <img className={style.img} src={imgSrc} alt=''/>
        </div>
    );
};

export default PhotoCard;
