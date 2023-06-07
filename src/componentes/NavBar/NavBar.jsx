import "./NavBar.css"
import CardWidget from "../CardWidget/CardWidget"

const NavBar = () => {
  return (
    <header>
      <div className="header__top">
        <p className="header__p">
          Internet para estar conectados
        </p>
        <div className="header__icons">
          <a href="https://www.instagram.com/gaming.sic/">
            <img src="./img/instagram_icon.png" alt="Instagram" />
          </a>
          <a href>
            <img src="./img/whatsapp_icon.png" alt="Whatsapp" />
          </a>
          <a href="https://www.facebook.com/SICCOMPUTACION">
            <img src="./img/facebook_icon.png" alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="logo">
        <h1 href="index.html">
          <img className="logo__img" src="./img/LOGO_BLANCO.PNG" alt="LOGO" />
        </h1>
      </div>
      <nav>
        <ul className="header__ul button">
          <li className="button__li--select"><h3 ClassName="button__li--a" href="index.html">Inicio</h3></li>
          <li ClassName="button__li"><h3 href="./pages/servicios_internet.html">Internet</h3></li>
          <li ClassName="button__li"><h3 href="./pages/servicios_gaming.html">Gaming</h3></li>
          <li ClassName="button__li"><h3 href="./pages/nosotros.html">Nosotros</h3></li>
          <li ClassName="button__li"><h3 href="./pages/contacto.html">Contacto</h3></li>
          <CardWidget/>
        </ul>
       
      </nav>
      <h1 className="titulo"> GAMING SIC</h1>
    </header>
  )
}

export default NavBar