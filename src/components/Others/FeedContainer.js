import React, { Component } from 'react';
import FeedItem from "./FeedItem"
import { Card } from 'semantic-ui-react'

class FeedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderUpdates = () => {
        return this.props.updates ?
            this.props.updates.map((update) =>
                <FeedItem key={update.id} update={update} current_user={this.props.user} />
            )
            :
            null


    }

    render() {
        return (<>
            <Card>
                <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                </Card.Content>
                <Card.Content>
                    {this.renderUpdates()}
                </Card.Content >
            </Card >
        </>);
    }
}

export default FeedContainer;