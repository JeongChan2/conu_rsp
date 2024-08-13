import React from 'react'

const Box = (props) => {
  return ( // src={props.item && props.item.img}
    <div className='box'>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item?props.item.img:"https://cdn-icons-png.flaticon.com/512/4975/4975327.png"} alt='none'/>
      <h2>WIN</h2>
    </div>
  )
}

export default Box