import React from 'react'
import { Text } from './text'


const ru = {
  balcony: 'балкон',
  left_side: 'левая сторона',
  right_side: 'правая сторона',
  box_d: 'ложа д',
  stalls: 'партер',
  stalls_boxes: 'бенуар',
  dress_circle: 'бельэтаж',
  first_tier: '1ый ярус',
  lettered_rows: 'литерные ряды',
  stage: 'сцена',
}

const en = {
  balcony: 'balcony',
  left_side: 'left side',
  right_side: 'right side',
  box_d: 'box d',
  stalls: 'stalls',
  stalls_boxes: 'stalls boxes',
  dress_circle: 'dress circle',
  first_tier: '1st tier',
  lettered_rows: 'lettered rows',
  stage: 'stage',
}


export default ({ width = 800, height = 720, className, isRU = true }) => {
  const [x, y] = [54, 292]
  const [x2, y2] = [675, 290]

  console.log('x', x)
  console.log('y', y)


  const i18n = isRU ? ru : en

  return (
    <svg width={width} height={height} className={className} viewBox="0 0 800 720" xmlns="http://www.w3.org/2000/svg">
      {/*#b0aaa2*/}
      {/*<circle cx={x} cy={y} stroke="green" strokeWidth="5" r="1" fill="transparent"/>*/}
      <circle cx={x2} cy={y2} stroke="blue" strokeWidth="5" r="1" fill="transparent"/>

      <g transform="" fontVariant="all-small-caps">

        <path strokeWidth="1" fill="transparent" stroke="red"
              d="M 733 586 V 400 C 735 345, 705 160, 505 116 L 477 180 C 590 200, 675 290, 680 415 V 586 H 733"/>

        <path strokeWidth="1" fill="transparent" stroke="red"
              d="M 69 586 V400 C 70 345, 100 160, 300 116 L 328 180 C 215 200, 130 290, 125 415 V 586 H 69"/>

        <path strokeWidth="1" fill="transparent" stroke="black"
              d="M 69 552 H 11 V 348 Q 55 38, 372 22 H 428 Q 745 38, 789 348 V 552 H 733 V 400 C 735 340, 700 102, 400 106 C 105 105, 67 345, 69 400 V 552"/>


        <Text x={402.5} y={31} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.balcony}/>
        <Text x={402.5} y={182.5} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.box_d}/>
        <Text x={402.5} y={291} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.stalls_boxes}/>
        <Text x={402.5} y={588} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.stalls}/>
        <Text x={402.5} y={588} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.stalls}/>
        <Text x={402.5} y={647.5} fill="#716854" fontSize="77%"
              textAnchor="middle" children={i18n.lettered_rows}/>

        <Text x={42} y={500} angle={-90} fill="#c2a15f" letterSpacing="-0.6px"
              children={i18n.right_side}/>
        <Text x={763} y={410} angle={90} fill="#c2a15f" letterSpacing="-0.6px"
              children={i18n.left_side}/>

        <Text x={54} y={292} angle={-66.5} fill="#716854" fontSize="70%"
              children={i18n.balcony}/>
        <Text x={737} y={265} angle={70} fill="#716854" fontSize="79%"
              children={i18n.balcony}/>

      </g>
    </svg>
  )
}
