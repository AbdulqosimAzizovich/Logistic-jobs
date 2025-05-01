"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = 
  // Fade animations
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right"
  | "fade"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left"
  
  // Flip animations
  | "flip-up"
  | "flip-down"
  | "flip-left"
  | "flip-right"
  
  // Slide animations
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  
  // Zoom animations
  | "zoom-in"
  | "zoom-out"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-left"
  | "zoom-out-right"
  
  // Rotate animations
  | "rotate"
  | "rotate-up-left"
  | "rotate-up-right"
  | "rotate-down-left"
  | "rotate-down-right"

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
  className?: string
}

export default function AnimateOnScroll({ 
  children, 
  animation, 
  delay = 0, 
  duration = 700,
  once = true,
  threshold = 0.1,
  className 
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
          } else if (!once) {
            entry.target.classList.remove("animate")
          }
        })
      },
      {
        threshold,
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
  }, [delay, once, threshold])

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms` }}
      className={cn(
        "transition-all ease-out",
        
        // Fade animations
        animation === "fade-up" && "translate-y-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "fade-down" && "-translate-y-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "fade-left" && "translate-x-10 opacity-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade-right" && "-translate-x-10 opacity-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade" && "opacity-0 [&.animate]:opacity-100",
        animation === "fade-up-right" && "translate-y-10 -translate-x-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade-up-left" && "translate-y-10 translate-x-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade-down-right" && "-translate-y-10 -translate-x-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "fade-down-left" && "-translate-y-10 translate-x-10 opacity-0 [&.animate]:translate-y-0 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        
        // Flip animations
        animation === "flip-up" && "opacity-0 rotate-x-90 [&.animate]:rotate-x-0 [&.animate]:opacity-100",
        animation === "flip-down" && "opacity-0 -rotate-x-90 [&.animate]:rotate-x-0 [&.animate]:opacity-100",
        animation === "flip-left" && "opacity-0 -rotate-y-90 [&.animate]:rotate-y-0 [&.animate]:opacity-100",
        animation === "flip-right" && "opacity-0 rotate-y-90 [&.animate]:rotate-y-0 [&.animate]:opacity-100",
        
        // Slide animations
        animation === "slide-up" && "translate-y-full [&.animate]:translate-y-0",
        animation === "slide-down" && "-translate-y-full [&.animate]:translate-y-0",
        animation === "slide-left" && "translate-x-full [&.animate]:translate-x-0",
        animation === "slide-right" && "-translate-x-full [&.animate]:translate-x-0",
        
        // Zoom animations
        animation === "zoom-in" && "scale-95 opacity-0 [&.animate]:scale-100 [&.animate]:opacity-100",
        animation === "zoom-out" && "scale-105 opacity-0 [&.animate]:scale-100 [&.animate]:opacity-100",
        animation === "zoom-in-up" && "scale-95 translate-y-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "zoom-in-down" && "scale-95 -translate-y-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "zoom-in-left" && "scale-95 translate-x-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "zoom-in-right" && "scale-95 -translate-x-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "zoom-out-up" && "scale-105 translate-y-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "zoom-out-down" && "scale-105 -translate-y-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-y-0 [&.animate]:opacity-100",
        animation === "zoom-out-left" && "scale-105 translate-x-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        animation === "zoom-out-right" && "scale-105 -translate-x-10 opacity-0 [&.animate]:scale-100 [&.animate]:translate-x-0 [&.animate]:opacity-100",
        
        // Rotate animations
        animation === "rotate" && "opacity-0 rotate-90 [&.animate]:rotate-0 [&.animate]:opacity-100",
        animation === "rotate-up-left" && "opacity-0 origin-top-left rotate-45 [&.animate]:rotate-0 [&.animate]:opacity-100",
        animation === "rotate-up-right" && "opacity-0 origin-top-right -rotate-45 [&.animate]:rotate-0 [&.animate]:opacity-100",
        animation === "rotate-down-left" && "opacity-0 origin-bottom-left -rotate-45 [&.animate]:rotate-0 [&.animate]:opacity-100",
        animation === "rotate-down-right" && "opacity-0 origin-bottom-right rotate-45 [&.animate]:rotate-0 [&.animate]:opacity-100",
        
        className,
      )}
    >
      {children}
    </div>
  )
}