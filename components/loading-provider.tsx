"use client"

/*
 * Loading functionality has been disabled as requested.
 * This file is kept for future reference but is not currently in use.
 */

import type React from "react"
import { createContext, useContext } from "react"

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  // Loading functionality disabled
  return <>{children}</>

  /*
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initial page load
  useEffect(() => {
    // Set a shorter timeout for initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Reduced from 1500ms to 800ms

    return () => clearTimeout(timer)
  }, [])

  // Route change loading
  useEffect(() => {
    let timer: NodeJS.Timeout

    // Only show loading on route changes after initial load
    if (pathname && searchParams) {
      setIsLoading(true)

      timer = setTimeout(() => {
        setIsLoading(false)
      }, 300) // Reduced from 800ms to 300ms for faster transitions
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [pathname, searchParams])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingScreen />}
      <div className={isLoading ? "hidden" : ""}>{children}</div>
    </LoadingContext.Provider>
  )
  */
}
