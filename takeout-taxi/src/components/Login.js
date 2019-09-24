import React from 'react'

import {Link} from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import DashBoard from '../containers /Dashboard'
const LoginForm = (props) => (
<React.Fragment>

  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <i className="truck icon" ></i> Log-in to your account
      </Header>
      <Form size='large' >
        <Segment stacked>
          <Form.Input fluid icon='user' id="email" iconPosition='left' placeholder='E-mail address' onChange={(event) => props.handleLoginChange(event)}/>
          <Form.Input
            fluid
            icon='lock'
            id="password"
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(event) => props.handleLoginChange(event)}
          />

          <Button type="Submit" color='teal' fluid size='large' onClick={(event) => props.handleLoginSubmit(event)}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to='/register'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  
 
  </React.Fragment>
)

export default LoginForm