import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function DownArrow () {
  const { theme } = useContext(ThemeContext)
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 150 150'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M132.996 48C137.138 48 140.496 51.3579 140.496 55.5C140.496 59.6421 137.138 63 132.996 63V48ZM2.6923 60.8033C-0.236628 57.8744 -0.236628 53.1256 2.6923 50.1967L50.422 2.46699C53.3509 -0.461941 58.0997 -0.461941 61.0286 2.46699C63.9575 5.39592 63.9575 10.1447 61.0286 13.0736L18.6022 55.5L61.0286 97.9264C63.9575 100.855 63.9575 105.604 61.0286 108.533C58.0997 111.462 53.3509 111.462 50.422 108.533L2.6923 60.8033ZM132.996 63H7.99561V48H132.996V63Z'
        fill={theme.fontColor}
      />
    </svg>
  )
}

export default DownArrow
