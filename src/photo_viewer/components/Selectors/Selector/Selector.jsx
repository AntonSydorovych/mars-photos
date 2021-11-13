import React from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import { Select} from 'antd';

const { Option } = Select;

export const Selector = ({options, width, changeValue, defaultValue}) => {
    const handleChange = (value) => {
        changeValue(value);
    };
    const selectorOptions = options.map(item => <Option key={item.value}>{item.name}</Option> )
    return (
        <div className= "selector">
            <Select
                size={"large"}
                    defaultValue={defaultValue}
                    onChange={(value) => handleChange(value)}
                    style={{ width: width, backgroundColor: 'red'}}
            >
                {selectorOptions}
            </Select>
        </div>
    );
};

