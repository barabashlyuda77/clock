import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Clock from '../../components/clock/clock.js'

export const PageLayout = ({ children }) => (
    <div>
      <Clock />
    </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
