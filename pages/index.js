import React from 'react'
import Head from 'next/head'

import ServiceCard from '../components/service-card'
import Botonverde from '../components/botonverde'

const InviernoEnfocado = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Marchetti</title>
          <meta name="description" content="Marchetti" />
          <meta property="og:title" content="Marchetti" />
          <meta property="og:description" content="Marchetti" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cddaa0fe-329b-4980-ac51-175c84c5aca3/94191307-e28b-495a-bed8-fe16a2119188?org_if_sml=1"
          />
        </Head>
        <div className="navbar-container">
          <div className="navbar">
            <div className="left-side">
              <a href="https://www.marchettirules.com/" className="link">
                <img
                  alt="image"
                  src="/playground_assets/logoheader-1000h.png"
                  className="image thqLink"
                />
              </a>
              <div className="burger-menu">
                <svg viewBox="0 0 1024 1024" className="icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div className="right-side">
              <div className="container01">
                <svg viewBox="0 0 1024 1024" className="icon02">
                  <path d="M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z"></path>
                </svg>
                <a
                  href="https://www.facebook.com/LicMatiasMarchetti"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link1 thqLink"
                >
                  <span>f</span>
                  <span>acebook</span>
                </a>
              </div>
              <div className="container02">
                <svg viewBox="0 0 877.7142857142857 1024" className="icon04">
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <a
                  href="https://www.instagram.com/matias.marchetti"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link2 thqLink"
                >
                  instagram
                </a>
              </div>
              <div className="container03">
                <svg viewBox="0 0 1024 1024" className="icon06">
                  <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
                </svg>
                <a
                  href="https://www.youtube.com/channel/UCLqCGfv-_ColrjRT9gqejdQ"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link3 thqLink"
                >
                  <span>youtube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="#download" className="link4">
          <div className="hero thqLink"></div>
        </a>
        <div className="que-son">
          <div className="container04">
            <div className="heading-container">
              <div className="container05">
                <h1 className="heading">
                  Â¿QuÃ© son las
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <span className="text03">#MarchettiRulesÂ®</span>
                <h1 className="heading1">?</h1>
              </div>
            </div>
          </div>
          <span className="text04 section-Text">
            <span className="text05">
              Â¡Es hora que replanteemos nuestro paradigma!
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>â</span>
            <span className="text10">
              Nuestro ser, alma y espÃ­ritu no fueron diseÃ±ados para sufrir.Â 
            </span>
            <br></br>
            <span></span>
            <span className="text13">
              Somos seres que buscan placer. Estamos acostumbrados a esperar
              tener algo para sentirnos felices, ârealizadosâ.
            </span>
            <span></span>
          </span>
          <span className="text15 section-Text">
            <span className="text16"></span>
            <br></br>
            <span className="text17">
              Te planteo este nuevo paradigma que cambia esta visiÃ³n:
            </span>
            <span></span>
          </span>
          <div className="container06">
            <div className="cards-container">
              <ServiceCard
                btn_text="SABER MAS"
                image_src="/playground_assets/ser-1000h.jpg"
              ></ServiceCard>
              <ServiceCard
                title="HACER"
                btn_text="VER VIDEO"
                image_src="/playground_assets/hacer-1000h.jpg"
                description="Trabajando y alimentando tu mente, comenzarÃ¡s a enamorarte del proceso."
              ></ServiceCard>
              <ServiceCard
                title="TENER"
                btn_text="CONOCER MAS"
                image_src="/playground_assets/tener-1000h.jpg"
                description="Â¡Lograste tu objetivo! Ahora comienza tu nuevo estilo de vida."
              ></ServiceCard>
            </div>
          </div>
        </div>
        <div className="image1">
          <img
            alt="image"
            src="/playground_assets/medio_desktop-1000h.png"
            className="image2"
          />
        </div>
        <div className="container07">
          <h1 className="heading2">
            Â¿QuÃ© contiene el PDF
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <span className="text19">Invierno enfocado</span>
          <h1 className="heading3">?</h1>
        </div>
        <div id="download" className="container08">
          <div className="container09">
            <span className="text20">
              <br></br>
              <span className="text21">
                Si te pasa que al mÃ¡s mÃ­nimo descenso de temperatura te dan
                ganas de consumir alimentos hipercalÃ³ricos para aumentar tu
                temperatura corporal y despuÃ©s sientes culpaâ¦
              </span>
              <br className="br2"></br>
              <span>â</span>
              <br className="br3"></br>
              <span className="text23">
                Este PDF te ayudarÃ¡ a crear recetas mÃ¡s nutritivas que obtienen
                el mismo resultado que buscas. AdemÃ¡s de una lista de alimentos
                que puedes comprar.
              </span>
              <br className="br4"></br>
              <span>â</span>
              <br className="br5"></br>
              <span className="text25">
                AnÃ­mate a enfocarte cocinando algo diferente, Â¡apto para toda la
                familia!
              </span>
              <br className="br6"></br>
            </span>
            <span className="text26">
              <span className="text27">DescÃ¡rgalo</span>
              <span className="text28">Â </span>
              <span className="text29">GRATIS!</span>
            </span>
            <a
              href="https://www.marchettirules.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="button thqButton thqLink"
            >
              Descargar PDF Gratis
            </a>
          </div>
          <div className="container10">
            <img
              alt="image"
              src="/playground_assets/pad-1000h.png"
              className="image3"
            />
            <img
              alt="image"
              src="/playground_assets/hoja_02_desktop-1000h.jpg"
              className="image4"
            />
          </div>
        </div>
        <div className="separador"></div>
        <div className="container11">
          <div className="container12">
            <h1 className="heading4">
              {' '}
              ConocÃ© mÃ¡s sobre el innovador metodo
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="text30">
              <span className="text31">#MarchettiRulesÂ®</span>
            </span>
          </div>
          <Botonverde></Botonverde>
        </div>
        <div className="separador1"></div>
        <div className="container13">
          <div className="container14">
            <h1 className="heading5">
              {' '}
              Â¿QuÃ© dicen
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="text32">
              <span className="text33">mis enfocad@s</span>
            </span>
            <h1 className="heading6">?</h1>
          </div>
          <div className="container15">
            <div className="container16">
              <h1 className="text34">
                <span className="text35">Si se puede</span>
              </h1>
              <span className="text36">
                <span>12 Mayo,</span>
                <span> 2020</span>
              </span>
              <span>
                <span className="text40">
                  Estoy en 93kg. Pesaba 152 kg. VolvÃ­ a correr y no me canso, no
                  me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                  valoro lo importante de organizar mis comidas y hacerlas
                  nutritivas, Â¡tengo mÃ¡s energÃ­a que antes!
                </span>
              </span>
              <span className="text41">
                <span className="text42">Julio | BogotÃ¡, Colombia</span>
                <span className="text43">&amp;#8203;</span>
              </span>
            </div>
            <div className="container17">
              <h1 className="text44">
                <span className="text45">Si se puede</span>
              </h1>
              <span className="text46">
                <span>12 Mayo,</span>
                <span> 2020</span>
              </span>
              <span>
                <span className="text50">
                  Estoy en 93kg. Pesaba 152 kg. VolvÃ­ a correr y no me canso, no
                  me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                  valoro lo importante de organizar mis comidas y hacerlas
                  nutritivas, Â¡tengo mÃ¡s energÃ­a que antes!
                </span>
              </span>
              <span className="text51">
                <span className="text52">Julio | BogotÃ¡, Colombia</span>
                <span className="text53">&amp;#8203;</span>
              </span>
            </div>
          </div>
          <div className="container18">
            <div className="container19">
              <h1 className="text54">
                <span className="text55">Si se puede</span>
              </h1>
              <span className="text56">
                <span>12 Mayo,</span>
                <span> 2020</span>
              </span>
              <span>
                <span className="text60">
                  Estoy en 93kg. Pesaba 152 kg. VolvÃ­ a correr y no me canso, no
                  me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                  valoro lo importante de organizar mis comidas y hacerlas
                  nutritivas, Â¡tengo mÃ¡s energÃ­a que antes!
                </span>
              </span>
              <span className="text61">
                <span className="text62">Julio | BogotÃ¡, Colombia</span>
                <span className="text63">&amp;#8203;</span>
              </span>
            </div>
            <div className="container20">
              <h1 className="text64">
                <span className="text65">Si se puede</span>
              </h1>
              <span className="text66">
                <span>12 Mayo,</span>
                <span> 2020</span>
              </span>
              <span>
                <span className="text70">
                  Estoy en 93kg. Pesaba 152 kg. VolvÃ­ a correr y no me canso, no
                  me duelen las rodillas. Estoy contento, y muy enfocado. Hoy
                  valoro lo importante de organizar mis comidas y hacerlas
                  nutritivas, Â¡tengo mÃ¡s energÃ­a que antes!
                </span>
              </span>
              <span className="text71">
                <span className="text72">Julio | BogotÃ¡, Colombia</span>
                <span className="text73">&amp;#8203;</span>
              </span>
            </div>
          </div>
        </div>
        <div className="separador2"></div>
        <div className="container21">
          <div className="container22">
            <h1 className="heading7">
              Si tenÃ©s alguna duda o
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="text74">
              <span className="text75">comentario</span>
            </span>
          </div>
          <a
            href="https://www.marchettirules.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="link5 thqButton thqLink"
          >
            Consultanos por wathsapp
          </a>
        </div>
        <div className="separador3"></div>
        <div className="footer-container">
          <div className="footer">
            <div className="social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="icon08">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon10">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="copyright-container">
              <svg viewBox="0 0 1024 1024" className="icon14">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="link6 anchor">MatÃ­as Marchetti, 2021</span>
            </div>
          </div>
        </div>
        <form className="form"></form>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar {
            width: 1066px;
            height: 69px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .left-side {
            width: 239px;
            height: 59px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .link {
            display: contents;
          }
          .image {
            width: 186px;
            height: 100%;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon {
            width: 36px;
            height: 36px;
          }
          .right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container01 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .icon02 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
          }
          .link1 {
            fill: #4da07f;
            color: #4da07f;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .container02 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .icon04 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
          }
          .link2 {
            color: var(--dl-color-success-primary);
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .container03 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .icon06 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
          }
          .link3 {
            color: var(--dl-color-success-primary);
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .link4 {
            display: contents;
          }
          .hero {
            width: 100%;
            height: 100%;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            background-size: auto;
            justify-content: center;
            background-image: url('/playground_assets/header_marchetti-1000h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .que-son {
            width: 1071px;
            height: 812px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .container04 {
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
          .container05 {
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
          .text03 {
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
          .text04 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .text05 {
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
          .text13 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text15 {
            color: var(--dl-color-gray-700);
            margin-top: var(--dl-space-space-tripleunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text16 {
            color: rgb(43, 70, 85);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .text17 {
            color: rgb(43, 70, 85);
            font-weight: 700;
            white-space: normal;
          }
          .container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 555px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .cards-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .image1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .image2 {
            height: 100%;
            object-fit: cover;
          }
          .container07 {
            width: 100%;
            height: 85px;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .heading2 {
            color: rgb(43, 70, 85);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text19 {
            color: #d4411b;
            font-size: 2em;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Caveat;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .heading3 {
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .container08 {
            width: 1122px;
            height: 595px;
            margin: var(--dl-space-space-tripleunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .container09 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text20 {
            padding: var(--dl-space-space-doubleunit);
            align-self: flex-start;
          }
          .text21 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .br2 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .br3 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .text23 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .br4 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .br5 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .text25 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .br6 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .text26 {
            margin: var(--dl-space-space-tripleunit);
            font-size: 3em;
            align-self: center;
          }
          .text27 {
            color: rgb(108, 117, 125);
            white-space: normal;
          }
          .text28 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .text29 {
            color: rgb(43, 70, 85);
            white-space: normal;
          }
          .button {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-danger-700);
            border-radius: var(--dl-radius-radius-radius24);
            text-decoration: none;
            background-color: var(--dl-color-danger-700);
          }
          .container10 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .image3 {
            width: 363px;
            height: 316px;
            align-self: center;
            object-fit: cover;
          }
          .image4 {
            width: 379px;
            height: 252px;
            align-self: center;
            object-fit: cover;
          }
          .separador {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .container11 {
            width: 1090px;
            height: 196px;
            margin: var(--dl-space-space-fourunits);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-style: dotted;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: center;
          }
          .heading4 {
            color: rgb(43, 70, 85);
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text30 {
            color: #d4411b;
            font-size: 2em;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Caveat;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text31 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .separador1 {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .container13 {
            width: 1093px;
            height: 726px;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container14 {
            flex: 0 0 auto;
            width: 516px;
            height: auto;
            display: flex;
            align-self: center;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .heading5 {
            color: rgb(43, 70, 85);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text32 {
            color: #d4411b;
            font-size: 2.5em;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Caveat;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text33 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .heading6 {
            color: rgb(43, 70, 85);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .container15 {
            width: 100%;
            height: 297px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .container16 {
            width: 50%;
            height: 271px;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text34 {
            font-family: Caveat;
          }
          .text35 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .text36 {
            color: var(--dl-color-gray-700);
          }
          .text40 {
            color: var(--dl-color-gray-500);
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
            background-color: var(--dl-color-gray-white);
          }
          .text41 {
            color: var(--dl-color-gray-700);
            background-color: var(--dl-color-gray-white);
          }
          .text42 {
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
          }
          .text43 {
            font-weight: 400;
          }
          .container17 {
            width: 50%;
            height: 271px;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text44 {
            font-family: Caveat;
          }
          .text45 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .text46 {
            color: var(--dl-color-gray-700);
          }
          .text50 {
            color: var(--dl-color-gray-500);
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
            background-color: var(--dl-color-gray-white);
          }
          .text51 {
            color: var(--dl-color-gray-700);
            background-color: var(--dl-color-gray-white);
          }
          .text52 {
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
          }
          .text53 {
            font-weight: 400;
          }
          .container18 {
            width: 100%;
            height: 299px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .container19 {
            width: 50%;
            height: 271px;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text54 {
            font-family: Caveat;
          }
          .text55 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .text56 {
            color: var(--dl-color-gray-700);
          }
          .text60 {
            color: var(--dl-color-gray-500);
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
            background-color: var(--dl-color-gray-white);
          }
          .text61 {
            color: var(--dl-color-gray-700);
            background-color: var(--dl-color-gray-white);
          }
          .text62 {
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
          }
          .text63 {
            font-weight: 400;
          }
          .container20 {
            width: 50%;
            height: 271px;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            align-self: flex-start;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text64 {
            font-family: Caveat;
          }
          .text65 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
            background-color: rgb(255, 255, 255);
          }
          .text66 {
            color: var(--dl-color-gray-700);
          }
          .text70 {
            color: var(--dl-color-gray-500);
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
            background-color: var(--dl-color-gray-white);
          }
          .text71 {
            color: var(--dl-color-gray-700);
            background-color: var(--dl-color-gray-white);
          }
          .text72 {
            display: inline;
            font-weight: 400;
            white-space: pre-wrap;
          }
          .text73 {
            font-weight: 400;
          }
          .separador2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .container21 {
            width: 100%;
            height: 196px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .container22 {
            width: 962px;
            height: 78px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: center;
          }
          .heading7 {
            color: rgb(43, 70, 85);
            margin: 0px;
            align-self: center;
            text-align: center;
          }
          .text74 {
            color: #d4411b;
            font-size: 2.5em;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Caveat;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
            background-color: var(--dl-color-gray-900);
          }
          .text75 {
            color: rgb(212, 65, 27);
            display: inline;
            font-weight: 700;
            white-space: pre-wrap;
          }
          .link5 {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-doubleunit);
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            border-color: var(--dl-color-danger-700);
            text-decoration: none;
            background-color: var(--dl-color-danger-700);
            border-top-left-radius: var(--dl-radius-radius-radius24);
            border-top-right-radius: var(--dl-radius-radius-radius24);
            border-bottom-left-radius: var(--dl-radius-radius-radius24);
            border-bottom-right-radius: var(--dl-radius-radius-radius24);
          }
          .link5:hover {
            border-color: var(--dl-color-success-primary);
            background-color: var(--dl-color-success-primary);
          }
          .separador3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .icon08 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon10 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon12 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
          }
          .copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon14 {
            fill: var(--dl-color-success-primary);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .link6 {
            fill: var(--dl-color-success-primary);
            color: var(--dl-color-success-primary);
          }
          .form {
            width: 200px;
            height: 100px;
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .heading-container {
              width: 100%;
            }
            .cards-container {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .que-son {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .image1 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default InviernoEnfocado
