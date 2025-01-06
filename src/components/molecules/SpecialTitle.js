import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function SpecialTitle ({ title, size, highlight }) {
  const { theme } = useContext(ThemeContext)

  const t = title.split(' ')
  const editTitle = t.map((x, i) => {
    const color = highlight?.includes(i) ? 'transparent' : theme.fontColor
    return (
      <div
        className={highlight?.includes(i) ? 'specialTitle' : ''}
        key={i}
        style={{
          color: color
        }}
      >
        {x}
      </div>
    )
  })
  return (
    <div
      style={{ fontFamily: 'Lato Black' }}
      className={
        'flex flex-row gap-2 flex-wrap text-3xl font-black leading-normal md:leading-normal ' +
        (size ? size : 'md:text-5xl')
      }
    >
      {editTitle}
    </div>
  )
}

export default SpecialTitle
