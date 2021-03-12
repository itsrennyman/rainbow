import React from 'react'
import { motion } from 'framer-motion'

const Bow = ({ bgColor, borderColor, handleClick, children }) => {
  const tileItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  return (
    <motion.div variants={tileItem} whileTap={{ scale: 0.9 }}>
      <div
        onClick={() => handleClick({ selected: bgColor })}
        className={`h-20 w-auto sm:h-20 sm:w-20 shadow-lg rounded-lg sm:rounded-xl cursor-pointer hover:shadow-xl hover:transform hover:scale-105 hover:-rotate-6 duration-150 flex items-center justify-center hover:border-4 border-${borderColor} bg-${bgColor}`}
      >
        {children}
      </div>
    </motion.div>
  )
}

export default Bow
