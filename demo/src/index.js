import React, { Component } from 'react'
import { render } from 'react-dom'
import cn from 'classnames'
import './style.css'

import MariinskyHall from '../../src'
import { HoverButton } from './hoverButton'

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = { details: true, svg: true, isRU: true }
    this.simplifyOnHover = this.simplifyOnHover.bind(this)
    this.turnOffSvgOnHover = this.turnOffSvgOnHover.bind(this)
    this.changeLangOnHover = this.changeLangOnHover.bind(this)
  }

  simplifyOnHover(mouseIsOver) {
    this.setState({ details: !mouseIsOver })
  }

  turnOffSvgOnHover(mouseIsOver) {
    this.setState({ svg: !mouseIsOver })
  }

  changeLangOnHover(mouseIsOver) {
    this.setState({ isRU: !mouseIsOver })
  }

  render() {
    const simplified = !this.state.details
    const noSVG = !this.state.svg
    const ru = this.state.isRU
    const en = !this.state.isRU

    return [
      <HoverButton onHover={this.simplifyOnHover} className="button left">
        simplify
      </HoverButton>,

      <HoverButton onHover={this.turnOffSvgOnHover} className="button right">
        svg off
      </HoverButton>,

      <HoverButton onHover={this.changeLangOnHover} className="button top">
        lang
      </HoverButton>,

      <MariinskyHall
        isRU={ru} className={cn('hall', { simplified, noSVG, ru, en })}/>,
    ]
  }
}

render(<Demo/>, document.querySelector('#demo'))
