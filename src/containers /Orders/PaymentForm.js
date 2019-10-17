import * as React from 'react';
import SquarePaymentForm, {
    ApplePayButton,
    CreditCardCVVInput,
    CreditCardExpirationDateInput,
    CreditCardNumberInput,
    CreditCardPostalCodeInput,
    CreditCardSubmitButton,
    GooglePayButton,
    MasterpassButton,
} from 'react-square-payment-form'
import 'react-square-payment-form/lib/default.css'

const APPLICATION_ID = 'REPLACE-ME'
const LOCATION_ID = 'REPLACE-ME'

class PaymentPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessages: [],
            price: 1.00,
            amount: 100,
        }
    }

    cardNonceResponseReceived = (errors, nonce, cardData, buyerVerificationToken) => {
        if (errors) {
            this.setState({ errorMessages: errors.map(error => error.message) })
            return
        }

        this.setState({ errorMessages: [] })
        // alert("nonce created: " + nonce + ", buyerVerificationToken: " + buyerVerificationToken)
        let data = { nonce: nonce, token: buyerVerificationToken }
        fetch("https://takeouttaxi-backend.herokuapp.com/payments", {
            method: 'POST', headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify({
                nonce: nonce,
                token: buyerVerificationToken,
                amount: this.state.amount
            })
        }
        ).then(resp => resp.json())
            .then(data => {
                if (window.confirm(data.message)) {
                    window.location = '/home'

                }
            })
        // API.post('/payments', { data: data })
    }

    createPaymentRequest() {
        return {
            requestShippingAddress: false,
            requestBillingInfo: true,
            currencyCode: "USD",
            countryCode: "US",
            total: {
                label: "MERCHANT NAME",
                amount: "1",
                pending: false
            },
            lineItems: [
                {
                    label: "Subtotal",
                    amount: "1",
                    pending: false
                }
            ]
        }
    }

    createVerificationDetails() {


        return {
            amount: `${this.amount}`,
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: {
                familyName: "Smith",
                givenName: "John",
                email: "jsmith@example.com",
                country: "GB",
                city: "London",
                addressLines: ["1235 Emperor's Gate"],
                postalCode: "SW7 4JA",
                phone: "020 7946 0532"
            }
        }
    }
    handleIncrement = (event) => {
        this.setState({ price: this.state.price += 1, amount: this.state.amount += 100 })
    }
    handleDecrement = (event) => {
        if (this.state.price > 0) {
            this.setState({ price: this.state.price -= 1, amount: this.state.amount -= 100 })
        }
        else {
            return null
        }

    }

    render() {
        const loadingView = <div className="sq-wallet-loading"></div>
        const unavailableApple = <div className="sq-wallet-unavailable">Apple pay unavailable. Open safari on desktop or mobile to use.</div>
        const unavailableGoogle = <div className="sq-wallet-unavailable">Google pay unavailable.</div>
        const unavailableMasterpass = <div className="sq-wallet-unavailable">Masterpass unavailable.</div>

        return (
            <SquarePaymentForm
                amount={this.state.amount}
                sandbox={true}
                applicationId={this.props.squareApplicationID}
                locationId={this.props.squareLocationId}
                cardNonceResponseReceived={this.cardNonceResponseReceived}
                createPaymentRequest={this.createPaymentRequest}
                createVerificationDetails={this.createVerificationDetails}
            >
                <ApplePayButton loadingView={loadingView} unavailableView={unavailableApple} />
                <GooglePayButton loadingView={loadingView} unavailableView={unavailableGoogle} />
                <MasterpassButton loadingView={loadingView} unavailableView={unavailableMasterpass} />

                <div className="sq-divider">
                    <span className="sq-divider-label">Or</span>
                    <hr className="sq-divider-hr" />
                </div>

                <fieldset className="sq-fieldset">
                    <CreditCardNumberInput />

                    <div className="sq-form-third">
                        <CreditCardExpirationDateInput />
                    </div>

                    <div className="sq-form-third">
                        <CreditCardPostalCodeInput />
                    </div>

                    <div className="sq-form-third">
                        <CreditCardCVVInput />
                    </div>

                </fieldset>
                <button onClick={this.handleDecrement}>-</button><button onClick={this.handleIncrement}>+</button>
                <CreditCardSubmitButton>
                    Pay ${this.state.price}.00
          </CreditCardSubmitButton>

                <div className="sq-error-message">
                    {this.state.errorMessages.map(errorMessage => <li key={`sq-error-${errorMessage}`}>{errorMessage}</li>)}
                </div>
            </SquarePaymentForm>
        );
    }
}

export default PaymentPage;