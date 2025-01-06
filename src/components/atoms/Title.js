import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function Title ({ title, size, highlight }) {
  const { theme } = useContext(ThemeContext)

  const t = title.split(' ')
  const editTitle = t.map((x, i) => {
    const color = highlight?.includes(i)
      ? theme.highlightColor
      : theme.softHighlightColor
    return (
      <div
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
      style={{ fontFamily: 'Bio Sans' }}
      className={
        'flex flex-row gap-2 flex-wrap text-3xl font-black ' +
        (size ? size : 'md:text-5xl')
      }
    >
      {editTitle}
    </div>
  )
}

export default Title
