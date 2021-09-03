import React, { useEffect, useState } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Tweet from "./Tweet";
import styled from 'styled-components';

const FeedS=styled.div`
    margin-top:30px;
    padding-bottom:5px;
`;
const baseUrl='http://localhost:3000/';

export default function Feed(){
    const [tweets,setTweets]=useState(['']);
    const history=useHistory();

    useEffect(() => {
        axios.get(baseUrl+'tweets')
        .then(({data})=>{
            if(!data.auth && data.path == 'notoken'){
                history.push('/login');
            }
            setTweets(data.tweets);
        });
    }, [tweets])

    return (
        <FeedS>
            {
                tweets.map((t)=>{
                    let tm=(new Date(parseInt(t.time,10))).toLocaleTimeString()+' '+ (new Date(parseInt(t.time,10))).toLocaleDateString();
                    return <Tweet key={`${t._id}-tweet`} username={t.username} time={tm} tweet={t.tweet} />
                })
            }
            
        </FeedS>
    );
}