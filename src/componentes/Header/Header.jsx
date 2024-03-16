// Header.jsx

import './Header.css';
import Menu from "../Menu/Menu"; 

function Header (){
    return(
      <header className='header'>
        
        <div className='contenido'>
          <h1 style={{ fontFamily: 'Maughan Script Regular' }}>Juana's Deco</h1>
        </div>
        <Menu /> 

      </header>
    );
}

export default Header;
