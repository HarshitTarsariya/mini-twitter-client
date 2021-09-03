import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const  Tweet= ({username,time,tweet}) => (
    <Card fluid>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
      />
      <Card.Header>{username}</Card.Header>
      <Card.Meta>India</Card.Meta>
      <Card.Description>
          {tweet}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Button icon='like' />
        <Button icon='comments' />
        <span>{time}</span>
    </Card.Content>
  </Card>
)

export default Tweet