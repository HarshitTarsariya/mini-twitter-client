import React from 'react';
import styled from 'styled-components';

const Foot=styled.div`
    width:100%;
    display:flex;
    height:155px;
    background-color:gray;
`;
const Center=styled.div`
    margin-left:auto;
    margin-right:auto;
    padding:6px;
`;
export default function Footer(){
    return (
        <Foot>
            <Center>
                <img src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/images/Twitter_logo_blue_48.png"></img>
            </Center>
        </Foot>
    );
}