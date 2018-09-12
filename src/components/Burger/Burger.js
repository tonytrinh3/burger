import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

//object.keys turn object into array

const burger = (props) =>{
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map(  (_,i) =>{
                    return <BurgerIngredient key = {igKey + i} type = {igKey}/> //ig key is like salad, cheese; i is like 1,2,3

                }) 

    });// [one element, two element]

    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

export default burger;


/*
this is bad bc everything is hard coded and not done dynamically
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>
            */