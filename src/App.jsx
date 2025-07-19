import React from 'react'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Playground from './components/Playground'
function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },{
      path:'/game',
      element:<Playground/>
    }
  ])
  return (
<div>
  <RouterProvider router={router}/>
 
</div>  )
}

export default App