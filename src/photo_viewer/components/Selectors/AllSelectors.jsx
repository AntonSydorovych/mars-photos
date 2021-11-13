import React, {useEffect, useState} from 'react';
import {Selector} from "./Selector/Selector";
import {Input} from "./Input/Input";
import {selectorOptions} from './selectorOptions';
import {downloadPhotos} from '../../api/api';
import style from './allSelectors.module.scss'
import {useDispatch} from 'react-redux';
import { Button } from 'antd';

const AllSelectors = () => {

    const [rover, setRover] = useState('curiosity');
    const [camera, setCamera] = useState('fhaz');
    const [solarDay, setSolarDay] = useState(2500);
    const [roverCameras, setRoverCameras] = useState(selectorOptions.cameras.curiosity);
    const dispatch = useDispatch();

    useEffect(() => {
        if (rover === 'curiosity') {
            setRoverCameras(selectorOptions.cameras.curiosity);
            setCamera('fhaz');
            console.log('opportyunity or Spirit')
        } else {
            setRoverCameras(selectorOptions.cameras.opportyunityAndSpirit);
        }
    }, [rover]);

    const changeRover = (value) => {
        setRover(value);
        console.log('rover: ', value);
    };

    const changeCamera = (value) => {
        setCamera(value);
        console.log('camera: ', value);
    };

    const changeSolarDay = (value) => {
        setSolarDay(value)
    };

    const loadPhotos = () => {
        dispatch(downloadPhotos(rover, camera, solarDay))
    };

    return (
        <div className={style.mainWrapper}>
            <div className={style.selectorsWrapper}>
                <div className={style.selector}>
                   <span className={style.selectorTitle}>
                       ROVER TYPE:
                   </span>
                    <Selector
                        options={selectorOptions.roverTypes}
                        changeValue={changeRover}
                        defaultValue={rover}
                        width={200}/>
                </div>
                <div className={style.selector}>
                    <span className={style.selectorTitle}>
                        CAMERA:
                    </span>
                    <Selector
                        options={roverCameras}
                        changeValue={changeCamera}
                        defaultValue={camera}
                        width={280}/>
                </div>
                <div className={style.selector}>
                    <span className={style.selectorTitle}>
                        SOLAR DAY:
                    </span>
                    <Input changeValue={changeSolarDay}/>
                </div>
                <div className={style.selector}>
                  <Button className={style.findButton} onClick={loadPhotos}>Find photos</Button>
                </div>
            </div>
        </div>


    );
};

export default AllSelectors;
