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

    const applyTheme = (value) => {
      root.classList.remove('light', 'dark')
      const resolved =
        value === 'system' && enableSystem
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : value
      root.classList.add(resolved === 'dark' ? 'dark' : 'light')
    }

    applyTheme(theme)

    // Keep in sync with OS preference while on "system".
    if (theme === 'system' && enableSystem) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = () => applyTheme('system')
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    }
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

