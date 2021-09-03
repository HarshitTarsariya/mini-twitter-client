import React from 'react';
import styled from 'styled-components';
import decode from 'jwt-decode';
import Usercard from './Usercard';
import Tweetpostcard from './Tweetpostcard';
import Feed from './Feed';

const Container=styled.div`
    padding:15px;
    display:flex;
`;
const Profile=styled.div`
`;
const Feeddiv=styled.div`
    width:50%;
    margin-left:40px;
`;

export default function Content(){
    let user = decode(localStorage.getItem('token'));
    user=user.user;
    let username=user.username;
    console.log(user);
    return (
        <Container>
            <Profile>
                <Usercard user={user}/>
            </Profile>
            <Feeddiv>
                <Tweetpostcard/>
                <Feed/>
            </Feeddiv>
            <div></div>
        </Container>
    );
}