import Icon from "@/components/ui/icon"

const partners = [
  { name: "Госуслуги", icon: "ShieldCheck" },
  { name: "Министерство труда", icon: "Landmark" },
  { name: "Росмолодёжь", icon: "Users" },
  { name: "Социальный фонд РФ", icon: "Heart" },
  { name: "Библиотека России", icon: "BookOpen" },
  { name: "Яндекс", icon: "Globe" },
  { name: "2ГИС", icon: "MapPin" },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <Icon name={partner.icon} size={16} />
          <span className="text-sm font-medium">{partner.name}</span>
        </div>
      ))}
    </section>
  )
}