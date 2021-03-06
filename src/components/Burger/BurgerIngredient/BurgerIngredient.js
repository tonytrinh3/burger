import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from "./BurgerIngredient.css"

//change const to a class component in order to use prop-type validation
//can create all components as class. good practice to use function form as often as possible
// you don't decide if something is a container or not with the class keyword
//stateless doesn't change when you switch over to class

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

            switch (this.props.type){
                case ('bread-bottom'):
                    ingredient = <div className={classes.BreadBottom}></div>;
                    break;
                case ('bread-top'):
                    ingredient = (
                        <div className = {classes.BreadTop}>
                            <div className = {classes.Seeds1}></div>
                            <div className = {classes.Seeds2}></div>
                        </div>
                    );
                    break;
                case ('meat'):
                    ingredient = <div className = {classes.Meat}></div>;
                    break;
                case ('cheese'):
                    ingredient = <div className = {classes.Cheese}></div>;
                    break;
                case ('bacon'):
                    ingredient = <div className = {classes.Bacon}></div>;
                    break;
                case ('salad'):
                    ingredient = <div className = {classes.Salad}></div>;
                    break;
                default:
                    ingredient = null;
            }

        return ingredient;
    }
}
/*prop validation is good to use when you are using with team, other people, 3rd party  */
BurgerIngredient.propTypes = {
    type:PropTypes.string.isRequired

};


export default BurgerIngredient;