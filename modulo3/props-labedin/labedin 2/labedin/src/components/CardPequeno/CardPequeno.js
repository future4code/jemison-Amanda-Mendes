import React from 'react';
import './CardPequeno.css'

function CardPequeno (props) {
    return (
    <div className="smallcard-container">
        <img src={ props.imagem } />
        <div className="text-card">
        <p>{ props.nome }:</p>
        <p>{ props.info }</p>
        </div>
    </div>
    ) 
}

export default CardPequeno