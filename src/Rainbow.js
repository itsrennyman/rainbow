import React, { useState } from 'react'
import Bow from './Bow'
import TilesContainer from './TilesContainer'
import defaultPalette from './utils/default-palette'

const notAllowed = ['transparent', 'current', 'white', 'black']

const humanize = (color, value) => `${color}-${value}`

const cleanColors = (palette, exclude) =>
  Object.keys(palette)
    .filter((key) => ![...notAllowed, ...exclude].includes(key))
    .reduce((obj, key) => {
      obj[key] = palette[key]
      return obj
    }, {})

export const Rainbow = ({
  palette = null,
  exclude = [],
  onColorSelected = null
}) => {
  const colors = cleanColors(palette ? palette : defaultPalette, exclude)
  const [selectedColor, setSelectedColor] = useState(false)

  const draw = ({ color, selected = null, hex = null }) => {
    if (selectedColor) {
      if (onColorSelected) {
        onColorSelected({ color: selected, hex: hex })
      }
    } else {
      setSelectedColor({ [color]: colors[color] })
    }
  }

  const revertDraw = () => setSelectedColor(false)

  const DetailedTilesList = () => (
    <TilesContainer>
      {Object.keys(selectedColor).map((color) =>
        Object.keys(selectedColor[color]).map((colorScale, index) => {
          const hex = selectedColor[color][colorScale]

          if (colorScale === '900') {
            return (
              <Bow
                key='revert'
                bgColor='gray-100'
                borderColor='gray-200'
                handleClick={() => revertDraw()}
              >
                <svg
                  className={`h-6 w-6 text-${humanize(color, 500)}`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 19l-7-7m0 0l7-7m-7 7h18'
                  />
                </svg>
              </Bow>
            )
          }

          return (
            <Bow
              key={hex}
              bgColor={humanize(color, colorScale)}
              borderColor={humanize(color, 500)}
              handleClick={({ selected }) => draw({ color, selected, hex })}
            />
          )
        })
      )}
    </TilesContainer>
  )

  const MainTilesList = () => (
    <TilesContainer>
      {Object.keys(colors).map((color) =>
        Object.keys(colors[color]).map((colorScale, hex) => {
          if (selectedColor || colorScale !== '400') {
            return false
          }

          return (
            <Bow
              key={hex}
              bgColor={humanize(color, colorScale)}
              borderColor={humanize(color, 500)}
              handleClick={() => draw({ color })}
            />
          )
        })
      )}
    </TilesContainer>
  )

  return (
    <div className='relative py-3 sm:max-w-xl'>
      <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
      <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
        <div className='max-w-md mx-auto'>
          {selectedColor ? <DetailedTilesList /> : <MainTilesList />}
        </div>
      </div>
    </div>
  )
}
