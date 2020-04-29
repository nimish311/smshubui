import React,{ Component } from 'react';
import { Form, Input, Button, Checkbox, Typography, Card} from 'antd';
import history from "../History";
import Icon, { UserOutlined, LockOutlined } from '@ant-design/icons';

const {Title} = Typography;



class Login extends Component{

    constructor() {
            super();
            this.state = {
              username: '',
              password: '',
              redirect:false
            };
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    getPassword(e){
        this.setState({password: e.target.value});
    }
    getUsername(e){
        this.setState({username : e.target.value});
    }
    handleSubmit (){
        console.log("Username is "+ this.state.username);
        console.log("Password is "+this.state.password);

        if(this.state.password === "admin" && this.state.username === "admin"){
            history.push("/welcome");
            
        }
        else{
            console.log("Failed");
            alert("Invalid credentials");
        }
    }

    render(){
        return (
            <div style={{height: '100vh', padding: 5}}>
                <center>

                <Card style={{width: '50%', marginTop:"60px"}}>
            <Title level={2}> Login to SMSHub</Title>
                <Form 
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    >
                    <Form.Item
                        label="Username"  name="username"
                        rules={[{
                            required: true,
                            message: 'Please input your username!',
                        }]}
                    >
                        <Input prefix={<UserOutlined />} onChange={this.getUsername} />
                    </Form.Item>

                    <Form.Item
                        label="Password" name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your password!',
                        }]}
                    >
                        <Input.Password  prefix={<LockOutlined/>} onChange={this.getPassword} />
                    </Form.Item>

                    {/* <Form.Item 
                        // {...tailLayout} 
                        name="remember" 
                        valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" 
                            disabled={!this.state.username || !this.state.password }
                            onClick={ () => this.handleSubmit()}>
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
                    </Card>
                    
                    <p>
                        © Copyright 2020 Comviva Technologies Ltd.
                        <br/>Visit us at www.comviva.com

                    </p>
                    </center>
            </div>

            
        );
    }
}
  
export default Login; 
