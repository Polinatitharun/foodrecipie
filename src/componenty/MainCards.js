import React from 'react'
import { NavLink } from 'react-router-dom'

const MainCards = ({detail}) => {
  return (
    <div className='meals'>
        {!detail ? "" : detail.map((curitem)=>{
            return(
                <div className='mealImg'>
                    <img src={curitem.strMealThumb}/>
                    <p>{curitem.strMeal}</p>
                    <NavLink to={`/${curitem.idMeal}`}><button >Recipie</button></NavLink>
                    
                </div>
            )
         })
         }
    </div>
  )
}

export default MainCards