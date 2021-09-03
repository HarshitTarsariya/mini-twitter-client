import React, { useEffect, useState } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Tweet from "./Tweet";
import styled from 'styled-components';
import User from './User';



const baseUrl='http://localhost:3000/';
export default function Allusers(){
    const history = useHistory();
    const [users,setUsers]=useState([]);

    useEffect(() => {
        axios.get(baseUrl+'users').then(({data})=>{
            if(!data.auth && data.path == 'notoken'){
                history.push('/login');
            }
            setUsers(data.users);
        })
    }, [users]);
    const follow=(id)=>{
        axios.post(baseUrl+'follow',{id:id}).then(({data})=>{
            if(!data.auth && data.path == 'notoken'){
                history.push('/login');
            }
            setUsers([]);
        })
    };
    const unfollow=(id)=>{
        axios.post(baseUrl+'unfollow',{id:id}).then(({data})=>{
            if(!data.auth && data.path == 'notoken'){
                history.push('/login');
            }
            setUsers([]);
        })
    };
    return (
        <div>{
                users.map((user) => <User key={user.user._id} follow={follow} unfollow={unfollow} user={user}/>)
            }
        </div>
            
    );
}