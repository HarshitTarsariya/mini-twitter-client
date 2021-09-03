import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

export default function User({user,follow,unfollow}){
    return (
        <Card>
            <Card.Content header={user.user.username} />
            <Card.Content extra>
            {
                user.isFollowing?
                (<Button onClick={()=>{unfollow(user.user._id)}}>
                    Unfollow
                </Button>):
                (<Button onClick={()=>{follow(user.user._id)}}>
                    Follow
                </Button>)
            }
                
            </Card.Content>
        </Card>
    );
};