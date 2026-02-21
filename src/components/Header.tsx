import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <PlatformLogo />
        <span className="text-lg font-semibold text-white">
          ЦифраРядом
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Пожилым
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Волонтёрам
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          База знаний
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          О проекте
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
      >
        Стать волонтёром
      </Button>
    </header>
  )
}

function PlatformLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="#8B5CF6" />
      <circle cx="6" cy="17" r="3" fill="#8B5CF6" opacity="0.6" />
      <circle cx="18" cy="17" r="3" fill="#8B5CF6" opacity="0.6" />
      <line x1="12" y1="12" x2="6" y2="14" stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="18" y2="14" stroke="#8B5CF6" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  )
}