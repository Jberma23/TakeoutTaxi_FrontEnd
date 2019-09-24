import React, { Component } from 'react';

import { Header } from 'semantic-ui-react'



class Headr extends Component {
    state = {}
    render() {
        return (
            <div id="header" className="jumbotron" style={{ paddingBottom: "1%" }}>
                <Header as='h2' color='teal' textAlign='center'>Takeout Taxi</Header>
                <Header as='h5' color='black' textAlign='center'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Header>
                <hr className="my-4" />
                {/* <hr className="my-4" /> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
        );
    }
}

export default Headr;


