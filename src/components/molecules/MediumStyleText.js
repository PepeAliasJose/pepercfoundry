function MediumStyleText ({ title, highlight, content }) {
  //Bio Sans
  return (
    <div
      className={
        'flex flex-col' + (title ? ' sm:flex-col gap-4' : ' sm:flex-row gap-16')
      }
    >
      {title && (
        <div className='font-bold text-3xl' style={{ fontFamily: 'Lato bold' }}>
          {title}
        </div>
      )}
      {highlight && (
        <div
          className='font-semibold text-2xl text-left'
          style={{ fontFamily: 'Lato bold' }}
        >
          {highlight}
        </div>
      )}
      <div className=' text-left lg:text-justify text-xl'>{content}</div>
    </div>
  )
}

export default MediumStyleText
