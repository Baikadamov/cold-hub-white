"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, MoreVertical, Truck, Clock, CheckCircle2, AlertCircle } from "lucide-react"

interface Order {
  id: string
  number: string
  client: string
  items: number
  totalSum: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdDate: string
  deliveryDate: string
}

const orders: Order[] = [
  {
    id: "1",
    number: "ORD-2025-001",
    client: "ООО Первая рыбная лавка",
    items: 5,
    totalSum: 45000,
    status: "delivered",
    createdDate: "2025-11-08",
    deliveryDate: "2025-11-11",
  },
  {
    id: "2",
    number: "ORD-2025-002",
    client: "АО Ресторан Трёхфасолка",
    items: 8,
    totalSum: 78500,
    status: "shipped",
    createdDate: "2025-11-09",
    deliveryDate: "2025-11-14",
  },
  {
    id: "3",
    number: "ORD-2025-003",
    client: "ИП Магазин морепродуктов",
    items: 3,
    totalSum: 25000,
    status: "processing",
    createdDate: "2025-11-10",
    deliveryDate: "2025-11-13",
  },
  {
    id: "4",
    number: "ORD-2025-004",
    client: "ООО Гастроном",
    items: 12,
    totalSum: 125000,
    status: "pending",
    createdDate: "2025-11-12",
    deliveryDate: "2025-11-19",
  },
  {
    id: "5",
    number: "ORD-2025-005",
    client: "СПК Оптовая база",
    items: 15,
    totalSum: 198500,
    status: "processing",
    createdDate: "2025-11-11",
    deliveryDate: "2025-11-16",
  },
]

export default function OrdersSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "processing" | "shipped" | "delivered">("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.client.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />
      case "processing":
        return <AlertCircle className="w-5 h-5 text-blue-600" />
      case "shipped":
        return <Truck className="w-5 h-5 text-purple-600" />
      case "delivered":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 border-yellow-200"
      case "processing":
        return "bg-blue-50 border-blue-200"
      case "shipped":
        return "bg-purple-50 border-purple-200"
      case "delivered":
        return "bg-green-50 border-green-200"
      default:
        return "bg-white"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "На рассмотрении"
      case "processing":
        return "В подготовке"
      case "shipped":
        return "В пути"
      case "delivered":
        return "Доставлен"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Заказы</h1>
            <p className="text-lg text-muted-foreground mt-1">Управление заказами клиентов и отгрузками</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Новый заказ
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground block mb-2">Поиск заказа</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Номер заказа, клиент..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Статус</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Все заказы</option>
                <option value="pending">На рассмотрении</option>
                <option value="processing">В подготовке</option>
                <option value="shipped">В пути</option>
                <option value="delivered">Доставлен</option>
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <p className="text-xs font-medium text-muted-foreground uppercase">Всего заказов</p>
              <p className="text-2xl font-bold text-foreground mt-1">{orders.length}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xs font-medium text-yellow-700 uppercase">На рассмотрении</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">
                {orders.filter((o) => o.status === "pending").length}
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-medium text-blue-700 uppercase">В подготовке</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                {orders.filter((o) => o.status === "processing").length}
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-xs font-medium text-purple-700 uppercase">В пути</p>
              <p className="text-2xl font-bold text-purple-600 mt-1">
                {orders.filter((o) => o.status === "shipped").length}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs font-medium text-green-700 uppercase">Доставлены</p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {orders.filter((o) => o.status === "delivered").length}
              </p>
            </div>
          </div>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className={`p-6 border-2 ${getStatusColor(order.status)}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(order.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{order.number}</h3>
                      <p className="text-sm text-muted-foreground">{order.client}</p>
                    </div>
                  </div>
                </div>

                <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Order Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 p-4 bg-white/50 rounded-lg border border-border/30">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Позиций</p>
                  <p className="text-xl font-bold text-foreground mt-1">{order.items}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Сумма</p>
                  <p className="text-xl font-bold text-foreground mt-1">₽{order.totalSum.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Дата заказа</p>
                  <p className="text-lg font-semibold text-foreground mt-1">{order.createdDate}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Дата доставки</p>
                  <p className="text-lg font-semibold text-foreground mt-1">{order.deliveryDate}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Статус</p>
                  <p className="text-lg font-bold text-foreground mt-1">{getStatusLabel(order.status)}</p>
                </div>
              </div>

              {/* Timeline / Progress Bar */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <p className="text-sm font-medium text-foreground mb-3">Этап обработки:</p>
                <div className="flex items-center justify-between text-xs">
                  <div
                    className={`flex flex-col items-center ${order.status === "pending" ? "opacity-100" : "opacity-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${order.status !== "pending" ? "bg-green-500 text-white" : "bg-primary text-white"}`}
                    >
                      ✓
                    </div>
                    <span className="text-muted-foreground">Заказан</span>
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${order.status !== "pending" ? "bg-green-500" : "bg-border"}`}></div>

                  <div
                    className={`flex flex-col items-center ${["processing", "shipped", "delivered"].includes(order.status) ? "opacity-100" : "opacity-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${["shipped", "delivered"].includes(order.status) ? "bg-green-500 text-white" : order.status === "processing" ? "bg-primary text-white" : "bg-border text-muted-foreground"}`}
                    >
                      {["shipped", "delivered"].includes(order.status) ? "✓" : order.status === "processing" ? "→" : ""}
                    </div>
                    <span className="text-muted-foreground">Подготовка</span>
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${["shipped", "delivered"].includes(order.status) ? "bg-green-500" : "bg-border"}`}
                  ></div>

                  <div
                    className={`flex flex-col items-center ${["shipped", "delivered"].includes(order.status) ? "opacity-100" : "opacity-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${order.status === "delivered" ? "bg-green-500 text-white" : order.status === "shipped" ? "bg-primary text-white" : "bg-border text-muted-foreground"}`}
                    >
                      {order.status === "delivered" ? "✓" : order.status === "shipped" ? "🚚" : ""}
                    </div>
                    <span className="text-muted-foreground">Отправка</span>
                  </div>
                  <div
                    className={`flex-1 h-1 mx-2 ${order.status === "delivered" ? "bg-green-500" : "bg-border"}`}
                  ></div>

                  <div
                    className={`flex flex-col items-center ${order.status === "delivered" ? "opacity-100" : "opacity-50"}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${order.status === "delivered" ? "bg-green-500 text-white" : "bg-border text-muted-foreground"}`}
                    >
                      {order.status === "delivered" ? "✓" : ""}
                    </div>
                    <span className="text-muted-foreground">Доставлен</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  Просмотреть детали
                </Button>
                <Button size="sm" variant="outline">
                  Редактировать
                </Button>
                <Button size="sm" variant="outline">
                  Печать накладной
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
