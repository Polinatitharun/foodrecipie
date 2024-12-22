import React, { useState } from 'react'
import { json, useParams } from 'react-router-dom';

const Mealinfo = () => {
    const {mealId}=useParams();
    const[info,setInfo]=useState();
    const getInfo= async ()=>{
        const get=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const jsondata=await get.json();
        setInfo(jsondata.meals[0]);
    }
    if(mealId !=""){
        getInfo();
    }
  return (
   <div>
     {
        !info ?  "Data not found" : 
        <div className='mealInfo' >
        <img src={info.strMealThumb} />
        <div className='info'>
            <h1>Recipie details</h1>
            <button >{info.strMeal}</button>
            <h3>Instructions:</h3>
            <p>{info.strInstructions}</p>
        </div>
    </div>
    }
   </div>
    
  )
}

export default Mealinfo