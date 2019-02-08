import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg';

import './Controls.css'

class Controls extends PureComponent {
  render () {
    return (
      <div className='controls'>
        <div className='more-controls'>
          {this.props.children}
        </div>
        <div className="button-list">
          <div className="button">
            <img src={logo} alt='place' />
            Place
          </div>
          <div className="button">
            <img src={logo} alt='place' />
            Left
          </div>
          <div className="button">
            <img src={logo} alt='place' />
            Right
          </div>
          <div className="button">
            <img src={logo} alt='place' />
            Advance
          </div>
        </div>
      </div>
    )
  }
}

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default Controls