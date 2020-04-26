import React, { Component } from 'react';
import { Button, Typography, Select} from 'antd';

const {Title} = Typography;


class PathDetails extends Component{
    // addList(){
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-pathDetails');
    // }
    state={
        list:[]
    }
    
    async componentDidMount(){
        // const url= "http://localhost:8102/rllist";
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({ person: data.results[0], loading:false  });

        // const url = "http://localhost:8102/rllist";
        // const response = fetch(url);
        // const data = await response.json();
        // this.setState({})

        let initialPlanets = [];
            fetch('http://localhost:8102/rllist')
                .then(response => {
                    return response.json();
                }).then(data => {
                initialPlanets = data.result.map((listname) => {
                    return listname
                });
                console.log("niihs");
                this.setState({
                    list: initialPlanets,
                });
                // console.log(list);
            });
            // let optionItems = 
    }
    render(){
        return(
            <div>
                <div><h1>pathDetails</h1></div>
                <select>
                    {this.state.list.map(( nimish) => <option> {nimish.id} </option> )}
                </select>
            </div>


            

        )
    }
    
}

export default PathDetails;