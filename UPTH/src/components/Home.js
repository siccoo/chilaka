import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div className='App-home'>
            <Header />
            <div className='home'>
            <h2> WELCOME TO UNIVERSITY OF PORT HARCOURT</h2>
            <h2>TEACHING HOSPITAL</h2>
            <h2>PORT HARCOURT</h2>
            <p>The University of Port Harcourt Teaching Hospital (UPTH) is on <br/>
            East West Road, Port Harcourt, Nigeria. It is a major tertiary care teaching <br/>
            and research facility in Rivers State. It is one of the 3rd gerneration <br/>
            Teaching Hospitals established by law in 1985 via Decree No. 10 of 1985, though <br/>
            it commenced operations in 1980. </p>
            </div>
           
            </div>
        );
    }
}
export default Home;