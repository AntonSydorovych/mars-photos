import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { InputNumber } from 'antd';

function onChange(value) {
    console.log('changed', value);
}

export const Input = () => {
    return (
        <InputNumber style={{background: 'black', color: 'white'}} min={1} max={2500} defaultValue={2000} onChange={onChange} />
    )
}
