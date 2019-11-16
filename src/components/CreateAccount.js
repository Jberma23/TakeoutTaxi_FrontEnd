import React, { Component } from 'react';
import Headr from "./PreLoginHeader"
import {Link} from "react-router-dom"
import { Button, Form, Grid, Header, Message, Segment, Radio } from 'semantic-ui-react'
class AccountCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }
  handleClick = () =>{
    this.setState((prevState) => ({ active: !prevState.active }))}
  
  render(props) { 
    return (<React.Fragment>
      <Headr />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <i className="truck icon" ></i> Create an Account
            </Header>
            <Form size='large' onSubmit={(event) => this.props.handleCreateAccountSubmit(event)}>
              <Segment stacked>
                <Form.Input fluid icon='user' id="firstName" iconPosition='left' placeholder='First Name' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
                <Form.Input fluid icon='user outline' id="lastName" iconPosition='left' placeholder='Last Name' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
                <Form.Input fluid icon='envelope outline' id="email" iconPosition='left' placeholder='E-mail address' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
                <Form.Input fluid icon='address card outline' id="username"iconPosition='left' placeholder='Username' onChange={(event) => this.props.handleCreateAccountChange(event)}/>
                <Form.Input
                  fluid
                  icon='lock'
                  id="password"
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={(event) => this.props.handleCreateAccountChange(event)}
                />
                Are you a truck owner?
              
                <br></br>
                
                    <label> No </label>
                    <Radio toggle label="Yes" onChange={(event) => {this.props.handleCreateAccountOwnerChange(event)}} />
                   
                {/* <Radio toggle onChange={(event) => {{this.props.handleCreateAccountOwnerChange(event)}}}/> */}
                
               
              
      
                <Button type="Submit"  color='teal' fluid size='large' redirect="/login">
                  Create Account 
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an Account? <Link to='/login'>Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
        
      
        </React.Fragment>  );
  }
}
 
export default AccountCreate;


  



