import React, { Component } from 'react';
import {Typography, Form, Input, Radio, Select,Checkbox, Divider} from "antd";

const {Title} = Typography;
const {Option} = Select;

class AddPathDetails extends Component{

    constructor(){
        super()
        this.state={
            interfaceType:'',

            showss7:false,
            showSMPP:false,
            showSMPPES:false
        }
        this.handleDropdownChangeInterfaceType = this.handleDropdownChangeInterfaceType.bind(this);
        // this.handleDropdownChangeOutgoingAaccounts = this.handleDropdownChangeOutgoingAaccounts.bind(this);
        // this.handleDropdownChangeSupplierList = this.handleDropdownChangeSupplierList.bind(this);
    }

    handleDropdownChangeInterfaceType= (e) => {
        this.setState({interfaceType: e});
        if(e === "ss7"){
            this.setState({ showss7:true, showSMPP:false, showSMPPES:false }) 
        }
        else if(e === "smpp"){
            this.setState({ showss7:false, showSMPP:true, showSMPPES:false})
        }
        else if(e === "smpp_es"){
            this.state({ showss7:false, showSMPP:false, showSMPPES:true})
        }
    }
    render(){
        return(
            <div style={{float:"left"}}>
                <br/>
                <Title level={4}>This is add path details</Title>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label = "Path Name" name = "pathname"
                        rules = {[{ 
                            required: true, 
    						message: 'Please input your Path Name!',
						},]}
                  	  >
                        <Input 
                            type="text" 
                            placeholder = "Enter path name..."
                            name="pathname"
                        />
                  	</Form.Item>

                    <Form.Item 
                        label="OC Complaince Flag" name="occomplainceflag"  valuePropName="checked" 
                        rules={[{required: true}]}
                        >
                        <Checkbox></Checkbox>
                    </Form.Item>

                    <Form.Item
                        label="Interface Type" name="interfaceType" rules={[{required:true}]}
                    >
                        <Select placeholder="Interface Types: " onChange={this.handleDropdownChangeInterfaceType}>
                            <Option value="ss7">SS7</Option>
                            <Option value="smpp">SMPP</Option>
                            <Option value="smpp_es">SMPP ES</Option>
                        </Select>
                    </Form.Item>

                    {this.state.showSMPP && 
                        <Form.Item label="Supplier List" name="supplierList" rules={[{required:true}]}
                            >
                                <Select placeholder="select" >
                                    <Option >HTTP Supplier</Option>
                                </Select>
                            </Form.Item>
                           
                    }
                    {this.state.showSMPP && 
                        <Form.Item label="Outgoing Accounts" name="outgoingAccounts" rules={[{required:true}]}
                        >
                            <Select placeholder="select" >
                                <Option></Option>
                            </Select>
                        </Form.Item> 
                    }
                    {this.state.showss7 && <Divider/>}
                    {this.state.showss7 &&
                        
                        <Form.Item
                        name="supplierList" label="Supplier List" rules={[{required:true}]}>
                            <Select placeholder="supplier list">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }

                    {this.state.showss7 && 
                        <Form.Item
                            label="Called party address" name="calledPartyAddress" rules={[{required:true}]}
                        >
                             <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>LRN Prefix</Radio>
                                <Radio value={2}>Hub Prefix</Radio>
                                <Radio value={3}>Hub Replace</Radio>
                                <Radio value={4}>MSISDN</Radio>
                            </Radio.Group>
                        </Form.Item>
                    }

                    {this.state.showss7 && 
                        <Form.Item
                            label="MAP RP OA " name="maprpoa" rules={[{required:true}]}
                        >
                             <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>Dummy GT</Radio>
                                <Radio value={2}>A2P GT</Radio>
                                <Radio value={3}>P2P GT</Radio>
                            </Radio.Group>
                        </Form.Item>
                    }
                    {this.state.showss7 &&
                        <Form.Item
                        name="p2p_gt_values" label="P2P GT Values" rules={[{required:true}]}>
                            <Select placeholder="p2p gt values">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }
                    {this.state.showss7 &&
                        <Form.Item
                        name="a2p_gt_values" label="A2P GT Values" rules={[{required:true}]}>
                            <Select placeholder="a2p gt values">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }
                    {this.state.showss7 &&
                        <Form.Item
                        name="dummy_gt_values" label="Dummy GT Values" rules={[{required:true}]}>
                            <Select placeholder="dummy gt values">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }
                    {this.state.showss7 &&
                        <Form.Item
                        label = "Called TT" name = "called_tt"
                        rules = {[{ 
                            required: true, 
                            // message: 'Please input your Path Name!',
                        },]}
                        >
                        <Input 
                            type="text" 
                            placeholder = "Enter Called TT..."
                            name="called_tt"
                        />
                        </Form.Item>
                    }

                    {this.state.showss7 &&
                        <Form.Item
                        name="called_np" label="Called NP" rules={[{required:true}]}>
                            <Select placeholder="Select a called NP value ">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }
                    {this.state.showss7 &&
                        <Form.Item
                        label = "Called SSN" name = "called_ssn"
                        rules = {[{ 
                            required: true, 
                            // message: 'Please input your Path Name!',
                        },]}
                        >
                        <Input 
                            type="text" 
                            placeholder = "Enter Called SSN..."
                            name="called_ssn"
                        />
                        </Form.Item>
                    }

                    {this.state.showss7 &&
                        <Form.Item
                        name="pointcode_list" label="Point Code List" rules={[{required:true}]}>
                            <Select placeholder="Select a point code list ">
                                <Option >To be added</Option>
                            </Select>
                        </Form.Item>
                    }
                    {/* ***************************** */}
                    {/* {this.state.showss7 && 
                        <Form.Item
                            label="Roaming Called Party Address" name="roamingCalledPartyAddress" rules={[{required:true}]}
                        >
                             <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>Hub Prefix</Radio>
                                <Radio value={2}>Hub Replace</Radio>
                                <Radio value={3}>VLR</Radio>
                            </Radio.Group>
                        </Form.Item>
                    } */}
                </Form>
            </div>
        )
    }
}

export default AddPathDetails;