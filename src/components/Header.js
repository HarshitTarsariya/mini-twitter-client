import React from 'react';
import styled from 'styled-components';

const Head=styled.div`
    width:100%;
    display:flex;
    height:55px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Center=styled.div`
    margin-left:auto;
    margin-right:auto;
    padding:6px;
`;
export default function Header(){
    return (
        <Head>
            <Center>
                <img src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/images/Twitter_logo_blue_48.png"></img>
            </Center>
        </Head>
    );
}