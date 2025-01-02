function HighlightText ({ highlight }) {
  return (
    <div className='flex'>
      <div
        className='font-semibold text-2xl text-left'
        style={{ fontFamily: 'Lato bold' }}
      >
        {highlight}
      </div>
    </div>
  )
}

export default HighlightText
