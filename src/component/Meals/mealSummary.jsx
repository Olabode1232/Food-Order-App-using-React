import React, { Component } from "react";
import "./mealSummary.css"

function MealsSummary() {
  return (
    <div className="container  mealSummaryHolder">
      <div className="row  justify-content-center">
          <div className="col-md-7 bg-dark text-light text-center p-2 rounded-4">
          <h3>Delicious Food, Delivered to you</h3>
      <p>
        Food is good; we can all agree on that. But what’s better than just 
        uploading sensual photos of delectable food is inscribing fitting
        captions on them? This, my friend, is the purpose of this listing.
      </p>
      <p>
        People nowadays love taking pictures of their food. Some post them
        online, some save them for remembrance, and some keep them for the
        aesthetics.
      </p>
          </div>
      </div>

    </div>
    // <div className="w-50 bg-dark text-light text-center rounded-3 p-2 ms-auto me-auto mt-0 mb-5  mealHolder ">
      
    // </div>
  );
}

export default MealsSummary
