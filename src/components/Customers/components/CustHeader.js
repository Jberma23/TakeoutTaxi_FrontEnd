import React, { Component } from 'react';
import Navbar from "./CustNavBar"
import { Header } from "semantic-ui-react"



class CustHeader extends Component {
    state = {}
    render() {
        return (


            <>
                <div className="row">
                    <div className="jumbotron">
                        <Header as='h2' className="column" color='teal' textAlign='center' >Takeout TruckStop</Header>
                        <Header as='h5' className="column" color='black' textAlign='center' >The Future of Takeout.</Header>
                    </div>
                </div>
                {/* </div> */}
                <div className="row">
                    <div className="column">
                        <hr className="my-4" />
                        <Navbar onChange={this.props.onChange} searchTerm={this.props.searchTerm} handleUserLogOut={this.props.handleUserLogOut} />
                    </div>
                </div>
            </>

        );
    }
}

export default CustHeader;


