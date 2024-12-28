import { useState } from 'react'
import { Link } from 'react-router-dom'

function RadialMenuOption ({ data, text, offset, selectOption, subtitle, to }) {
  const [visible, setVisible] = useState(false)

  return (
    <Link
      to={to}
      onMouseEnter={() => {
        selectOption(7 - data)
        setVisible(true)
      }}
      onMouseLeave={() => {
        selectOption(0)
        setVisible(false)
      }}
      //border-solid border-black border-2
      className='option block absolute z-10 end-1/2 top-1/2 
        origin-top-right w-96 text-right h-fit leading-none'
      style={{
        color: visible ? '#101010' : '#FFFFFF',
        width: 'fit-content',
        paddingRight: '15px',
        paddingLeft: '15px',
        fontFamily: 'Playfair Display SC',
        fontWeight: 700,
        fontSize: '6vw',
        scale: '0.2 1'
      }}
      data={data}
      xoffset={offset}
    >
      {visible && (
        <img
          alt='bg'
          src={'./menuBg/bg' + (6 - data) + '.svg'}
          className='absolute -z-20 mt-1 -ml-2'
        />
      )}
      <div className=' tracking-tight origin-top-right whitespace-nowrap'>
        {text}
      </div>
      {visible && (
        <div
          className='text-xs text-white px-3 py-0.5 rounded-md w-fit tracking-wide 
          float-end font-light -mt-1 mr-3'
          style={{ backgroundColor: '#202020', fontFamily: 'Lato' }}
        >
          {subtitle}
        </div>
      )}
    </Link>
  )
}

export default RadialMenuOption
