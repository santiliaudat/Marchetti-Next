import React from 'react'

import PropTypes from 'prop-types'

const Menu = (props) => {
  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <img alt={props.image_alt} src={props.image_src} className="image" />
          <div className="burger-menu">
            <svg viewBox="0 0 1024 1024" className="icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
        <div className="links-container">
          <a href={props.link_Link} className="link anchor thqLink">
            {props.Link}
          </a>
          <a href={props.link_Link1} className="link1 anchor thqLink">
            {props.Link1}
          </a>
          <a href={props.link_Link2} className="link2 anchor thqLink">
            {props.Link2}
          </a>
          <a href={props.link_Link3} className="link3 anchor thqLink">
            {props.Link3}
          </a>
          <a href={props.link_Link4} className="link4 anchor thqLink">
            {props.Link4}
          </a>
          <a href={props.link_Link5} className="link5 anchor thqLink">
            <span className="text">CONTACTO</span>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .image {
            width: 153px;
            height: 46px;
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
          .links-container {
            width: 751px;
            display: flex;
            align-items: flex-start;
            margin-left: 150px;
            margin-right: var(--dl-space-space-tenunits);
            flex-direction: row;
            justify-content: flex-end;
          }
          .link {
            color: #ffffff;
            text-align: right;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link1 {
            color: #ffffff;
            text-align: right;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link2 {
            color: #ffffff;
            text-align: right;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link3 {
            color: #ffffff;
            text-align: right;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link4 {
            color: #ffffff;
            text-align: right;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link5 {
            color: #ffffff;
            text-align: right;
            text-decoration: none;
          }
          .text {
            text-decoration: none;
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
            .links-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Menu.defaultProps = {
  link_Link1: 'https://www.marchettirules.com/conoceme.php',
  Link: 'HOME',
  Link1: 'CONOCEME',
  Link2: 'MARCHETTIRULES',
  link_Link3: 'https://www.marchettirules.com/tienda.php',
  Link4: 'RSERVA TURNO',
  link_Link5: 'https://www.marchettirules.com/contacto.php',
  image_src: '/playground_assets/logo_blanco_enlinea-1000h.png',
  link_Link4: 'https://api.whatsapp.com/send?phone=5491162430189',
  link_Link: 'https://www.marchettirules.com',
  link_Link2: 'https://www.marchettirules.com/marchettirules.php',
  image_alt: 'image',
  Link3: 'TIENDA',
}

Menu.propTypes = {
  link_Link1: PropTypes.string,
  Link: PropTypes.string,
  Link1: PropTypes.string,
  Link2: PropTypes.string,
  link_Link3: PropTypes.string,
  Link4: PropTypes.string,
  link_Link5: PropTypes.string,
  image_src: PropTypes.string,
  link_Link4: PropTypes.string,
  link_Link: PropTypes.string,
  link_Link2: PropTypes.string,
  image_alt: PropTypes.string,
  Link3: PropTypes.string,
}

export default Menu
