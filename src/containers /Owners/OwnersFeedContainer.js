import React, { Component } from 'react';
import FeedItem from "../../components/FeedItem"
import { Card } from 'semantic-ui-react'

class FeedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderUpdates = () => {
        return this.props.updates ?
            this.props.user.trucks.map((t) => {
                let filtered = this.props.updates.filter((u) => u.content.includes(t.name))
                return filtered.map((update) =>
                    <FeedItem key={update.id} update={update} current_user={this.props.user} />

                )
            })
            :
            null


    }

    render() {
        return (<>
            <Card style={{ "marginLeft": "39%", "width": "30%" }}>
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