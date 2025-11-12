# ColdHub -50 | Cold Storage Management

Система управления складом глубокой заморозки с камерой -50°C.

## 🚀 Быстрый запуск

```bash
git clone <your-repo-url>
cd white_version
docker compose up --build
```

Приложение будет доступно на `http://localhost:3000`

## 🐳 Docker команды

```bash
# Запуск
docker compose up --build

# Запуск в фоне
docker compose up -d --build

# Остановка
docker compose down

# Логи
docker compose logs -f
```

## 🛠️ Разработка

```bash
pnpm install
pnpm dev
```

