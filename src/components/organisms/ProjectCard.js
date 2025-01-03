import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import Title from '../atoms/Title'
import MediumStyleText from '../molecules/MediumStyleText'

function ProjectCard ({ title, content, photo, stats, links, highlight }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{ color: theme.fontColor }} className='flex flex-col gap-5'>
      <div className=' flex flex-row gap-8'>
        <div className='min-w-64'>
          <img className='rounded-3xl' src='./perfil/perfil-1.jpg' />
        </div>
        <div className='flex flex-col gap-8'>
          <Title title={title} size={'md:text-4xl'} highlight={highlight} />
          <MediumStyleText content={content} />
          <div> {links}</div>
        </div>
      </div>
      <div className='text-lg font-bold'>{stats}</div>
    </div>
  )
}

export default ProjectCard
