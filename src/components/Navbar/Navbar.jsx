import React from 'react'
import { Nav } from './style'

const Navbar = ({items}) => {

  return (
    <Nav>
     {items.map((item)=>(
       <div>
          <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.mal_id}>{item.title}</a>
       </div> 
     ))}
    </Nav>
  )
}

export default Navbar
