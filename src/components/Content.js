import React from 'react';
import styled from 'styled-components';
import decode from 'jwt-decode';

const Container=styled.div`
    padding:8px;
    display:flex;
`;
const Profile=styled.div`
    flex-grow:1;
    margin:2px;
`;
const Feeddiv=styled.div`
    flex-grow:2;
`;

export default function Content(){
    let user = decode(localStorage.getItem('token'));
    let username=user.user.username;
    console.log(user);
    return (
        <Container>
            <Profile>
                <div>
                    {username}          
                </div>

            </Profile>
            <Feeddiv>
            </Feeddiv>
            <div>This is add</div>
        </Container>
    );
}