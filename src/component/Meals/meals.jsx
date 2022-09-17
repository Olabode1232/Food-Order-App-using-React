import React, { Component, Fragment } from 'react';
// import AvailableMeals from './availableMeals';
import MealsSummary from "./mealSummary"
import AvailableMeals from "./availableMeals"


function Meals() {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
}

export default Meals