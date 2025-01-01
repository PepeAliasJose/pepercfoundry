import { useState } from 'react'
import { Link } from 'react-router-dom'

function RadialMenuOption ({ data, text, offset, subtitle, to }) {
  const [visible, setVisible] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => {
        setVisible(true)
      }}
      onMouseLeave={() => {
        setVisible(false)
      }}
      //Playfair Display SC
      className='option block z-10 w-fit h-fit leading-none 
      origin-top-right scale-x-90 font-bold text-end'
      style={{
        color: visible ? 'transparent' : '#FFFFFF',
        fontFamily: 'Bio Sans',
        fontSize: '12vw',
        WebkitTextStroke: '2px #FFF'
      }}
      data={data}
      xoffset={offset}
    >
      <div className='tracking-tight origin-top-right whitespace-nowrap'>
        {text}
      </div>
    </Link>
  )
}

export default RadialMenuOption
