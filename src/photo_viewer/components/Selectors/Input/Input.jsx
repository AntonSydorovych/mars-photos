import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {InputNumber} from 'antd';



export const Input = ({changeValue, value}) => {
    const onChange = (value) => {
        changeValue(value);
    };
    return (
        <InputNumber
            style={{background: 'black', color: 'white'}}
            min={1}
            max={2504}
            defaultValue={value}
            onChange={onChange}
        />
    )
};
