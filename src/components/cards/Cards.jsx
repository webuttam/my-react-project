import React from 'react'
import '../cards/Cards.css'

const Cards = (props) => {
  return (
    <div className='card-box-inr'>
        <div className='card-img'>
            <img src={props.image} alt={props.alt} />
        </div>
        <div className='card-info'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Cards