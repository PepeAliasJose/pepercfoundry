function StyledText ({ title, position, date, content, company }) {
  const t = title.split(' ')

  const editTitle = t.map((x, i) => {
    return (
      <div
        key={i * 0.1}
        style={{ color: i == position ? '#3986AC' : '#101010' }}
      >
        {x}
      </div>
    )
  })

  return (
    <div className='flex flex-col w-fit gap-3'>
      <div className=' flex flex-row gap-3 w-fit'>
        <div className='font-extralight self-end leading-none'>{company}</div>
        <div className='text-sm font-bold self-end leading-none'>{date}</div>
      </div>
      <div className='text-2xl sm:text-3xl flex flex-row gap-2 font-bold whitespace-nowrap'>
        {editTitle}
      </div>
      <div>{content}</div>
    </div>
  )
}

export default StyledText
