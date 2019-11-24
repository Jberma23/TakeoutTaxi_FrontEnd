import React, { Component } from 'react';
import Navbar from "./OwnerNavBar"
import { Header } from "semantic-ui-react"



class OwnerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser
        }

    }
    render() {
        return (
            // <img src={require("../Truck_Stop_Logo.png")} alt='truck stop logo' />
            <div className="jumbotron" style={{ paddingBottom: "1%" }}>
                <Header as='h2' color='teal' textAlign='center'>Truck Stop</Header>
                <Header as='h5' color='black' textAlign='center'>Welcome {this.state.currentUser.firstName}!</Header>
                <Header as='h5' color='black' textAlign='center'>The Future of Takeout.
                </Header>


                <hr className="my-4" />
                <Navbar onChange={this.props.onChange} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}

            </div>
        );
    }
}

export default OwnerHeader;


