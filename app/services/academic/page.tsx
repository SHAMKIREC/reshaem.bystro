import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function AcademicPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Академическая поддержка"
        description="Предлагаем полный спектр услуг по академической поддержке для студентов."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">📚</span>}
              title="Академическая поддержка"
              description="Предлагаем полный спектр услуг по академической поддержке для студентов."
              categories={[
                {
                  title: "Базовые услуги",
                  options: [
                    { id: "structure", label: "Структурирование работы" },
                    { id: "research", label: "Подбор источников" },
                    { id: "methodology", label: "Методология исследования" },
                  ],
                },
                {
                  title: "Дополнительные услуги",
                  options: [
                    { id: "presentation", label: "Подготовка презентации" },
                    { id: "speech", label: "Подготовка речи" },
                    { id: "review", label: "Проверка на плагиат" },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
