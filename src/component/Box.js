import React from 'react'

const Box = (props) => {
  let result = props.result;
  if(props.title === "Computer") {

    if(result === "win"){
      result = "lose"
    } else if (result === "lose") {
      result = "win"
    }

  }
  return ( // src={props.item && props.item.img}
    <div className={`box ${result}`}>
      <h1 className='border-bottom'>{props.title}</h1>

      <h2>{props.item?props.item:"scissors"}</h2>
      {/* <img className='item-img' src={props.item?props.item.img:"https://cdn-icons-png.flaticon.com/512/4975/4975327.png"} alt='none'/> */}
      <div className={`item-img ${props.item?props.item:"scissors"}`}></div>

      <h2>{result?result:"tie"}</h2>
    </div>
  )
}

export default Box