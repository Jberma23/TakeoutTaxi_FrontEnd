import React, { Component } from 'react';


class OwnerTruck extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        debugger
        return (
            <>
                <div className="ui card" style={{ marginLeft: "4%", marginRight: "0%", width: "100%" }} handleCheckIn={(event) => this.props.handleCheckIn(event, this.props.truck)} >
                    <div className="scrolling content">
                        <div className="left floated meta">{this.props.truck.price}</div>
                        <div className="right floated meta">Favorite<i className="heart outline icon"></i></div>
                        {this.props.truck.name}
                    </div>
                    <div className="image">
                        <img src={this.props.truck.image_url} alt={this.props.truck.name} />
                    </div>
                    <div className="content">
                        <span className="right floated">
                            <i className="star icon"></i>
                            Average Rating: {this.props.truck.rating}
                        </span>
                        <span className="left floated"> <i className="comment icon"></i>
                            Reviews: {this.props.truck.review_count}</span>

                    </div>
                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            {/* <i className="heart outline icon"></i> */}
                            <button onClick={this.props.getLocation}>Check In</button>
                        </div>

                        <div>
                            Orders:
                    <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default OwnerTruck;