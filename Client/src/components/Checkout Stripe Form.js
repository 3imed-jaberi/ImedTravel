import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutStripeForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
          <div className="input-field">
                    <CardElement />
          </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutStripeForm);