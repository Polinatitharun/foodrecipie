import React from 'react'
import Mainpage from './componenty/Mainpage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Mealinfo from './componenty/Mealinfo';
const App = () => {
  return (
   
    // <Mainpage/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path="/:mealId" element={<Mealinfo/>}/>
    </Routes>
  )
}

export default App;