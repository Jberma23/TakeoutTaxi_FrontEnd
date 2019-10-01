import React, { Component } from 'react';
import { imageUpload } from './DirectUpload';
import { Button, Form, Grid, Header, Segment, Select } from 'semantic-ui-react'
const priceOptions = [
    { value: "$", text: "$" },
    { value: "$$", text: "$$" },
    { value: "$$$", text: "$$$" },
    { value: "$$$$", text: "$$$$" }
]
class OwnerTruckForm extends Component {
    constructor() {
        super();
        this.state = {}
    }



    render() {
        return (
            <React.Fragment>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Form size='large' onSubmit={(event) => this.props.handleCreateTruckSubmit(event)}  >
                            <Header as='h2' color='teal' textAlign='center'>
                                <i className="truck" ></i> Add a Truck
                </Header>
                            <Segment stacked>
                                <Form.Input fluid icon='address book' id="name" iconPosition='left' placeholder='Truck Name' onChange={(event) => this.props.handleCreateTruckChange(event)} data-direct-upload-url="/rails/active_storage/direct_uploads" />

                                <Form.Input label='Truck Image' type="file" icon='paperclip' id="featured_image" iconPosition='left' placeholder='Featured Truck Image' data-direct-upload-url="/rails/active_storage/direct_uploads" onChange={(event) => imageUpload(event.target.files[0], this.props)} />


                                <Form.Input type="file" label="Menu PDF" icon='paperclip' id="menu_image" iconPosition='left' placeholder='Featured Menu image' onChange={(event) => imageUpload(event.target.files[0], this.props)} />

                                <Form.Input type="text" icon='window maximize outline icon' id="url" iconPosition='left' placeholder='Website Url' onChange={(event) => this.props.handleCreateTruckChange(event)} />
                                {/* <Form.Input type="Text" fluid icon='compass' id="latitude" iconPosition='left' placeholder='Location (latitude)' onChange={(event) =>  this.props.handleCreateTruckChange(event)}/>
            <Form.Input type="Text" fluid icon='compass outline' id="longitude" iconPosition='left' placeholder='Location (longitude)' onChange={(event) =>  this.props.handleCreateTruckChange(event)}/> */}
                                <Form.Input type="Text" fluid icon='location arrow' id="address" iconPosition='left' placeholder='Location (Full Address)' onChange={(event) => this.props.handleCreateTruckChange(event)} />
                                <Select fluid options={priceOptions} id="price" placeholder='Select A price Category' onChange={(event) => this.props.handleCreateTruckPriceChange(event)} />
                                <Form.Input type="Hidden" id="review_count" value="0" />
                                <Button type="submit" color='teal' fluid size='large' >
                                    Add Truck
             </Button>
                                <Form.Input type="Hidden" id="rating" value="0" />
                                <Form.Input type="Hidden" id="user_id" value={this.props.currentUser} />
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>

            </React.Fragment>
        );
    }
}

export default OwnerTruckForm;





