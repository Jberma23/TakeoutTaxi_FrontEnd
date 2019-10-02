import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"
class CustNavBar extends Component {
    state = {}
    render() {
        return (
            <div className="ui secondary  menu">
                <a className="active item">
                    Home
            </a>
                <a className="item">
                    OrdersRedirect={'/feed'}
                </a>
                <a className="item" >
                    <Link to={'/feed'} />
                    Feed
            </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." value={this.props.searchTerm} onChange={(event) => this.props.onChange(event)} />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <a className="ui item" onClick={(event) => this.props.handleUserLogOut(event)}>
                        Logout
                    </a>
                </div>
            </div>

        );
    }
}

export default CustNavBar;