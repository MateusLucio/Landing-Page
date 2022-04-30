import React from 'react';

function Contact() {
  return (
    <div id = 'contact'>
      <h3> Fale Conosco</h3>
      <div className='contact-input'>
        <input type = 'text' placeholder = 'Digite seu nome'/>
        <input type = 'email' placeholder = 'Digite seu email'/>
        <input type = 'email' placeholder = 'Mensagem'/>
        <a href = '#top'>Enviar</a>
      </div>

    </div>
  )
}

export default Contact;