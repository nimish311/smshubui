import React, { Component } from 'react';
import { Button, Typography } from 'antd';

const {Title} = Typography;

class DealManagement extends Component{

    addDeal(){
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-dealManagement');
    }

    render(){
        return(
            <div>
                <br/>
                <Title level={4}>Deal Management</Title>
                <Button type="primary" onClick={() => this.addDeal()}> Add deal</Button>
            </div>
        )
    }
}

export default DealManagement;