"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { AlertCircle, TrendingUp, Zap, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

const demandForecast = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  actual: 100 + Math.sin((i / 30) * Math.PI) * 50 + Math.random() * 20,
  forecast: 100 + Math.sin((i / 30) * Math.PI) * 50,
}))

const profitabilityData = [
  { name: "Лосось", profit: 2850, orders: 14 },
  { name: "Креветки", profit: 2100, orders: 12 },
  { name: "Кальмары", profit: 1650, orders: 9 },
  { name: "Тунец", profit: 1890, orders: 11 },
  { name: "Крабовое", profit: 2200, orders: 8 },
]

export default function AIAdvisor() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-3xl">🤖</div>
            <h1 className="text-4xl font-bold text-foreground">ColdBrain — ИИ-советник по запасам</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Умные рекомендации на основе анализа спроса, остатков и сроков годности
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 border-border mb-8">
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Фильтр товаров</label>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium">Все товары</button>
                <button className="px-4 py-2 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary">
                  Требуют внимания
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Период</label>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-md border border-border text-sm text-foreground hover:bg-secondary">
                  7 дней
                </button>
                <button className="px-3 py-2 rounded-md border border-border text-sm text-foreground hover:bg-secondary">
                  30 дней
                </button>
                <button className="px-3 py-2 rounded-md border border-border text-sm text-foreground hover:bg-secondary">
                  90 дней
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Critical Card */}
          <Card className="p-6 border-2 border-red-500 bg-red-50/30">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-bold text-foreground">КРИТИЧНО: Недостаток запаса</h3>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Товар:</span>
                <span className="font-medium text-foreground ml-2">Кальмары кольца (1кг)</span>
              </div>
              <div>
                <span className="text-muted-foreground">Текущий запас:</span>
                <span className="font-medium text-foreground ml-2">25 кг</span>
              </div>
              <div>
                <span className="text-muted-foreground">Прогноз выработки:</span>
                <span className="font-medium text-foreground ml-2">3 дня (15.11.2025)</span>
              </div>
              <div>
                <span className="text-muted-foreground">Средний спрос:</span>
                <span className="font-medium text-foreground ml-2">8 кг/день</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/50 rounded-md border border-red-200">
              <p className="text-sm text-foreground">
                💡 <strong>Рекомендация:</strong> Срочно дозаказать 120 кг до 14.11.2025. Текущий запас закончится
                раньше срока поставки (7 дн)
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="gap-2">
                Создать заказ <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                Подробнее
              </Button>
            </div>
          </Card>

          {/* Warning Card */}
          <Card className="p-6 border-2 border-yellow-500 bg-yellow-50/30">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <h3 className="text-lg font-bold text-foreground">ВНИМАНИЕ: Риск просрочки</h3>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Товар:</span>
                <span className="font-medium text-foreground ml-2">Тунец стейки (200г)</span>
              </div>
              <div>
                <span className="text-muted-foreground">В наличии:</span>
                <span className="font-medium text-foreground ml-2">60 кг (срок до 24.11 — 12 дней)</span>
              </div>
              <div>
                <span className="text-muted-foreground">Прогноз продаж:</span>
                <span className="font-medium text-foreground ml-2">3 кг/день</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/50 rounded-md border border-yellow-200">
              <p className="text-sm text-foreground">
                💡 <strong>Рекомендация:</strong> Запустить акцию '-20%' для B2C. Ожидаемая выручка: остаток может быть
                продан за 5 дней
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" className="gap-2">
                Создать акцию
              </Button>
              <Button size="sm" variant="outline">
                Отправить клиентам
              </Button>
            </div>
          </Card>

          {/* Success Card */}
          <Card className="p-6 border-2 border-green-500 bg-green-50/30">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-foreground">ОПТИМАЛЬНО: Запас в норме</h3>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Товар:</span>
                <span className="font-medium text-foreground ml-2">Лосось норвежский филе (1кг)</span>
              </div>
              <div>
                <span className="text-muted-foreground">Текущий запас:</span>
                <span className="font-medium text-foreground ml-2">120 кг</span>
              </div>
              <div>
                <span className="text-muted-foreground">Прогноз выработки:</span>
                <span className="font-medium text-foreground ml-2">24 дня</span>
              </div>
              <div>
                <span className="text-muted-foreground">Следующий заказ:</span>
                <span className="font-medium text-foreground ml-2">01.12.2025</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white/50 rounded-md border border-green-200">
              <p className="text-sm text-foreground">
                💡 <strong>Статус:</strong> Запас достаточен. Точка дозаказа будет достигнута через 17 дней. Напомним за
                3 дня
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline">
                Настроить автозаказ
              </Button>
            </div>
          </Card>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Demand Forecast */}
          <Card className="lg:col-span-2 p-6 border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Прогноз спроса: Креветки тигровые</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={demandForecast}>
                <defs>
                  <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value.toFixed(0)} шт`}
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stroke="hsl(var(--primary))"
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorForecast)"
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Прогноз (пунктирная)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary/20 rounded"></div>
                <span className="text-muted-foreground">Доверительный интервал</span>
              </div>
            </div>
          </Card>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Temperature Status */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4">Температурный статус</h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Камера –50°C</span>
                <span className="text-lg font-bold text-green-600">✅ -50.2°C</span>
              </div>
              <p className="text-xs text-muted-foreground">За последние 7 дней отклонений не зафиксировано</p>
            </Card>

            {/* Smart Insights */}
            <Card className="p-6 border-border">
              <h4 className="font-semibold text-foreground mb-4">Умные инсайты</h4>
              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">Спрос на лосось вырос на 18% за неделю</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <span className="text-lg">🎉</span>
                  <p className="text-foreground">Рекомендуем увеличить запас перед праздниками (Новый год)</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">Скорость оборота креветок улучшилась на 12%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Анализ прибыльности по товарам (30 дней)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={profitabilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `₽${value.toLocaleString()}`}
                />
                <Bar dataKey="profit" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
              {profitabilityData.map((item) => (
                <div key={item.name} className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-2xl font-bold text-primary mt-1">₽{item.profit.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.orders} заказов</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
