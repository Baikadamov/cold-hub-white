"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Snowflake, Truck, Zap, ArrowRight, Check } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Единственный в Алматы склад с камерой <span className="text-primary">–50°C</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Глубокая заморозка без потери качества. Бесплатное хранение + умная логистика
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                Начать работу <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <Snowflake className="w-24 h-24 text-primary mx-auto mb-4 animate-pulse" />
              <div className="text-5xl font-bold text-primary mb-2">-50°C</div>
              <p className="text-muted-foreground">Unique Deep Freeze Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-border hover:shadow-md transition-shadow">
              <Snowflake className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Температура –50°C</h3>
              <p className="text-muted-foreground">
                Уникальная технология глубокой заморозки, сохраняющая качество продуктов
              </p>
            </Card>
            <Card className="p-8 border-border hover:shadow-md transition-shadow">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Бесплатное хранение</h3>
              <p className="text-muted-foreground">Платите только за логистику и дополнительные услуги</p>
            </Card>
            <Card className="p-8 border-border hover:shadow-md transition-shadow">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">ИИ-аналитика</h3>
              <p className="text-muted-foreground">Умные прогнозы и рекомендации по управлению запасами</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Как это работает</h2>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {[
            { step: 1, title: "Регистрация" },
            { step: 2, title: "Загрузка товара" },
            { step: 3, title: "Мониторинг" },
            { step: 4, title: "Доставка" },
          ].map((item, idx) => (
            <div key={item.step} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-2">
                  {item.step}
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
              {idx < 3 && <ArrowRight className="w-6 h-6 text-border" />}
            </div>
          ))}
        </div>
      </section>

      {/* B2B/B2C Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Для кого</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">B2B (HoReCa)</h3>
              <p className="text-muted-foreground mb-6">Рестораны, кафе, производители</p>
              <ul className="space-y-3">
                {[
                  "Оптовые цены на свежие морепродукты",
                  "Гарантированное качество при -50°C",
                  "Бесплатное хранение для постоянных клиентов",
                  "Индивидуальные условия доставки",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 border-border opacity-60 relative">
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                Coming soon
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">B2C</h3>
              <p className="text-muted-foreground mb-6">Покупайте замороженные продукты напрямую</p>
              <ul className="space-y-3">
                {[
                  "Доступ к премиум морепродуктам",
                  "Гарантия свежести",
                  "Доставка на дом",
                  "Персональные рекомендации",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; 2025 ColdHub -50. Все права защищены.</p>
        </div>
      </footer>
    </main>
  )
}
