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
                <Feed.Event >
                    <Feed.Label icon='bell' style={{ "font-size": "1.1rem" }}></Feed.Label >
                    <Feed.Content style={{ "font-size": "1.2rem" }}>
                        <Feed.Date content={parseInt(this.props.update.created_at.slice(11, 13)) > 12 ? `${Math.abs(parseInt(this.props.update.created_at.slice(11, 13)) - 16)}${(this.props.update.created_at.slice(13, 16))}PM - ${this.props.update.created_at.slice(0, 10)}` :
                            `${Math.abs(parseInt(this.props.update.created_at.slice(11, 13)) - 16)}${(this.props.update.created_at.slice(13, 16))}AM - ${this.props.update.created_at.slice(0, 10)}`}

                        />
                        <Feed.Summary>
                            <Feed style={{ "font-size": "1.4rem" }}>
                                <a>{this.props.update.content.split("just")[0]}</a> just {this.props.update.content.split("just")[1]}
                            </Feed >
                        </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </>
        )

    }
}

export default FeedItem;