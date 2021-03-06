import React, {Component} from 'react';

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'
//function bc u have to execute some code to get a result
// create list of list items - object.keys
//wanna add lifecycle hooks so you can see when it is updated

class OrderSummary extends Component {
        //this could be a function component, doesn't have to be class'
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                <li key={igKey}>
                    <span style ={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
            });

        return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}
    
    
export default OrderSummary;