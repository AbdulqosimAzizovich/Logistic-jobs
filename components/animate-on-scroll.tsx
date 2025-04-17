"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation: AnimationVariant
  delay?: number
  className?: string
}

export default function AnimateOnScroll({ children, animation, delay = 0, className }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animation === "fade-up" && "translate-y-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "fade-down" && "-translate-y-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "fade-left" && "translate-x-10 opacity-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade-right" && "-translate-x-10 opacity-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "zoom-in" && "scale-95 opacity-0 [&.animate]:scale-100 [&.animate]:opacity-100",
        animation === "zoom-out" && "scale-105 opacity-0 [&.animate]:scale-100 [&.animate]:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  )
}
