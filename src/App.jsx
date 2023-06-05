import React from 'react'
import Docs from './Docs'
import {app , db} from './config/firebaseconfig' ; 
import { Routes , Route } from 'react-router-dom';
import EditsDocs from './EditsDocs';
const App = () => {
  return (
    <Routes>
      <Route  path='/' element={ <Docs  db={db}/>}/>
      <Route  path='/editDocs/:id' element={<EditsDocs db={db}/>}/>
    </Routes>
  )
}

export default App