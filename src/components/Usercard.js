import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const  Usercard= ({user:{username}}) => (
    <Card >
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta>India</Card.Meta>
    </Card.Content>
    <Card.Content extra>
            <Link to='/'>
                Follows
            </Link>
    </Card.Content>
  </Card>
)

export default Usercard