import React, { Component } from 'react';
import ApiService from "../../service/ApiService";
import { Table, Button } from 'antd';
import {EditFilled , DeleteFilled , PlusCircleFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Input } from 'antd';
// import '../../styling/Styletable.css';


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
    
    state = {
                sortedInfo: null,
            };
            
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            sortedInfo: sorter,
        });
    };
              
    clearAll = () => {
        this.setState({
            sortedInfo: null,
        });
    };
            
    setAgeSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'id',
            },
        });
    };
    
    render(){
        let { sortedInfo} = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [
            {
                title: 'Cluster Id',
                dataIndex: 'id',
                key: 'id',
                sorter: (a, b) => a.id - b.id,
                sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
                ellipsis: true,
            },
            {
            title: 'Cluster Name',
            dataIndex: 'clustername',
            key: 'clustername',
            sorter: (a, b) => a.clustername.localeCompare(b.clustername),
                sortOrder: sortedInfo.columnKey === 'clustername' && sortedInfo.order,
                ellipsis: true,
            },
            {
            title: 'Cluster Type',
            dataIndex: 'clustertype',
            key: 'clustertype',
            
            },
            {
            title: 'Edit',
            dataIndex: 'edit',
            key: 'edit',
            render: () => <EditFilled/>,
            },
            {
                title: 'Delete',
                dataIndex: 'delete',
                key: 'delete',
                render: (text, record) => <DeleteFilled 
                onClick={() => {this.deleteUser(record.id);}}/>,
            }
        ];
        return(
            <div >
                <form>
                    <h2>Cluster List</h2>
                    
                    <Button type="primary" onClick={() => this.addUser()}>Add Cluster</Button><br /><br/>
                    <div>
                        <label>Search:</label>
                        <Search placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }} enterButton />
                    </div>
                    <label>
                        <input type="radio" id="cluster_id" name="cluster_id" value="clusterid" />
                        Cluster Id
                    </label>
                    <label>
                        <input type="radio" id="cluster_name" name="clustername" value="clustername" />
                        Cluster Name
                    </label><br/><br/>
                </form>
                <Table
                    columns={columns} 
                    dataSource={this.state.users} 
                    bordered
                    onChange={this.handleChange} 
                />
          </div>
        );
    }
}

export default OperatorCluster;
