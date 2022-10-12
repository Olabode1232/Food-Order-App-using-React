import React, { Component } from "react";
import MealItem from "../MealItem/mealItem";
import Card from "../UI/card";

const Dummy_Meals = [
  {
    id: 1,
    name: "Chicken tender",
    description: "Good taste and veggies",
    price: 12.33,
  },
  {
    id: 2,
    name: "Potato chips",
    description: "Special and classy",
    price: 14.11,
  },
  {
    id: 3,
    name: "Chicken pie",
    description: "American, raw and meat",
    price: 33.22,
  },
  {
    id: 4,
    name: "Doughnut",
    description: "Flour with good flavor",
    price: 54.21,
  },
];
function AvailableMeals() {
  const mealList = Dummy_Meals.map((meal) => (
    <MealItem
      key={meal.id}
      meal={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card>
            <ul className="list-unstyled">{mealList}</ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AvailableMeals;
