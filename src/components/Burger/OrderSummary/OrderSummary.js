import React from 'react';

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'
//function bc u have to execute some code to get a result
// create list of list items - object.keys
const orderSummary = (props) => { 
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style ={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked = {props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )

}

export default orderSummary;