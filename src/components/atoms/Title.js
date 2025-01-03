import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function Title ({ title, size, highlight }) {
  const { theme } = useContext(ThemeContext)

  const t = title.split(' ')
  const editTitle = t.map((x, i) => {
    return (
      <div
        key={i}
        style={{
          color: highlight?.includes(i) ? theme.highlightColor : theme.fontColor
        }}
      >
        {x}
      </div>
    )
  })
  return (
    <div
      className={
        'flex flex-row gap-2 flex-wrap text-3xl font-bold ' +
        (size ? size : 'md:text-5xl')
      }
    >
      {editTitle}
    </div>
  )
}

export default Title
