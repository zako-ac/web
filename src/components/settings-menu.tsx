"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

type SettingsMenuProps = {
  lang: "ko" | "en"
  onLanguageChange: (lang: "ko" | "en") => void
}

export function SettingsMenu({ lang, onLanguageChange }: SettingsMenuProps) {
  const { theme, setTheme } = useTheme()

  const translations = {
    ko: {
      language: "언어",
      korean: "한국어",
      english: "English",
    },
    en: {
      language: "Language",
      korean: "한국어",
      english: "English",
    },
  }

  const t = translations[lang]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleTheme}>
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>{t.language}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onLanguageChange("ko")} className={lang === "ko" ? "bg-accent" : ""}>
            {t.korean}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onLanguageChange("en")} className={lang === "en" ? "bg-accent" : ""}>
            {t.english}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
