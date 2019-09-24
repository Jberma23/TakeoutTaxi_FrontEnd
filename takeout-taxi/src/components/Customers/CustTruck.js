import React, { Component } from 'react';


class CustTruck extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    render() {
        return (

            <div className="ui card" style={{ marginLeft: "4%", marginRight: "0%", width: "100%"  }}  >
                <div className="scrolling content">
                    <div className="left floated meta" id="price">{this.props.truck.price}</div>
                    <div className="right floated meta">Favorite  <i id="heart" className="heart outline icon"></i></div>
                    {this.props.truck.name}
                </div>
                <div className="image">
                    <img src={this.props.truck.image_url} alt={this.props.truck.name} />
                </div>
                <div className="content">
                    <span className="right floated">
                        <i id="star" className="star icon"></i>
                        Average Rating: {this.props.truck.rating}
                    </span>
                    <span className="left floated"> <i id="review" className="comment icon"></i>
                    Reviews: {this.props.truck.review_count}</span>
                   
                </div>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        {/* <i className="heart outline icon"></i> */}
                        <button type="">Order</button>
                    </div>

                    <div>
                   
                    </div>
                </div>
            </div>


        )
    }
}

export default CustTruck;