import { MapPin, ArrowUpRight, Clock, Phone } from "lucide-react"

const locations = [
  { name: "Библиотека №14", address: "ул. Ленина, 24", hours: "9:00–18:00", phone: "+7 (495) 111-22-33" },
  { name: "Центр соцобслуживания", address: "пр. Мира, 7", hours: "10:00–17:00", phone: "+7 (495) 444-55-66" },
]

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <MapPin className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Офлайн-точки помощи</h3>
      <p className="mb-4 text-sm text-gray-400">Найдите ближайшую библиотеку или соццентр, где волонтёр поможет лично</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Открыть карту <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        {locations.map((loc, i) => (
          <div key={i} className="rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-3 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet-400 shrink-0" />
              <p className="text-sm font-medium text-white">{loc.name}</p>
            </div>
            <p className="text-xs text-gray-500 pl-6">{loc.address}</p>
            <div className="flex items-center gap-4 pl-6">
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{loc.hours}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Phone className="h-3 w-3" />
                <span className="text-xs">{loc.phone}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-lg bg-[#0f0f0f] border border-dashed border-[#333] px-3 py-3 text-center">
          <p className="text-xs text-gray-500">Введите ваш адрес — найдём ближайшую точку</p>
          <input
            type="text"
            placeholder="Ваш адрес..."
            className="mt-2 w-full bg-transparent text-sm text-white placeholder-gray-600 outline-none text-center"
          />
        </div>
      </div>
    </div>
  )
}
