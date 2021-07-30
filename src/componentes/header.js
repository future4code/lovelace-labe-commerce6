import React from 'react';
import './header.css';



function header() {
    return (
        <div className = 'header-container'>
             <div className='header-tittle'>
                <h2 className="header-tittle">N4V1</h2>
             </div>
           
                <div className="header-search">
                  
                    <input placeholder="Search a product" type="text" />
                </div>


        </div>
    )
}

export default header
