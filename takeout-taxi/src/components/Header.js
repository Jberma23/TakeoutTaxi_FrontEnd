import React, { Component } from 'react';
import Navbar from "./NavBar"




class Header extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron" style={{ paddingBottom: "1%" }}>
                <h1 className="display-4">Takeout Taxi</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <Navbar />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
        );
    }
}

export default Header;


