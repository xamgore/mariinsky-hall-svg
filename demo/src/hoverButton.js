import React, { Component } from 'react'

export class HoverButton extends Component {
  constructor(props) {
    super(props)

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver() {
    this.props.onHover(true)
  }

  handleMouseOut() {
    this.props.onHover(false)
  }

  render() {
    const propsWithoutChildren = { ...this.props, children: undefined }

    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        {...propsWithoutChildren}
      >
        {this.props.children}
      </div>
    )
  }
}
