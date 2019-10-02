import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react'


class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Feed.Event>
                    <Feed.Label icon='bell'></Feed.Label >
                    <Feed.Content>
                        <Feed.Date content={`${this.props.update.created_at.slice(11, 16)} - ${this.props.update.created_at.slice(0, 10)}`}

                        />
                        <Feed.Summary>
                            <Feed>
                                {this.props.update.content}
                            </Feed >
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </>
        )

    }
}

export default FeedItem;