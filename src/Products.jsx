import React from 'react'

function Products({naam, data}) {
  const[a, b] = useState(false)


  return (
    <div className='bg-zinc-800 w-full h-600'>
      <h1>{a === false ? "hello" : "hey"}</h1>
      <button onClick={() => b(true)}></button>

      {/* <h1>{naam}</h1>
      <h2>{data.age}</h2>
      <h2>{data.name}</h2> */}
    </div>
  )
}

export default Products