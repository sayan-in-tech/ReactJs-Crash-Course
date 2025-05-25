import React from 'react'

function Products({naam, data}) {
  return (
    <div className='bg-zinc-800 w-full h-600'>
      <h1>{naam}</h1>
      <h2>{data.age}</h2>
      <h2>{data.name}</h2>
    </div>
  )
}

export default Products