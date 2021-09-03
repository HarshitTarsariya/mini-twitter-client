import React from 'react';
import axios from "axios";

import { useState } from "react";
import {  Header,Input,Container, Button, Message, Form } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import Header1 from '../components/Header';

const baseUrl='http://localhost:3000/';
const Register=(props,context) => {
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
            if(value1.length>12){
                setUsernameerror('Username should be between 7 to 12');
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
            if(value1.length>12){
                setUsernameerror('Password should be between 7 to 12');
                return;
            }
            setPassworderror('');
            setPassword(value1);
        }
    };

    const onSubmit=()=>{
        axios.post(baseUrl+'register',{
            username:username,
            password:password
        }).then(({data})=>{
            setUsernameerror('');
            setPassworderror('');
            const {auth,path,token,refreshToken}=data;
            if(!auth){
            }else{
                history.push('/login');
            }
        });
    };
    const onLogin=()=>{
        history.push('/login');
    };

    return ([
        <Header1/>,
        <Container text>
            <br/>
            <Form>
                <Form.Field>
                    <Header as="h2">Register</Header>
                </Form.Field>
                <Form.Field error={!!usernameError}>
                    <Input  name="username" onChange={onChange} value={username} placeholder="Username" fluid />
                </Form.Field>
                <Form.Field error={!!passwordError}>
                    <Input  name="password" type="password" onChange={onChange} value={password} placeholder="Password" fluid />
                </Form.Field>
                <Form.Field>
                    <Button onClick={onSubmit}>Register</Button>
                    <Button onClick={onLogin}>Login</Button>
                </Form.Field>
            </Form>
            {usernameError || passwordError ?(
                    <Message
                        error
                        list={errorList}
                    />
                ) : null}

        </Container>
    ]);
}

export default Register;