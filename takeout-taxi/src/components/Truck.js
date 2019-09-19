import React, { Component } from 'react';


class Truck extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="ui card" style={{ marginLeft: "4%", marginRight: "0%", width: "100%"  }}  >
                <div className="scrolling content">
                    <div className="right floated meta">{this.props.truck.price}</div>
                    {this.props.truck.name}
                </div>
                <div className="image">
                    <img src={this.props.truck.image_url} alt={this.props.truck.name} />
                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart outline like icon"></i>
                        Average Rating: {this.props.truck.rating}
                    </span>
                    <i className="comment icon"></i>
                    Review: {this.props.truck.review_count}
                </div>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        {/* <i className="heart outline icon"></i> */}
                        <button type="">Order</button>
                    </div>
                </div>
            </div>


        )
    }
}

export default Truck;