import React, { Component } from 'react';
import './sqpaymentform.css';
import PaymentForm from './PaymentForm'
import OwnerHeader from "../../components/Owners/OwnerHeader"

class CheckoutContainer extends Component {
    state = {}
    render() {
        return (

            <div id="checkout" ><PaymentForm squareApplicationID={this.props.squareApplicationID} squareAccessKey={this.props.squareAccessKey} squareLocationId={this.props.squareLocationId} />
            </div>
        );
    }
}

export default CheckoutContainer;