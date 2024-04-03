import React from 'react';
import { Link } from 'react-router-dom';

import './NavLinks.css'

function NavLinks() {
  return (
    <nav className='navbar'>
      <div className='nav-links'>
        <Link to={'/dashboard'}>
        <button className='btn-link'>Dogs</button>
        </Link>
        <Link to={'/dashboard/add'}>
        <button className='btn-link'>Add New Dog</button>
        </Link>
        <Link to={'/'}>
        <button className='btn-link'>Log out</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavLinks;
