"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Thermometer, Package, Truck, Users, Search, Bell, AlertCircle } from "lucide-react"

const temperatureData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  temp: -50 + (Math.sin((i / 24) * Math.PI * 2) * 0.3 + Math.random() * 0.2),
}))

const batchesData = [
  { id: 1, name: "Лосось норвежский", days: 45, weight: "120 кг", status: "good" },
  { id: 2, name: "Креветки тигровые", days: 38, weight: "85 кг", status: "good" },
  { id: 3, name: "Тунец стейки", days: 12, weight: "60 кг", status: "warning" },
  { id: 4, name: "Мидии в раковине", days: 8, weight: "40 кг", status: "warning" },
  { id: 5, name: "Кальмары кольца", days: 3, weight: "25 кг", status: "critical" },
]

const ordersData = [
  { id: "#1247", client: 'Ресторан "Асель"', product: "Лосось 30кг", status: "delivered", date: "12.11.2025" },
  { id: "#1246", client: 'Кафе "Алатау"', product: "Креветки 15кг", status: "transit", date: "12.11.2025" },
  { id: "#1245", client: "Sultan Plaza", product: "Тунец 25кг", status: "processing", date: "13.11.2025" },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "good":
      return "text-green-500"
    case "warning":
      return "text-yellow-500"
    case "critical":
      return "text-red-500"
    case "delivered":
      return "text-green-500"
    case "transit":
      return "text-blue-500"
    case "processing":
      return "text-yellow-500"
    default:
      return "text-gray-500"
  }
}

const getStatusBg = (status: string) => {
  switch (status) {
    case "good":
      return "bg-green-500/10"
    case "warning":
      return "bg-yellow-500/10"
    case "critical":
      return "bg-red-500/10"
    default:
      return "bg-gray-500/10"
  }
}

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card">
        <div className="p-6 border-b border-border">
          <div className="text-lg font-bold text-primary">ColdHub</div>
        </div>
        <nav className="p-6 space-y-2">
          {[
            { icon: "📊", label: "Дашборд", active: true },
            { icon: "📦", label: "Товары и партии", active: false },
            { icon: "🚚", label: "Заказы", active: false },
            { icon: "🤖", label: "ИИ-советник", active: false },
            { icon: "⚙️", label: "Настройки", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                item.active ? "bg-primary text-white" : "text-foreground hover:bg-secondary"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-border mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              А
            </div>
            <div className="text-sm">
              <div className="font-semibold text-foreground">Admin</div>
              <div className="text-xs text-muted-foreground">admin@coldhub.kz</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="border-b border-border bg-card p-6 flex items-center justify-between sticky top-0 z-40">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-6">
            <button className="relative p-2 hover:bg-secondary rounded-md transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              А
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Товаров на складе</p>
                  <p className="text-3xl font-bold text-foreground">1,247</p>
                  <p className="text-xs text-green-600 mt-2">+12% ↑</p>
                </div>
                <Package className="w-10 h-10 text-primary/50" />
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Активных клиентов</p>
                  <p className="text-3xl font-bold text-foreground">42</p>
                  <p className="text-xs text-green-600 mt-2">+3 за месяц</p>
                </div>
                <Users className="w-10 h-10 text-primary/50" />
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Камера –50°C Занято</p>
                  <p className="text-3xl font-bold text-foreground">78%</p>
                  <p className="text-xs text-green-600 mt-2">-50.2°C ✓</p>
                </div>
                <Thermometer className="w-10 h-10 text-primary/50" />
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Заказов на доставке</p>
                  <p className="text-3xl font-bold text-foreground">18</p>
                  <p className="text-xs text-blue-600 mt-2">🚚 В пути</p>
                </div>
                <Truck className="w-10 h-10 text-primary/50" />
              </div>
            </Card>
          </div>

          {/* Temperature Chart and Status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Температурный мониторинг камеры –50°C</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[-51, -49]} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value) => [`${value.toFixed(2)}°C`, "Температура"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="hsl(var(--primary))"
                    dot={false}
                    strokeWidth={2}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-muted-foreground">Норма: -48°C до -52°C</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">Ближайшие сроки годности</h3>
              <div className="space-y-3">
                {batchesData.map((batch) => (
                  <div key={batch.id} className={`p-3 rounded-md ${getStatusBg(batch.status)}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className={`font-medium text-sm ${getStatusColor(batch.status)}`}>● {batch.name}</div>
                        <div className="text-xs text-foreground mt-1">
                          {batch.days} дней • {batch.weight}
                        </div>
                      </div>
                      {batch.status === "critical" && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 bg-transparent">
                Посмотреть все партии
              </Button>
            </Card>
          </div>

          {/* Orders Table */}
          <Card className="p-6 border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Последние заказы на доставку</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Клиент</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Товар</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Статус</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Дата доставки</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersData.map((order) => (
                    <tr key={order.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                      <td className="py-4 px-4 text-sm font-medium text-foreground">{order.id}</td>
                      <td className="py-4 px-4 text-sm text-foreground">{order.client}</td>
                      <td className="py-4 px-4 text-sm text-foreground">{order.product}</td>
                      <td className="py-4 px-4">
                        <span className={`text-xs font-medium ${getStatusColor(order.status)}`}>
                          ●{" "}
                          {order.status === "delivered"
                            ? "Доставлено"
                            : order.status === "transit"
                              ? "В пути"
                              : "Комплектуется"}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
