import Menu from '../organisms/Menu'

function MenuContainer () {
  return (
    <div
      className='w-full  h-full
      absolute top-0 right-0 pr-10 pointer-events-none
     border-violet-600 border-solid border-2 
      sm:pl-0 overflow-y-scroll z-20'
    >
      <div className='w-full h-full'>
        <Menu />
      </div>
    </div>
  )
}

export default MenuContainer
