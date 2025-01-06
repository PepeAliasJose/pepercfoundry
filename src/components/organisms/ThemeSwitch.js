import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

function ThemeSwitch () {
  const {
    theme,
    setThemeToBase,
    setThemeToBlack,
    setThemeToWhite,
    white,
    black,
    base,
    setColorPicker,
    custom,
    setCustom
  } = useContext(ThemeContext)

  const [show, setShow] = useState(false)
  const [colorValue, setColorValue] = useState(205)

  useEffect(() => {
    if (custom) {
      setColorValue(colorValue)
      setColorPicker(colorValue)
    } else {
      setThemeToBase()
    }
  }, [custom])

  useEffect(() => {
    setColorPicker(colorValue)
  }, [colorValue])

  return (
    <div className='flex flex-row gap-2 cursor-pointer'>
      <div
        className='flex flex-row gap-2 cursor-pointer'
        onClick={() => {
          setShow(!show)
        }}
      >
        Tema:
        <div
          style={{
            backgroundColor: theme.bgColor,
            borderColor: theme.fontColor
          }}
          className='h-6 w-6 border-2 border-solid rounded-full p-1'
        >
          <div
            style={{ backgroundColor: theme.highlightColor }}
            className='w-full h-full rounded-full '
          />
        </div>
      </div>
      {show && (
        <div
          onMouseLeave={() => {
            //setShow(!show)
          }}
          className='flex fixed w-fit top-10 -translate-x-1/2'
        >
          <div
            style={{
              borderColor: theme.fontColor,
              backgroundColor: theme.bgColor
            }}
            className='flex flex-col p-4 border-2 border-solid w-full rounded-2xl gap-3'
          >
            <div className='flex flex-row gap-4 mx-auto'>
              <div
                onClick={setThemeToBase}
                className='flex flex-row gap-2 cursor-pointer'
              >
                <div>Base</div>
                <CircleColor
                  hl={base.bgColor}
                  bg={base.highlightColor}
                  br={theme.fontColor}
                />
              </div>
              <div
                onClick={setThemeToWhite}
                className='flex flex-row gap-2 cursor-pointer'
              >
                <div>Claro</div>
                <CircleColor
                  hl={white.bgColor}
                  bg={white.highlightColor}
                  br={theme.fontColor}
                />
              </div>
              <div
                onClick={setThemeToBlack}
                className='flex flex-row gap-2 cursor-pointer'
              >
                <div>Oscuro</div>
                <CircleColor
                  hl={black.bgColor}
                  bg={black.highlightColor}
                  br={theme.fontColor}
                />
              </div>
            </div>
            <div>
              <Toggle active={custom} setActive={setCustom} />
            </div>
            {custom && (
              <div>
                <Color value={colorValue} picker={setColorValue} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Color ({ value, picker }) {
  const { theme } = useContext(ThemeContext)
  return (
    <input
      onChange={e => {
        picker(e.target.value)
      }}
      id='large-range'
      type='range'
      value={value}
      min={0}
      max={360}
      style={{
        '--c': value,
        '--b': theme.menuColor,
        background:
          'linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%)'
      }}
      className='barraColor w-full h-3 bg-gray-200 rounded-lg 
      appearance-none cursor-pointer thumb'
    ></input>
  )
}

function Toggle ({ active, setActive }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='flex flex-row gap-2'>
      Color personalizado:
      <div
        onClick={() => {
          setActive(!active)
        }}
        style={{ backgroundColor: active ? theme.highlightColor : '#AAAAAA' }}
        className='w-11 h-6 rounded-full p-[1px] cursor-pointer border-[1px] border-solid border-white'
      >
        <div
          style={{ transform: active ? 'translateX(100%)' : '' }}
          className='h-5 w-5 rounded-full bg-white transition-transform'
        />
      </div>
    </div>
  )
}

function CircleColor ({ bg, hl, br }) {
  return (
    <div
      style={{
        backgroundColor: hl,
        borderColor: br
      }}
      className='h-6 w-6 border-2 border-solid rounded-full p-1'
    >
      <div
        style={{ backgroundColor: bg }}
        className='w-full h-full rounded-full cursor-pointer'
      />
    </div>
  )
}

export default ThemeSwitch
