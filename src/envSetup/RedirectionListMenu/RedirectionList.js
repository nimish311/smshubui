import React, { Component } from 'react';
import { Button } from 'antd';


class RedirectionList extends Component{

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-redirectionList');
    }
    
    render(){
        return(
            <div>
                <h1>This is redirection List page</h1>
                <Button type="primary"   onClick={() => this.addUser()}> Add user</Button>
            </div>
        )
    }
}

export default RedirectionList;