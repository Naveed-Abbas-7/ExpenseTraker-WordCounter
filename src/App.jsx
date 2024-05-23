
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home'
import Cards from '../src/Pages/Cards'
import Expense from './Pages/Expense'
import Wordcounter from '../src/Pages/Wordcounter'
function App() {
  return (
    < >
   <BrowserRouter>
   <div>
    <Routes>
      <Route  path='/' element = {<Home/>}   />
      <Route  path='/Cards' element = {<Cards/>}   />
      <Route  path='/Expense' element = {<Expense/>}   />
      <Route  path='/Wordcounter' element = {<Wordcounter/>}   />
    
    </Routes>
    
   </div>
   </BrowserRouter>

    </>
  )
}

export default App
