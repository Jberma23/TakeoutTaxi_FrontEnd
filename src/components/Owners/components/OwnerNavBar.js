import React, { Component } from 'react';
import { Link } from "react-router-dom"

class OwnerNavBar extends Component {
    state = {}
    render() {
        return (
            <div className="sixteen wide column" style={{ maxWidth: "100vw" }}>
                <div className="ui secondary  menu">
                    <Link to={'/'} className="item">
                        Owners Dashboard
                    </Link>

                    <Link to={'/orders'} className="item">
                        Orders
            </Link>
                    <Link to={'/feed'} className="item" >

                        Feed
            </Link>
                    <div className="right menu">
                        <div className="item">
                            <div className="ui icon input">
                                <input type="text" placeholder="Search..." value={this.props.searchTerm} onChange={(event) => this.props.onChange(event)} />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                        <button className="ui item" onClick={(event) => this.props.handleUserLogOut(event)}>
                            Logout
              </button>
                    </div>
                </div >
            </div>

        );
    }
}

export default OwnerNavBar;