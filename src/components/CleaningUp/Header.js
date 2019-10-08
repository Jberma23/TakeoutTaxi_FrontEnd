import React, { Component } from 'react';
import Navbar from "../NavBar"




class Header extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron" style={{ paddingBottom: "1%" }}>
                <h1 className="display-4" color='teal'>Takeout Taxi</h1>
                <p className="lead">Welcome Owner </p>
                <hr className="my-4" />
                <Navbar onChange={this.props.onChange} searchTerm={this.props.searchTerm} />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
        );
    }
}

export default Header;


