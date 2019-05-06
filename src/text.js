import React from 'react'

const Text = ({ x, y, angle = 0, ...props }) => [
  <circle
    cx={x}
    cy={y}
    stroke="green"
    strokeWidth="5"
    r="1"
    fill="transparent"
  />,

  <text
    x={x}
    y={y}
    transform={`rotate(${angle} ${x} ${y})`}
    dominantBaseline="middle"
    {...props}
    fill="red"
  >
    {props.children}
  </text>
]

export { Text }
