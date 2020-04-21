import React, { Component } from 'react';
import ApiService from "../../service/ApiService";
import { Table, Button } from 'antd';
import {  EditFilled , DeleteFilled , PlusCircleFilled, AlignCenterOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import '../../styling/Styletable.css';

// const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//     },
//   ];

const { Search } = Input;

class OperatorCluster extends Component{

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/add-operatorCluster');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-operatorCluster');
    }
    
    render(){
          
        return(
            <div>
            <form>
                <h2>Cluster List</h2>
                
                <Button  icon={<PlusCircleFilled/>} onClick={() => this.addUser()}>add
                </Button><br /><br/>
                <div>
                    <label>Search:</label>
                    <Search placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }} enterButton />
                </div>
                <label><input type="radio" id="cluster_id" name="id" value="clusterid" />
                        Cluster Id</label>
                        <label><input type="radio" id="cluster_name" name="clustername" value="clustername" />
                        Cluster Name</label><br /><br />
                <table className="table table-striped" id="students" >
                    <thead>
                        <tr>
                            {/* <th className="hidden">Cluster Id</th> */}
                            <th>Cluster Name</th>
                            <th>Cluster Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td>{user.clustername}</td>
                                        <td>{user.clustertype}</td>
                                        <td><EditFilled onClick={() => this.editUser(user.id)}/></td>
                                        <td><DeleteFilled onClick={() => this.deleteUser(user.id)}/></td>
                                    </tr>
                            )
                        }
                    </tbody>
                    </table>
            </form>
            {/* <Table columns={columns} dataSource={user} /> */}
          </div>
        );
    }
}

export default OperatorCluster;