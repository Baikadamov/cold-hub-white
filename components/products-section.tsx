"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Plus, MoreVertical, AlertCircle, CheckCircle2, Clock } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  quantity: number
  unit: string
  expiryDate: string
  status: "normal" | "warning" | "critical"
  batches: number
  temperature: number
}

const products: Product[] = [
  {
    id: "1",
    name: "Лосось норвежский филе",
    category: "Рыба",
    quantity: 120,
    unit: "кг",
    expiryDate: "2025-12-01",
    status: "normal",
    batches: 3,
    temperature: -50.2,
  },
  {
    id: "2",
    name: "Кальмары кольца (1кг)",
    category: "Морепродукты",
    quantity: 25,
    unit: "кг",
    expiryDate: "2025-11-15",
    status: "critical",
    batches: 2,
    temperature: -50.1,
  },
  {
    id: "3",
    name: "Тунец стейки (200г)",
    category: "Рыба",
    quantity: 60,
    unit: "кг",
    expiryDate: "2025-11-24",
    status: "warning",
    batches: 4,
    temperature: -49.9,
  },
  {
    id: "4",
    name: "Креветки тигровые",
    category: "Морепродукты",
    quantity: 85,
    unit: "кг",
    expiryDate: "2025-12-15",
    status: "normal",
    batches: 5,
    temperature: -50.0,
  },
  {
    id: "5",
    name: "Крабовое мясо",
    category: "Морепродукты",
    quantity: 40,
    unit: "кг",
    expiryDate: "2025-12-10",
    status: "normal",
    batches: 3,
    temperature: -50.2,
  },
]

export default function ProductsSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "critical" | "warning" | "normal">("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterStatus === "all" || product.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <Clock className="w-5 h-5 text-yellow-600" />
      case "normal":
        return <CheckCircle2 className="w-5 h-5 text-green-600" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      case "normal":
        return "bg-green-50 border-green-200"
      default:
        return "bg-white"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "critical":
        return "Критично"
      case "warning":
        return "Внимание"
      case "normal":
        return "В норме"
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
            <h1 className="text-4xl font-bold text-foreground">Товары & Партии</h1>
            <p className="text-lg text-muted-foreground mt-1">Управление товарами и партиями в хранилище</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Добавить товар
          </Button>
        </div>

        {/* Filters and Search */}
        <Card className="p-6 border-border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground block mb-2">Поиск товара</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Название товара, категория..."
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
                <option value="all">Все товары</option>
                <option value="critical">Критично</option>
                <option value="warning">Внимание</option>
                <option value="normal">В норме</option>
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-secondary/30 rounded-lg border border-border">
              <p className="text-xs font-medium text-muted-foreground uppercase">Всего товаров</p>
              <p className="text-2xl font-bold text-foreground mt-1">{products.length}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs font-medium text-green-700 uppercase">В норме</p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {products.filter((p) => p.status === "normal").length}
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xs font-medium text-yellow-700 uppercase">Внимание</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">
                {products.filter((p) => p.status === "warning").length}
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-xs font-medium text-red-700 uppercase">Критично</p>
              <p className="text-2xl font-bold text-red-600 mt-1">
                {products.filter((p) => p.status === "critical").length}
              </p>
            </div>
          </div>
        </Card>

        {/* Products List */}
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className={`p-6 border-2 ${getStatusColor(product.status)}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {getStatusIcon(product.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                  </div>

                  {/* Product Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">Количество</p>
                      <p className="text-xl font-bold text-foreground mt-1">
                        {product.quantity} {product.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">Партий</p>
                      <p className="text-xl font-bold text-foreground mt-1">{product.batches}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">Срок годности</p>
                      <p className="text-lg font-bold text-foreground mt-1">{product.expiryDate}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">Температура</p>
                      <p className="text-lg font-bold text-foreground mt-1">{product.temperature}°C</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase">Статус</p>
                      <p className="text-lg font-bold text-foreground mt-1">{getStatusLabel(product.status)}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <button className="ml-4 p-2 hover:bg-secondary rounded-md transition-colors">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Batch Details */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground mb-3">Партии:</p>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: product.batches }).map((_, i) => (
                    <div key={i} className="px-3 py-1 bg-secondary/50 rounded-full text-xs text-foreground">
                      Партия #{i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <Button size="sm" variant="outline">
                  Редактировать
                </Button>
                <Button size="sm" variant="outline">
                  Просмотреть партии
                </Button>
                <Button size="sm" variant="outline">
                  История движения
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
