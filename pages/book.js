import React from 'react'
import Head from 'next/head'

import Menu from '../components/menu'
import Botonverde from '../components/botonverde'

const Libro = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Libro</title>
          <meta name="description" content="Marchetti" />
          <meta property="og:title" content="Libro" />
          <meta property="og:description" content="Marchetti" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cddaa0fe-329b-4980-ac51-175c84c5aca3/94191307-e28b-495a-bed8-fe16a2119188?org_if_sml=1"
          />
        </Head>
        <Menu></Menu>
        <a href="#download" className="link">
          <div className="hero thqLink"></div>
        </a>
        <div className="services">
          <div className="container1">
            <div className="heading-container">
              <div className="container2">
                <h1 className="heading">
                  Â¿QuÃ© son las
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <span className="text">#MarchettiRulesÂ®</span>
                <h1 className="heading1">?</h1>
              </div>
            </div>
          </div>
          <span className="text01 section-Text">
            <span className="text02">
              Â¡Es hora que replanteemos nuestro paradigma!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>â</span>
            <span className="text07">
              Nuestro ser, alma y espÃ­ritu no fueron diseÃ±ados para sufrir.Â 
            </span>
            <br></br>
            <span></span>
            <span className="text10">
              Somos seres que buscan placer. Estamos acostumbrados a esperar
              tener algo para sentirnos felices, ârealizadosâ.
            </span>
            <span></span>
          </span>
          <span className="text12 section-Text">
            <span className="text13"></span>
            <br></br>
            <span className="text14">
              Te planteo este nuevo paradigma que cambia esta visiÃ³n:
            </span>
            <span></span>
          </span>
        </div>
        <form className="form">
          <div className="container3">
            <div className="container4">
              <input
                type="text"
                name="name"
                required="true"
                placeholder="Nombre y apellido"
                autoComplete="off"
                className="textinput thqTextInput"
              />
            </div>
            <Botonverde></Botonverde>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
          }
          .link {
            display: contents;
          }
          .hero {
            width: 100%;
            height: 433px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/libro_desktop-1000h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .services {
            width: 100%;
            height: 322px;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .container1 {
            width: 100%;
            height: 77px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .heading-container {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .container2 {
            width: 799px;
            height: 53px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .heading {
            color: rgb(43, 70, 85);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text {
            color: #d4411b;
            font-size: 2em;
            font-style: normal;
            font-family: Caveat;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .heading1 {
            color: rgb(43, 70, 85);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text01 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .text02 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text07 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text10 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text12 {
            color: var(--dl-color-gray-700);
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text13 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text14 {
            color: rgb(43, 70, 85);
            font-weight: 700;
            white-space: normal;
          }
          .form {
            width: 100%;
            height: 297px;
            align-self: center;
          }
          .container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 234px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 49px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .textinput {
            width: 586px;
            height: 49px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .heading-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .services {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Libro
