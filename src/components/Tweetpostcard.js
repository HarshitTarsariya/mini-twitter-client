import React, { useState } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const baseUrl='http://localhost:3000/';

export default function Tweetpostcard(){
    const [tweet,setTweet]=useState('');
    const history=useHistory();

    const textChange=(e)=>{
        const {name, value} =e.target;
        setTweet(value);
    };
    const postTweet=async()=>{
        const tweet1=tweet.trim()
        if(tweet1==='')
            return;
        await axios.post(baseUrl+'tweet',{'tweet':tweet1}).then(({data})=>{
            if(data.auth){
                setTweet('');
                history.push('/home');
            }
            else{
                if(data.path == 'notoken'){
                    history.push('/login');
                }
            }
        });
    };
    return(
        <Form>
            <textarea onChange={textChange} name="tweet" value={tweet} placeholder="What's on your mind ?" maxLength="140" rows="5"/>
            <Form.Field>
                <Button onClick={postTweet}>Tweet</Button>
            </Form.Field>
        </Form>
    );
}