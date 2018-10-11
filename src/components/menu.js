import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Menu = () => (
    <div 
      style={{
        paddingTop: '5rem',
    }}
    >

      <ul 
        style={{ 
          listStyle: none,
          display: 'flex',
          justifyContent: 'space-evently',
      }}
      >
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </div>
)

export default Menu