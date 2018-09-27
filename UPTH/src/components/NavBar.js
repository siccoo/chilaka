import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div> 
            <div className='head'>
                <div className='Main'><img src={require('../images/uniport.png')} /></div>
                <header>
                    <h1>UNIVERSITY OF PORT HARCOURT </h1>
                    <h1>TEACHING HOSPITAL</h1>
                    <h1>PORT HARCOURT  </h1>
                </header>
                <div className='nheader'>
                    <nav>
                        <ul>
                            <Link to='/home'>Home</Link>
                            <Link to='/mission'>Our Mission</Link>
                            <Link to='about'>About UPTH</Link>
                            {/* <Link to='management'>Management</Link> */}
                            <Link to='form'>Registration</Link>
                            <Link to='/faq'>FAQ</Link>
                        </ul>
                    </nav>
                </div>
                <form className='form'>
                    <input type='search'
                        id="searchInput"
                        placeholder="Search Here..." />
                </form>
            </div>
        </div>
    )
    
}

export default NavBar;