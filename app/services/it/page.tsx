import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function ITServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="IT-услуги"
        description="Широкий спектр IT-услуг для бизнеса и частных лиц. От разработки сайтов до создания чат-ботов."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">💻</span>}
              title="IT-услуги"
              description="Широкий спектр IT-услуг для бизнеса и частных лиц. От разработки сайтов до создания чат-ботов."
              categories={[
                {
                  title: "Разработка веб-сайтов",
                  options: [
                    { id: "landing", label: "Лендинги и промо-страницы" },
                    { id: "corporate", label: "Корпоративные сайты" },
                    { id: "ecommerce", label: "Интернет-магазины" },
                    { id: "portal", label: "Порталы и сервисы" },
                  ],
                },
                {
                  title: "Разработка чат-ботов",
                  options: [
                    { id: "telegram", label: "Telegram боты" },
                    { id: "whatsapp", label: "WhatsApp боты" },
                    { id: "vk", label: "VK и Facebook боты" },
                    { id: "ai", label: "AI чат-боты" },
                  ],
                },
                {
                  title: "Разработка ПО",
                  options: [
                    { id: "web-app", label: "Веб-приложения" },
                    { id: "mobile-app", label: "Мобильные приложения" },
                    { id: "desktop", label: "Десктоп приложения" },
                    { id: "api", label: "API и интеграции" },
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
