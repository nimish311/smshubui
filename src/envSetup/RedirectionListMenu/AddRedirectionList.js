import React, { Component } from 'react';
import {Form, Input, Button, Select, Typography, InputNumber} from 'antd';
import RedirectionListService from "../../service/RedirectionListService";
import history from "../../History"
const {Option} = Select;
const OPTIONS_ESME = ['Red_Account', 'Red_Account1', 'Red_AccountHTTP', 'Red_acc_temp'];
const OPTIONS_POINTCODE = ['DCP-2000', 'Chethan Test-1788'];
const {Title} = Typography;
class AddRedirectionList extends Component{

	constructor(props){
		super(props)
			this.state = {
								id:'',
                listname:'',
                listtype:'',
								loadDistributionType:'',
                selectedItems:[],
								
								showPercentage:false,
								esmeAccount:false,
								pointcodeAccount:false,

								message:null
								
			}
        this.saveRedirectionList = this.saveRedirectionList.bind(this);
        this.handleDropdownChangeLoad = this.handleDropdownChangeLoad.bind(this);
        this.handleDropdownChangeType = this.handleDropdownChangeType.bind(this);
				this.loadRedirectionList = this.loadRedirectionList.bind(this);
	}

    // selectedItems => {
    //     this.setState({ selectedItems });
    //   };
		componentDidMount(){
			this.loadRedirectionList();
		}
		loadRedirectionList() {
			RedirectionListService.fetchUserById(window.localStorage.getItem("id"))
		 
					.then((res) => {
							let rllist = res.data.result;
							this.setState({
								id: rllist.id,
								listname: rllist.listname,
								listtype: rllist.listtype,
								// loadRedirectionList: rllist.loadDistributionType,
							})
					});
					// alert("rllist name--"+window.localStorage.getItem("id"));
			}
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

		
    handleDropdownChangeType = (e) => {
			this.setState({listtype: e});
			if(e === "esme"){
				this.setState({ esmeAccount:true, pointcodeAccount:true})
			}
			else{
				this.setState({ pointcodeAccount:true, esmeAccount:false})
			}
			// console.log({e});
		}
		
		handleDropdownChangeLoad = (e) => {
			this.setState({ loadDistributionType: e});
			if(e === "percentage"){
				this.setState({ showPercentage:true})
			}
			else{
				this.setState({showPercentage:false})
			}
		}

    saveRedirectionList =(e) => {
        e.preventDefault();
        let user = {id:this.state.id, listname: this.state.listname, listtype: this.state.listtype, loadDistributionType: this.state.loadDistributionType};
        RedirectionListService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                history.push('/environmentSetup-redirectionList');
            });
    }

    render(){
        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS_ESME.filter(o => !selectedItems.includes(o));

        return(
            <div>
                <br/>
                <Title level={4}>This is add redirection list page</Title>
                <br/>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item 
                        label = "List Name"
                        name = "listname"
												rules = {[{ 
                            required: true, 
														message: 'Please input your List Name!',
												},]}
                  	  >
                        <Input 
                            type="text" 
                            placeholder = "Enter list name..."
                            name="listname"
                            value={this.state.listname} 
                            onChange={this.onChange} 
                        />
                  	</Form.Item>
                
                    <Form.Item
                        label="List Type"
                        name="listtype"
                        rules = {[{required:true}]}
                        
                        >
                        <Select placeholder="Click to see List Types" onChange={this.handleDropdownChangeType}>
                            <Option value="esme">ESME</Option>
                            <Option value="point_code">Point Code</Option>
                        </Select>

                    </Form.Item>

                    <Form.Item
                        label="Load Distribution Type"
                        name="loadDistributionType"
                        rules = {[{required:true}]}
                        >
                        <Select placeholder="Click to see Load Distribution Types" onChange={this.handleDropdownChangeLoad}>
                            <Option value="round_robin">Round Robin</Option>
                            <Option value="priority">Priority</Option>
                            <Option value="percentage">Percentage</Option>
                        </Select>
                    </Form.Item>

										{this.state.showPercentage &&
											<Form.Item
											label="Sample Value"
											name="sampleValue"
											rules = {[{required:true}]}
											>
												<InputNumber></InputNumber>
											</Form.Item>
										}

										{this.state.esmeAccount &&
                    <Form.Item
                        label="Select Accounts"
                        name="selectAccounts"
                        rules = {[{required: true}]}
                        >
                        <Select
                            mode="multiple"
                            placeholder="Multiple value can be selected"
                            value={selectedItems}
                            onChange={this.handleChange}
                            style={{ width: '100%' }}
                        >
                            {filteredOptions.map(item => (
                            <Select.Option key={item} value={item}>
                                {item}
                            </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
										}

                    <Form.Item > 
											<Button type="primary" onClick={this.saveRedirectionList} disabled={!this.state.listname || !this.state.listtype || !this.state.loadDistributionType} >Submit</Button>
											<Button type="primary" onClick={() => history.push('/environmentSetup-redirectionList')}>Cancel</Button>
            		    </Form.Item>

								</Form>
            </div>
        );
    }
}

export default AddRedirectionList;