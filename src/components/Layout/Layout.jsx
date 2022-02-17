import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import './Layout.css'
import sillon from '../../containers/MueblesSlider/muebles/sofa_blanco.png'
import mesa from '../../containers/MueblesSlider/muebles/mesa_negra.png'
import silla from '../../containers/MueblesSlider/muebles/silla_negra.png'

function Layout() {

  const [active, setActive] = useState(false)

  const [sofaShown, setSofaShown] = useState(false)
  const [sillaShown, setSillaShown] = useState(false)
  const [mesaShown, setMesaShown] = useState(false)

  const [collectionItemsActive, setCollectionItemsActive] = useState(false)
  const [designItemsActive, setDesignItemsActive] = useState(false)
  const [craftmanshipItemsActive, setCraftmanshipItemsActive] = useState(false)
  const [ethicsItemsActive, setEthicsItemsActive] = useState(false)

  function handleNav() {
    setActive(!active)
  }



  return (
    <>
    <header className="app-header">
      <h2 className={`logo ${active === true ? "white" : ""}`}>mater</h2>

      <div className={`burger ${active === true ? "open" : ""}`} onClick={handleNav}>
        <div className={`line top ${active === true ? "white top-active" : ""}`}/>
        <div className={`line middle ${active === true ? "white middle-active" : ""}`}/>
        <div className={`line bottom ${active === true ? "white bottom-active" : ""}`}/>
      </div>

      <nav className={`menu ${active === true ? "active" : ""}`}>
        
      {/*
        Una mejor forma de optimizar este codigo seria exportar el menu a un array js externo, para hacerle un map
        y obtener un codigo mas legible con el mismo resultado, tambien optimizando el uso de los states e imagenes.
      */}

        <div className="list-container">
        <Fade when={active === true} bottom delay={800}>
          <ul className="main-list">
            <li className="main-item" onMouseEnter={() => setCollectionItemsActive(true)} onMouseLeave={() => setCollectionItemsActive(false)}>Collection
            <Fade when={collectionItemsActive === true} top>
              <ul className={`sub-list ${collectionItemsActive === true ? "list-active" : ""}`}>
                  <li className="sub-item" onMouseEnter={() => setSofaShown(true)} onMouseLeave={() => setSofaShown(false)}>Sillon</li>
                  <li className="sub-item" onMouseEnter={() => setMesaShown(true)} onMouseLeave={() => setMesaShown(false)}>Mesa</li>
                  <li className="sub-item" onMouseEnter={() => setSillaShown(true)} onMouseLeave={() => setSillaShown(false)}>Silla</li>
              </ul>
            </Fade>
            </li>
            <li className="main-item" onMouseEnter={() => setDesignItemsActive(true)} onMouseLeave={() => setDesignItemsActive(false)}>Design
              <Fade when={designItemsActive === true} top>
                <ul className={`sub-list ${designItemsActive === true ? "list-active" : ""}`}>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                </ul>
              </Fade>
            </li>
            <li className="main-item" onMouseEnter={() => setCraftmanshipItemsActive(true)} onMouseLeave={() => setCraftmanshipItemsActive(false)}>Craftmanship
              <Fade when={craftmanshipItemsActive === true} top>
                <ul className={`sub-list ${craftmanshipItemsActive === true ? "list-active" : ""}`}>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                </ul>
              </Fade>
            </li>
            <li className="main-item" onMouseEnter={() => setEthicsItemsActive(true)} onMouseLeave={() => setEthicsItemsActive(false)}>Ethics
              <Fade when={ethicsItemsActive === true} top>
                <ul className={`sub-list ${ethicsItemsActive === true ? "list-active" : ""}`}>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                  <li className="sub-item">Designs</li>
                </ul>
              </Fade>
            </li>
          </ul>
          <ul className="contact-list">
            <li className="contact-item">About</li>
            <li className="contact-item">Contact</li>
            <li className="contact-item">Dealers</li>
          </ul>
          <ul className="contact-list">
            <li className="contact-item">News</li>
            <li className="contact-item">Care</li>
            <li className="contact-item">Press</li>
          </ul>
        </Fade>
        </div>
        
        <section className="flashimage-container">
          <Fade bottom when={sofaShown === true}>
            <img src={sillon} alt="Sofa Blanco" className="furniture"/>
          </Fade>
          <Fade bottom when={mesaShown === true}>
            <img src={mesa} alt="Sofa Blanco" className="furniture"/>
          </Fade>
          <Fade bottom when={sillaShown === true}>
            <img src={silla} alt="Sofa Blanco" className="furniture"/>
          </Fade>
        </section>

      </nav>
    </header>
    </>
  )
}

export default Layout;