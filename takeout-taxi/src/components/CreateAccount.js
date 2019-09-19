import React from 'react'
import Headr from "./PreLoginHeader"
import {Link} from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const AccountCreate = () => (
<React.Fragment>
<Headr />
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <i className="truck icon" ></i> Create an Account
      </Header>
      <Form size='large' onSubmit={(event) => this.props.handleCreateAccountSubmit(event)}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
          <Form.Radio >Owner</Form.Radio>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(event) => this.props.handleCreateAccountChange(event)}
          />

          <Button type="Submit" color='teal' fluid size='large'>
            Create Account 
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an Account? <Link to='/login'>Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  

  </React.Fragment>
)

export default AccountCreate