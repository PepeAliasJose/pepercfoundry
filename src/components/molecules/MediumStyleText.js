import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import Title from '../atoms/Title'
import HighlightText from '../atoms/HighlightText'

function MediumStyleText ({ title, highlight, content, size }) {
  const { theme } = useContext(ThemeContext)
  //Bio Sans
  return (
    <div
      style={{ color: theme.fontColor }}
      className={
        'flex flex-col ' +
        (title ? ' sm:flex-col gap-4' : ' sm:flex-row gap-16') +
        (size ? size : '')
      }
    >
      {title && <Title title={title} />}
      {highlight && <HighlightText highlight={highlight} />}
      {content && (
        <div className=' text-left lg:text-justify text-xl'>{content}</div>
      )}
    </div>
  )
}

export default MediumStyleText
