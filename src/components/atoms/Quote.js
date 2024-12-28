function Quote ({ quote }) {
  return (
    <div
      className='md:mt-6 md:text-xl md:w-4/5 transition-all ease-linear duration-300'
      style={{ fontFamily: 'Lato' }}
    >
      {quote}
    </div>
  )
}

export default Quote
