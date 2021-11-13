import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

class LoadButton extends React.Component {
    clickAction() {
        this.props.clickFunction()
  //  alert('yo bitch');
    }

    render() {
        return (
            <>
                <Button
                    type="primary"
                    shape="round"
                    icon={<SearchOutlined/>}
                    size='medium'
                    onClick={() => this.clickAction()}>
                    Search Photos
                </Button>
            </>
        );
    }
}

export default LoadButton;
