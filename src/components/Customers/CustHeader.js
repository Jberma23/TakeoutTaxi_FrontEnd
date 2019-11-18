import React, { Component } from 'react';
import Navbar from "./CustNavBar"
import { Header } from "semantic-ui-react"



class CustHeader extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron" style={{ paddingBottom: "1%" }}>
                <Header as='h2' color='teal' textAlign='center'>Takeout TruckStop</Header>
                <Header as='h5' color='black' textAlign='center'>The Future of Takeout.</Header>
                <hr className="my-4" />
                <Navbar onChange={this.props.onChange} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
        );
    }
}

export default CustHeader;


