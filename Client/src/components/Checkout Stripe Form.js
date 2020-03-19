import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';



class CheckoutStripeFormWithOutInject extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className='checkout'>
        <div className='input-field'>
          <CardElement />
        </div>
      </div>
    );
  }
}


const CheckoutStripeForm = injectStripe(CheckoutStripeFormWithOutInject);

export { CheckoutStripeForm };