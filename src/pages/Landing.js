import Quote from '../components/atoms/Quote'

function Landing () {
  return (
    <div className='w-full h-screen flex opacity-1 p-10 '>
      <div className='flex self-center -mt-20'>
        <Quote />
      </div>
    </div>
  )
}

export default Landing

/*
<div className='w-fit ml-auto'>
          <div className='flex flex-row gap-8'>
            <div className='w-56'>
              <img
                className='rounded-full border-2 border-black border-solid'
                alt='foto'
                src='./perfil/perfil-1.jpg'
              />
            </div>
            <div className='h-fit my-auto'>
              <NameTitle style={''} />
            </div>
          </div>
        </div>
       */
