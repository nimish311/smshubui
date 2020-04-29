import React, { Component } from 'react';
import { Button, Typography, Select} from 'antd';

const {Title} = Typography;
const {Option} = Select;

class PathDetails extends Component{
    addList(){
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-pathDetails');
    }
    // addToDemoTable(){

    // }
    state={
        list:[]
    }
    
    async componentDidMount(){
        let initialPlanets = [];
            fetch('http://localhost:8103/rllist')
                .then(response => {
                    return response.json();
                }).then(data => {
                initialPlanets = data.result.map((listname) => {
                    return listname;
                });
                console.log(initialPlanets);
                this.setState({
                    list: initialPlanets,
                });
            });
    }
    render(){
        return(
            <div>
                <br/>
                <Title level={4}>Path Details page</Title>
                <label>Dynamic Dropdown</label>
                <Select placeholder="dynamic">
                    {this.state.list.map(( nimish) => <Option value={nimish.listname}> {nimish.listname} </Option> )}
                </Select>
                <br/><br/>
                <Button type="primary" onClick={() => this.addList()}> Add user</Button>
                {/* <Button type="primary" onClick={() => this.addToDemoTable()}>Add DD value</Button> */}
            </div>
        )
    }
    
}

export default PathDetails;