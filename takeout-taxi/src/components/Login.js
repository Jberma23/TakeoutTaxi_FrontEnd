import React from 'react'
import Headr from "./PreLoginHeader"
import {Link} from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import DashBoard from '../containers /Dashboard'
const LoginForm = () => (
<React.Fragment>
<Headr />
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <i className="truck icon" ></i> Log-in to your account
      </Header>
      <Form size='large' onSubmit={(event) => this.props.handleLogin}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button type="Submit" color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to='/register'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
  
  <DashBoard/>
  </React.Fragment>
)

export default LoginForm