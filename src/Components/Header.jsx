import React from "react";
import Navbar from "./NavBAr";

function Header() {
  return (
    <div id="main">
      <Navbar/>
      <div className="name">
        <h1> <span>Transformamos o mercado financeiro para melhorar a vida das pessoas.</span></h1>
        <p className="details"> Somos referencia em diversidade e exclusividade de produtos,imparcialidade, transparência e relacionamento.</p> 
        <a href = '#bottom' className="cv-btn"> Começar</a>
      </div>
    </div>
  );
}

export default Header;
