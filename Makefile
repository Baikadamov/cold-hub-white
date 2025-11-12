.PHONY: help build up down restart logs clean dev install

help: ## Показать эту справку
	@echo "Доступные команды:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Собрать Docker образ
	docker compose build

up: ## Запустить приложение
	docker compose up -d

down: ## Остановить приложение
	docker compose down

restart: ## Перезапустить приложение
	docker compose restart

logs: ## Показать логи
	docker compose logs -f

clean: ## Очистить Docker ресурсы
	docker compose down -v
	docker system prune -f

dev: ## Запустить в режиме разработки
	pnpm dev

install: ## Установить зависимости
	pnpm install

deploy: ## Полный деплой (остановка, сборка, запуск)
	docker compose down
	docker compose build --no-cache
	docker compose up -d
	@echo "✅ Деплой завершен! Приложение доступно на http://localhost:3000"

status: ## Показать статус контейнеров
	docker compose ps

stats: ## Показать использование ресурсов
	docker stats --no-stream

