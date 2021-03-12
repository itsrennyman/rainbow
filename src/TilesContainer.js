import React from 'react'
import { motion } from 'framer-motion'

const TilesContainer = ({ children }) => {
  const container = {
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='grid grid-cols-4 gap-4'
    >
      {children}
    </motion.div>
  )
}

export default TilesContainer
