function NameTitle ({ isLanding }) {
  return (
    <div
      className='md:text-4xl 
      lg:text-4xl 
      xl:text-6xl'
      style={{ fontFamily: 'Lato black' }}
    >
      JOSÉ
      {isLanding && <br />} <div className=''>RODRÍGUEZ CÁCERES</div>
    </div>
  )
}

export default NameTitle
