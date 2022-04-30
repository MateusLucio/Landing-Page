import React from 'react';


function Featurebox(props) {
  return (
    <div className='a-box'>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <p> Serviços financeiros a favor dos seus investimentos. Para quem investe não precisar de bancos.</p>
      </div>

    </div>
  )
}

export default Featurebox;