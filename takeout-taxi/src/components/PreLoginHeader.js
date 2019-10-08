import React, { Component } from 'react';

import { Header } from 'semantic-ui-react'



class Headr extends Component {
    state = {}
    render() {
        return (
            <div id="header" className="jumbotron" style={{ paddingBottom: "1%" }}>
                <Header as='h2' color='teal' textAlign='center'>Truck Stop</Header>
                <Header as='h5' color='black' textAlign='center'>The Future of Takeout</Header>
                <hr className="my-4" />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
        );
    }
}

export default Headr;


