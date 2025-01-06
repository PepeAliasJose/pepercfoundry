function PageContentContainer ({ children }) {
  return (
    <div
      className='border-2_border-purple-400_border-solid 
    w-screen min-h-screen pt-20 md:pt-40 pb-40 px-5 md:px-10 relative z-40'
    >
      {children}
    </div>
  )
}

export default PageContentContainer
