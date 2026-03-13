"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
}

export function AnimateOnScroll({ children, className = "" }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  )
}
