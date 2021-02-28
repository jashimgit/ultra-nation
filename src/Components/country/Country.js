import React from 'react';
import './country.css';

const Country = (props) => {
    console.log(props.country);
    const { name, flag } = props.country;
    
    return (
        <div className="card-item">
            <div className="card">
            <img src={flag} alt="flag" />
            <div className="card-body">
                <div className="card-title">{name}</div>
            </div>
        </div>
        </div>
    );
};

export default Country;