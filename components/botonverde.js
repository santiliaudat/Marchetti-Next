import React from 'react'

import PropTypes from 'prop-types'

const Botonverde = (props) => {
  return (
    <>
      <div id="btn-test" className="container">
        <button className="button thqButton">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            padding: var(--dl-space-space-doubleunit);
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            border-color: var(--dl-color-success-primary);
            border-radius: var(--dl-radius-radius-radius24);
            text-decoration: none;
            background-color: var(--dl-color-success-primary);
          }
        `}
      </style>
    </>
  )
}

Botonverde.defaultProps = {
  button: 'Quiero conocerlo',
}

Botonverde.propTypes = {
  button: PropTypes.string,
}

export default Botonverde
