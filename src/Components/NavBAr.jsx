import React, {useState}from 'react';
import logo  from '../Assets/logo-vert-white.png';

function NavBAr() {

  const [nav, setnav] = useState(false);

  const changebackground = () => {
    if(window.scrollY >= 50){
      setnav(true);
    }else{
      setnav(false);
    }
  }
  window.addEventListener('scroll', changebackground);

  return (
   <nav className = {nav ? 'nav active' : 'nav'}>
     <a href='#top' className='logo'>
        <img src={logo} alt= ''/>
     </a>
     <input type="checkbox" className='menu-btn' id = 'menu-btn'/>
     <label className='menu-icon' id='menu-icon'>
      <span className='nav-icon'></span>
     </label>
     <ul className='menu'>
        <li><a href='#top' className='active'> Home </a></li>
        <li><a href='#top'> Investir </a></li>
        <li><a href='#top'> Sobre nos </a></li>
        <li><a href='#top'> Abra sua conta </a></li>

     </ul>

    </nav>
  )
}

export default NavBAr;