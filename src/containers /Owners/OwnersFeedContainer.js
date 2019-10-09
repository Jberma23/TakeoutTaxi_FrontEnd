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
            this.props.trucks.map((t) =>
                this.props.updates.map((e) => e.content).filter((u) => {
                    return u.includes(t)
                }
                )).map((update) => {
                    debugger
                    return <FeedItem key={update.id} update={update} current_user={this.props.user} />
                }
                )
            :
            null


    }

    render() {
        return (<>
            <Card style={{ "margin-left": "39%", "width": "30%" }}>
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