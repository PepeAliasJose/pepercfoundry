import NameTitle from '../atoms/NameTitle'
import Footer from '../molecules/Footer'

function Base () {
  return (
    <div className='absolute w-screen h-screen -m-10 p-10 overflow-y-hidden pointer-events-none'>
      <div className='absolute left-10 top-10'>
        <NameTitle style={''} />
      </div>
      <Footer />
    </div>
  )
}

export default Base
