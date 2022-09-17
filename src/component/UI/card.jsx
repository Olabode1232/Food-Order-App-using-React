import React, { Component } from 'react';


function Card(props) {
    return <div className="container">
           <div className="row justify-content-center shadow-lg">
               <div className="col-md-9 bg-light rounded-3 ">
                   {props.children}
               </div>
           </div>
    </div>
}
export default Card