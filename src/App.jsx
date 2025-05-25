import React, { useState } from 'react'
import Products from './Products'

function App() {
  var[a,b] = useState(69)

  return (
    <div className='w-full h-screen bg-zinc-900'>
      <h1>{a}</h1>
      <button className='px-3 py-1 bg-green-700 rounded-md text-s' >click</button>
    </div>


    // <div className="w-full h-screen bg-zinc-900 p-4">
    //   <div className="w-44 h-32 rounded-xl bg-red-600 p-4"></div>
    //   <Products />
    // </div>
  )
}

export default App
