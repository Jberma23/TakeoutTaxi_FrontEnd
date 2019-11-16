import React, { Component } from 'react';
import { Link } from "react-router-dom"
class CustNavBar extends Component {
    state = {}
    render() {
        return (
            <div className="ui secondary  menu">
                <Link to={'/'} className="item">
                    Customer's Dashboard
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
                    <button className="ui item" href="" onClick={(event) => this.props.handleUserLogOut(event)}>
                        Logout
                    </button>
                </div>
            </div>

        );
    }
}

export default CustNavBar;