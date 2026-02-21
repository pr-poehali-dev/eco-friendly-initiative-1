import { MapPin, ArrowUpRight, Clock, Phone } from "lucide-react"

const locations = [
  { name: "Библиотека №14", address: "ул. Ленина, 24", hours: "9:00–18:00", phone: "+7 (495) 111-22-33" },
  { name: "Центр соцобслуживания", address: "пр. Мира, 7", hours: "10:00–17:00", phone: "+7 (495) 444-55-66" },
]

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
        <MapPin className="h-5 w-5 text-violet-500" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">Офлайн-точки помощи</h3>
      <p className="mb-4 text-sm text-gray-500">Найдите ближайшую библиотеку или соццентр, где волонтёр поможет лично</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-violet-600 hover:text-violet-700 transition-colors">
        Открыть карту <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
        {locations.map((loc, i) => (
          <div key={i} className="rounded-lg bg-white border border-blue-100 px-3 py-3 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-violet-500 shrink-0" />
              <p className="text-sm font-medium text-gray-800">{loc.name}</p>
            </div>
            <p className="text-xs text-gray-400 pl-6">{loc.address}</p>
            <div className="flex items-center gap-4 pl-6">
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="h-3 w-3" />
                <span className="text-xs">{loc.hours}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Phone className="h-3 w-3" />
                <span className="text-xs">{loc.phone}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-lg bg-white border border-dashed border-blue-200 px-3 py-3 text-center">
          <p className="text-xs text-gray-400">Введите ваш адрес — найдём ближайшую точку</p>
          <input
            type="text"
            placeholder="Ваш адрес..."
            className="mt-2 w-full bg-transparent text-sm text-gray-700 placeholder-gray-300 outline-none text-center"
          />
        </div>
      </div>
    </div>
  )
}
