import { useContext } from 'react'
import Title from '../atoms/Title'
import MediumStyleText from './MediumStyleText'
import ThemeContext from '../../contexts/ThemeContext'

function StyledText ({ title, highlight, date, content, company, size }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      style={{ color: theme.fontColor }}
      className={'flex flex-col gap-3 ' + (size ? size : '')}
    >
      <div className=' flex flex-row gap-3 w-fit'>
        <div className='font-extralight self-end leading-none'>{company}</div>
        <div className='text-sm font-bold self-end leading-none'>{date}</div>
      </div>
      <div className='whitespace-nowrap'>
        <Title title={title} highlight={highlight} size={'sm:text-3xl'} />
      </div>
      <MediumStyleText content={content} />
    </div>
  )
}

export default StyledText
