import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-starlight hover:text-mercury-blue hover:bg-surface-interactive/30 p-8 rounded-full transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-mercury-blue"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-24 h-24 transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-24 h-24 transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  )
}
