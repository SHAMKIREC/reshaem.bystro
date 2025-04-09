import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">РЕШАЕМ</span> <span className="text-blue-400">БЫСТРО РБ</span>
            </h3>
            <p className="text-gray-400 mb-4">Профессиональные решения для строительства и ремонта</p>
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-3">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-blue-400 p-2 rounded-full"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.789-.583-1.979-1.979-.998-.998-1.388-.789-1.388-.789v1.388c0 .422-.211.633-.844.633h-1.32c-1.898 0-3.53-1.154-4.835-3.3-1.983-2.888-2.523-5.045-2.523-5.497 0-.211.106-.422.633-.422h1.616c.422 0 .633.211.844.633.844 2.467 2.257 4.623 2.888 4.623.211 0 .317-.106.317-.633v-2.467c-.106-.844-.633-1.005-.633-1.32 0-.211.106-.422.422-.422h2.572c.317 0 .422.211.422.633v3.3c0 .317.211.422.317.422.211 0 .317-.106.633-.422.844-1.154 1.477-2.888 1.477-2.888.106-.211.317-.422.633-.422h1.616c.422 0 .528.211.422.633-.211.844-1.898 3.194-1.898 3.194-.106.211-.211.422 0 .633.106.106.422.422.633.633.633.633 1.616 1.477 1.898 1.898.317.317.211.633-.106.633z" />
                  </svg>
                  <span className="sr-only">ВКонтакте</span>
                </a>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-blue-400 p-2 rounded-full"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="sr-only">Telegram</span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-green-500 p-2 rounded-full"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0.057 24l6.304-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.24-6.165-3.48-8.413zm-8.413 18.306h-.004a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.904 9.904 0 01-1.51-5.272c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.003 5.45-4.437 9.897-9.886 9.897zm5.43-7.403c-.3-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.198.3-.767.97-.94 1.17-.173.198-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.49-1.768-1.663-2.066-.173-.3-.019-.46.13-.61.134-.133.297-.347.446-.52.148-.174.198-.3.297-.496.1-.198.05-.371-.025-.52-.074-.148-.668-1.61-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-500 mr-2" />
                <span className="text-gray-400">г. Москва, ул. Строителей, 10</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-rose-500 mr-2" />
                <div className="text-gray-400">
                  <p>
                    Строительство и ремонт:{" "}
                    <a href="tel:+79085509037" className="hover:text-white">
                      +7 908 550 90 37
                    </a>
                  </p>
                  <p>
                    Центральный офис:{" "}
                    <a href="tel:+79330306949" className="hover:text-white">
                      +7 933 030 69 49
                    </a>
                  </p>
                  <p>
                    IT и академическая поддержка:{" "}
                    <a href="tel:+79372296949" className="hover:text-white">
                      +7 937 229 69 49
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-rose-500 mr-2" />
                <a href="mailto:rb.service24@mail.ru" className="text-gray-400 hover:text-white">
                  rb.service24@mail.ru
                </a>
              </li>
              <li className="text-gray-400">
                <p className="font-medium">Режим работы:</p>
                <p>Работаем 24/7, без выходных</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Имя
                </Label>
                <Input id="name" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  Телефон
                </Label>
                <Input id="phone" type="tel" className="bg-gray-800 border-gray-700 text-white" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">
                  Комментарий
                </Label>
                <Textarea id="message" className="bg-gray-800 border-gray-700 text-white h-20" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Отправить в Telegram</Button>
              <p className="text-xs text-gray-500">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          © 2025 РЕШАЕМ БЫСТРО РБ. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
