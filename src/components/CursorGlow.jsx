import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const cursorRef = useRef(null)
  const cursorFollowerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorFollower = cursorFollowerRef.current

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
      if (cursorFollower) {
        setTimeout(() => {
          cursorFollower.style.left = e.clientX + 'px'
          cursorFollower.style.top = e.clientY + 'px'
        }, 100)
      }
    }

    const handleMouseEnter = () => {
      if (cursor) cursor.style.opacity = '1'
      if (cursorFollower) cursorFollower.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      if (cursor) cursor.style.opacity = '0'
      if (cursorFollower) cursorFollower.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full bg-purple-500/50 pointer-events-none z-50 mix-blend-difference transition-opacity duration-300"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorFollowerRef}
        className="fixed w-12 h-12 rounded-full border-2 border-purple-500/30 pointer-events-none z-50 mix-blend-difference transition-opacity duration-500"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
