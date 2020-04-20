import React, { Component } from 'react';
import {Form, Input, Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';

  
const menu = (
<Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)

class AddRedirectionList extends Component{
    render(){
        return(
            <div>
                <h1>Add Redirection List page</h1>
                <Form
                name="basic"
                initialValues={{ remember: true }}
                
                >
                    <Form.Item 
                        label = "List Name"
                        name = "listname"
                        rules = {[{ required: true, message: 'Please input your List Name' }]}
                    >
                        <Input/>
                    </Form.Item>
                
                <Form.Item
                    label="List Type"
                    name="listtype"
                    rules = {[{required:true}]}
                    >
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                    </a>
                </Dropdown>
                </Form.Item>
                </Form>
            </div>
        );
    }
}

export default AddRedirectionList;