import React from 'react';
import axios from "axios";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import "./Packages.scss";


class LikeButton extends React.Component{
    state = {
        isChecked: false,
        notice: ' ',
    };

    onClick = () => {
        this.state.isChecked ?
        this.setState({
            isChecked: false,
        })
        :
        this.setState({
            isChecked: true
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="heart">
                    {this.state.isChecked ?  
                    <HeartFilled className="button red" onClick={this.onClick} /* disabled */ style={{ fontSize: '2.5rem', color: '#ff0000' }}/> :
                    <HeartOutlined className="button" onClick={this.onClick} style={{ fontSize: '2.5rem', color: '#ff0000' }} />}
                </div>
            </React.Fragment> 
        )
    }
}
export default LikeButton;