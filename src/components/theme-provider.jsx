'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

const initialState = {
  theme: 'dark',
  setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'ui-theme',
  attribute = 'class',
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'dark' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme, enableSystem])

  const value = {
    theme,
    setTheme: (theme) => {
      try {
        localStorage.setItem(storageKey, theme)
      } catch {
        // Ignore if localStorage is not available
      }
      setTheme(theme)
    },
  }

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem(storageKey)
      if (storedTheme) {
        setTheme(storedTheme)
      }
    } catch {
      // Ignore if localStorage is not available
    }
  }, [storageKey])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}

