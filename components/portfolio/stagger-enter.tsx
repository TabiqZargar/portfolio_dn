"use client"

import { motion, type Variants } from "motion/react"
import { useState, type ReactNode } from "react"

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    // Tween with an ease-out curve — transform + opacity only, so every
    // frame composites on the GPU (no blur/filter repaint = no jank).
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

type StaggerEnterProps = {
  children: ReactNode
  className?: string
}

export const StaggerEnter = ({ children, className }: StaggerEnterProps) => {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export const StaggerItem = ({ children, className }: StaggerItemProps) => {
  const [settled, setSettled] = useState(false)

  return (
    <motion.div
      className={className}
      variants={item}
      // Hint the compositor while moving, then drop it on land so the column
      // doesn't keep a permanent GPU layer (which can blur subpixel text).
      style={{ willChange: settled ? "auto" : "transform, opacity" }}
      onAnimationComplete={(definition) => {
        if (definition === "visible") setSettled(true)
      }}
    >
      {children}
    </motion.div>
  )
}
