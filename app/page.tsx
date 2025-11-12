"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Snowflake } from "lucide-react"
import LandingPage from "@/components/landing-page"
import Dashboard from "@/components/dashboard"
import AIAdvisor from "@/components/ai-advisor"
import ProductsSection from "@/components/products-section"
import OrdersSection from "@/components/orders-section"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"landing" | "dashboard" | "ai-advisor" | "products" | "orders">(
    "landing",
  )

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary flex items-center gap-2">
            <Snowflake className="w-6 h-6" />
            ColdHub -50
          </div>
          <div className="flex gap-2">
            <Button
              variant={currentPage === "landing" ? "default" : "ghost"}
              onClick={() => setCurrentPage("landing")}
              size="sm"
            >
              Landing
            </Button>
            <Button
              variant={currentPage === "dashboard" ? "default" : "ghost"}
              onClick={() => setCurrentPage("dashboard")}
              size="sm"
            >
              Dashboard
            </Button>
            <Button
              variant={currentPage === "ai-advisor" ? "default" : "ghost"}
              onClick={() => setCurrentPage("ai-advisor")}
              size="sm"
            >
              AI Advisor
            </Button>
            <Button
              variant={currentPage === "products" ? "default" : "ghost"}
              onClick={() => setCurrentPage("products")}
              size="sm"
            >
              Товары & Партии
            </Button>
            <Button
              variant={currentPage === "orders" ? "default" : "ghost"}
              onClick={() => setCurrentPage("orders")}
              size="sm"
            >
              Заказы
            </Button>
          </div>
        </div>
      </nav>

      {currentPage === "landing" && <LandingPage />}
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "ai-advisor" && <AIAdvisor />}
      {currentPage === "products" && <ProductsSection />}
      {currentPage === "orders" && <OrdersSection />}
    </div>
  )
}
