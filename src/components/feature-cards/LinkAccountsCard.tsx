import { BookOpen, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const topics = [
  { name: "Госуслуги", desc: "Запись, заявления, документы", initials: "ГУ", color: "bg-blue-500" },
  { name: "Оплата ЖКХ", desc: "Счета, квитанции, личный кабинет", initials: "ЖКХ", color: "bg-teal-500" },
  { name: "Запись к врачу", desc: "Поликлиника, анализы, талоны", initials: "МЕД", color: "bg-rose-500" },
  { name: "Пенсионный фонд", desc: "Выписки, льготы, стаж", initials: "ПФ", color: "bg-amber-500" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
        <BookOpen className="h-5 w-5 text-violet-500" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">Каталог тем для обучения</h3>
      <p className="mb-4 text-sm text-gray-500">Выберите тему — волонтёр поможет разобраться пошагово, в удобном для вас формате</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-violet-600 hover:text-violet-700 transition-colors">
        Все темы <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-blue-50 border border-blue-100 p-3">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-white border border-blue-50 px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className={`${topic.color} text-white text-xs`}>
                  {topic.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-gray-800">{topic.name}</p>
                <p className="text-xs text-gray-400">{topic.desc}</p>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-violet-600 hover:text-violet-700 hover:bg-violet-50 mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Записаться на урок
        </Button>
      </div>
    </div>
  )
}
