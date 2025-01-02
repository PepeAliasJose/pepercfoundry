import { useState } from 'react'
import { Link } from 'react-router-dom'

function SequentialLink ({ text, to, right }) {
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
      //Playfair Display SC // Bio Sans
      className='myOption z-10 w-fit h-fit leading-none
  font-bold text-end flex self-end'
      style={{
        color: visible ? '#101010' : '#FFFFFF',
        fontFamily: 'Bio Sans',
        fontSize: '10vw',
        lineHeight: '9vw',
        transformOrigin: 'center right'
      }}
    >
      <div className='-tracking-wider whitespace-nowrap'>{text}</div>
    </Link>
  )
}

export default SequentialLink
