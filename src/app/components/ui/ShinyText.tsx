"use client"

import React from 'react'

interface ShinyTextProps {
  text: string
  className?: string
  speed?: number 
  disabled?: boolean
}

export const ShinyText = ({
  text,
  className = '',
  speed = 3,
  disabled = false
}: ShinyTextProps) => {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        '--shine-speed': `${speed}s`,
      } as React.CSSProperties}
    >
      <span className="relative z-10">{text}</span>
      {!disabled && (
        <span 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent 
                    bg-[length:200%_100%] bg-clip-text text-transparent animate-shine pointer-events-none"
          style={{
            backgroundPosition: '100%',
            animationDuration: `var(--shine-speed)`,
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      )}
    </span>
  )
}