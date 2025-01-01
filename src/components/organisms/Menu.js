function Menu () {
  return (
    <div
      exit={{ opacity: 0, animationDuration: 1000, transitionDuration: 1000 }}
      className='w-screen h-screen overflow-x-hidden md:flex md:flex-row p-6'
    >
      <div className='md:w-1/3 border-violet-600 border-solid border-2 float-left mr-auto'>
        <div className='w-full'>menu</div>
      </div>
    </div>
  )
}

export default Menu
