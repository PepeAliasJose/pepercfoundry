function Quote () {
  return (
    <div
      className='w-fit transition-all ease-linear 
      duration-300 flex flex-col gap-3 
      mx-auto text-2xl mt-60 
      sm:mx-0 sm:mt-72
      sm:mr-auto sm:text-4xl z-50'
      style={{ fontFamily: 'Lato black', WebkitTextStroke: '1px black' }}
    >
      <div className='inline-flex gap-2'>
        <div className='text-6xl sm:text-7xl text-transparent'>HOLA</div>
        <div className='text-nowrap mt-auto'>soy un </div>
      </div>
      <h1 className='text-3xl sm:text-5xl text-transparent'>DESARROLLADOR</h1>
    </div>
  )
}

export default Quote
