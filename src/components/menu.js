import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div 
      style={{
        marginLeft: '5rem',
        paddingTop: '0.5rem',
        width: '100%',
        fontFamily: 'Helvetica',
        fontSize: '4rem',
    }}
    >

      <ul 
        style={{ 
          width: '100%',
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evently',
          textDecoration: 'none',
      }}
      >
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </div>
)

export default Menu