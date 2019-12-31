import React, { Component } from 'react';
import { Form } from "semantic-ui-react"
import OwnerCarousel from "./OwnerCarousel"
class OwnerTruck extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false
        }
    }
    render() {

        return (
            <>
                <div className="ui card" style={{ width: "100%" }} id={`truck-${this.props.truck.id}`}   >
                    <div className="scrolling content">
                        <div className="left floated meta" id="price">{this.props.truck.price}</div>
                        <div className="right floated meta">Favorite<i className="heart outline icon"></i></div>
                        {this.props.truck.name}
                    </div>
                    <>
                        <OwnerCarousel truck={this.props.truck} />
                    </>
                    <div className="content">
                        <span className="right floated">
                            <i className="star icon"></i>
                            Average Rating: {this.props.truck.rating}
                        </span>
                        <span className="left floated"> <i className="comment icon"></i>
                            Reviews: {this.props.truck.review_count}</span>
                        <br></br>
                        <br></br>
                        <button className="center floated" onClick={this.props.getLocation} onClick={(event) => this.setState({ toggle: !this.state.toggle })}>Check In</button>
                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            {/* <i className="heart outline icon"></i> */}

                            {this.state.toggle ?
                                <>


                                    <Form onSubmit={(event) => this.props.handleCheckInForm(event, this.props.truck)}>
                                        <Form.Input placeholder="Enter New Address..." />
                                        <button type="submit">submit</button>
                                    </Form >

                                    <br></br>

                                    Or
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                    <Form.Button onClick={(event) => this.props.handleCheckIn(this.props)}>Use My Location</Form.Button>
                                </>

                                :
                                <div>
                                    Orders:
                                        <ul>
                                        <li>

                                        </li>
                                    </ul>
                                </div>}
                        </div>
                        {/*  */}

                    </div>
                </div>

            </>
        )
    }
}

export default OwnerTruck;