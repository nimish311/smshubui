import React, { Component } from 'react';
import { Button } from 'antd';

class PathDetails extends Component{
    addList(){
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-pathDetails');
    }
    render(){
        return(
            <div>
                <h1>This is Path detaildds page</h1>
                <Button type="primary" onClick={() => this.addList()}>Add list</Button>
            </div>
        )
    }
}

export default PathDetails;