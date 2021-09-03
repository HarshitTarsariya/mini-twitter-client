import React from 'react';
import axios from "axios";

import { useState } from "react";
import { Header, Input,Container, Button, Message, Form } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const baseUrl='http://localhost:3000/';
const Login=(props,context) => {
    let history = useHistory();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const [usernameError,setUsernameerror]=useState('');
    const [passwordError,setPassworderror]=useState('');
    
    const errorList=[];

    if(usernameError){
        errorList.push(usernameError);
    }
    if(passwordError){
        errorList.push(passwordError);
    }
    const onChange=e=>{
        const {name,value}=e.target;
        const value1=value.trim();

        if(name==="username"){
            if(value1.length===0){
                setUsername('');
                setUsernameerror('Username cannot be empty');
                return;
            }
            setUsernameerror('');
            setUsername(value1);
        }
        else{ 
            if(value1.length===0){
                setPassword('');
                setPassworderror('Password cannot be empty');
                return;
            }
            setPassworderror('');
            setPassword(value1);
        }
    };

    const onSubmit=()=>{
        axios.post(baseUrl+'login',{
            username:username,
            password:password
        }).then(({data})=>{
            setUsernameerror('');
            setPassworderror('');
            const {auth,path,token,refreshToken}=data;
            if(!auth){
                if(path==="username"){
                    setUsernameerror('Invalid Username Provided');
                    return;
                }
                if(path==="password"){
                    setPassworderror('Invalid Password Provided');
                    return;
                }
            }else{
                localStorage.setItem('token',token);
                localStorage.setItem('refreshToken',refreshToken);
                history.push('/home');
            }
        });
    };
    const onRegister=()=>{
        history.push('/register');
    };

    return (
        <Container text>
            <br/>
            <Form>
                <Form.Field>
                    <Header as="h2">Login</Header>
                </Form.Field>
                <Form.Field error={!!usernameError}>
                    <Input  name="username" onChange={onChange} value={username} placeholder="Username" fluid />
                </Form.Field>
                <Form.Field error={!!passwordError}>
                    <Input  name="password" type="password" onChange={onChange} value={password} placeholder="Password" fluid />
                </Form.Field>
                <Form.Field>
                    <Button onClick={onSubmit}>Login</Button>
                    <Button onClick={onRegister}>Register</Button>
                </Form.Field>
            </Form>
            {usernameError || passwordError ?(
                    <Message
                        error
                        list={errorList}
                    />
                ) : null}

        </Container>
    );
}

export default Login;