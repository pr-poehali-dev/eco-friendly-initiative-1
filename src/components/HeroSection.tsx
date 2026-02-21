import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 border border-blue-100 py-2 text-sm px-2">
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-xs font-medium text-violet-600">ПРОЕКТ</span>
        <span className="text-gray-600">Молодые помогают старшим освоить цифровой мир</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
        Цифровая помощь рядом — для каждого
      </h1>

      <p className="mb-8 max-w-xl text-gray-500">Волонтёры помогают пожилым освоить Госуслуги, оплату ЖКХ, запись к врачу и другие онлайн-сервисы — лично, по видео или в чате.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button className="rounded-full bg-violet-600 px-6 hover:bg-violet-700 text-white">
          Получить помощь <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
          <Play className="mr-2 h-4 w-4 fill-violet-500 text-violet-500" /> Как это работает
        </Button>
      </div>
    </section>
  )
}