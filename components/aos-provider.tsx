"use client"

import type React from "react"

// This is now just a wrapper component that doesn't do anything special
// We're keeping it to avoid having to update all the component references
export default function AOSProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
