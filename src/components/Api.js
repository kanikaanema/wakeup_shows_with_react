import React from 'react'
import { useContext } from 'react'
import { ShowsContext } from '../Context/context'

function Api() {

const {data} = useContext(ShowsContext)

  return (
    
    <div>{data.map((data)=>(
      
      <ul>
        <li>{data.name}</li>
       
      </ul>
    ))}</div>
  )
}

export default Api