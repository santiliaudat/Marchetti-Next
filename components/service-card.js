import React from 'react'

import PropTypes from 'prop-types'

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <div className="image">
          <img alt={props.image_alt} src={props.image_src} className="image1" />
        </div>
        <h3 className="text card-Heading">{props.title}</h3>
        <span className="text1">{props.description}</span>
        <a
          href={props.btn_link}
          target="_blank"
          rel="noreferrer noopener"
          className="link anchor thqLink"
        >
          {props.btn_text}
        </a>
      </div>
      <style jsx>
        {`
          .service-card {
            width: 30%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: center;
          }
          .image {
            width: 204px;
            height: 204px;
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/ser-1000h.jpg');
            background-position: center;
          }
          .image1 {
            object-fit: cover;
          }
          .text {
            color: rgb(43, 70, 85);
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            color: rgb(43, 70, 85);
            font-size: 16px;
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .link {
            color: var(--dl-color-gray-white);
            align-self: center;
            margin-top: var(--dl-space-space-doubleunit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius24);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-danger-700);
          }
          @media (max-width: 767px) {
            .service-card {
              width: 65%;
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .service-card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ServiceCard.defaultProps = {
  btn_link: 'https://marchettirules.com',
  image_src:
    '/playground_assets/whatsapp%20image%202021-07-14%20at%2023.18.53-1000h.jpeg',
  image_alt: 'image',
  title: 'SER',
  btn_text: 'Saber mÃ¡s',
  description:
    'Si quieres ser feliz y sentirte bien con tu cuerpo, acuÃ©rdate que no hay 2 como tÃº.',
}

ServiceCard.propTypes = {
  btn_link: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  btn_text: PropTypes.string,
  description: PropTypes.string,
}

export default ServiceCard
