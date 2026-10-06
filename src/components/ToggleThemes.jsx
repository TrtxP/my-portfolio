import { useState, useEffect } from 'react'

export default function ToggleThemes() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
        } catch {
            return 'light'
        }
    })

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        try {
            localStorage.setItem('theme', theme)
        } catch {
            /* сховище недоступне, тема діє лише в цій сесії */
        }
    }, [theme])

    const label = theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'

    return (
        <button
            type="button"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            className="flex h-6 w-6 cursor-pointer items-center justify-center"
            aria-label={label}
            title={label}
        >
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
            </svg>
        </button>
    )
}
