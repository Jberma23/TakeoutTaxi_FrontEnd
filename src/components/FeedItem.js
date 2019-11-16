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
                        <Feed.Date content={parseInt(this.props.update.created_at.slice(11, 13)) > 12 ? `${Math.abs(parseInt(this.props.update.created_at.slice(11, 13)) - 16)}${(this.props.update.created_at.slice(13, 16))}PM - ${this.props.update.created_at.slice(0, 10)}` :
                            `${Math.abs(parseInt(this.props.update.created_at.slice(11, 13)) - 16)}${(this.props.update.created_at.slice(13, 16))}AM - ${this.props.update.created_at.slice(0, 10)}`}

                        />
                        <Feed.Summary>
                            <Feed>
                                <button>{this.props.update.content.split("just")[0]}</button> just {this.props.update.content.split("just")[1]}
                            </Feed >
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </>
        )

    }
}

export default FeedItem;