import React, { Component } from 'react';


class NavBar extends Component {
    state = {}
    render() {
        return (
            <div className="ui secondary  menu">
                <a className="active item">
                    Home
            </a>
                <a className="item">
                    Orders
            </a>
                <a className="item">
                    Feed
            </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." value={this.props.searchTerm} onChange={(event) => this.props.onChange(event)} />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <a className="ui item">
                        Logout
              </a>
                </div>
            </div>

        );
    }
}

export default NavBar;