import { Users, ArrowUpRight, Star, MessageSquare, Video } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Users className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Верифицированные волонтёры</h3>
      <p className="mb-4 text-sm text-gray-400">Все помощники проходят проверку документов и обучение работе с пожилыми людьми</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Стать волонтёром <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-man-portrait.png" alt="Артём Волков" />
              <AvatarFallback className="bg-violet-700 text-white">АВ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Артём Волков</p>
              <p className="text-xs text-gray-500">Студент МГТУ · 47 уроков</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            <span className="text-sm font-medium text-white">4.9</span>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs text-gray-400">Формат консультации</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: MessageSquare, label: "Чат" },
              { icon: Video, label: "Видео" },
              { icon: Users, label: "Лично" },
            ].map(({ icon: Ic, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 rounded-lg bg-[#0f0f0f] border border-[#262626] py-2">
                <Ic className="h-4 w-4 text-violet-400" />
                <span className="text-xs text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-violet-600 text-white hover:bg-violet-700">Записаться к Артёму</Button>
      </div>
    </div>
  )
}
