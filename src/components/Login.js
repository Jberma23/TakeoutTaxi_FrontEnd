import React from 'react'
import Headr from "./PreLoginHeader"
import { Link } from "react-router-dom"
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const LoginForm = (props) => (
  <React.Fragment>
    <Headr />
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <i className="truck icon" ></i> Log-in to your account
      </Header>
        <Form size='large' onSubmit={(event) => props.handleLoginSubmit(event)}>
          <Segment stacked>
            <Form.Input fluid icon='user' id="email" iconPosition='left' placeholder='E-mail address' onChange={(event) => props.handleLoginChange(event)} />
            <Form.Input
              fluid
              icon='lock'
              id="password"
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(event) => props.handleLoginChange(event)}
            />


            <Button type="submit" color='teal' fluid size='large' >
              Login
          </Button>


            <Link to="#" onClick={(event) => alert("That Sucks")}>Forgot Your Password?</Link>
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