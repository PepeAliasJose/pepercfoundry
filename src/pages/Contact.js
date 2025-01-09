import { useContext, useEffect } from 'react'
import SequentialLink from '../components/atoms/SequentialLink'
import Title from '../components/atoms/Title'
import MediumStyleText from '../components/molecules/MediumStyleText'
import ThemeContext from '../contexts/ThemeContext'
import ThanksCarousel from '../components/organisms/ThanksCarousel'
import PageContentContainer from '../components/atoms/PageContentContainer'

function Contact () {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    window.scrollTo(0, 0)

    return () => {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <div className='flex flex-col'>
      <PageContentContainer>
        <ThanksCarousel />
        <div
          style={{
            color: theme.fontColor
          }}
          className='w-full flex flex-col gap-6 fixed -ml-5 md:-ml-10 bottom-24 z-20 font-medium'
        >
          <div className='max-w-lg text-xl text-center mx-auto '>
            If you want to{' '}
            <span
              style={{ color: theme.softHighlightColor }}
              className='font-semibold'
            >
              reach me out
            </span>{' '}
            for Partnerships, New projects or just for Consulting:
          </div>
          <div className='max-w-lg text-xl text-center mx-auto font-bold'>
            781peperc@gmail.com - linkedin_link
          </div>
          <div className='max-w-lg text-xl text-center mx-auto'>
            Or download my CV:
          </div>
          <div className='max-w-lg text-xl text-center mx-auto font-bold'>
            CV_Link
          </div>
        </div>
      </PageContentContainer>
    </div>
  )
}

export default Contact
