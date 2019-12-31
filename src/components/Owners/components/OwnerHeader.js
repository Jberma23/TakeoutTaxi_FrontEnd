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
            <>

                <div className="row">
                    <div className="jumbotron">

                        <Header as='h2' className="column" color='teal' textAlign='center'>Takeout TruckStop</Header>
                        {/* <Header as='h5' className="column" color='black' textAlign='center'>Welcome {this.state.currentUser.firstName}!</Header> */}
                        <Header as='h5' className="column" color='black' textAlign='center'>The Future of Takeout.
                </Header>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <hr className="my-4" />
                        <Navbar onChange={this.props.onChange} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                        {/* <hr className="my-4" /> */}
                        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                    </div>
                </div>
            </>
        );
    }
}

export default OwnerHeader;


