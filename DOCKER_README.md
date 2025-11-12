# 🐳 Docker Deployment

## Запуск

```bash
git clone <your-repo-url>
cd white_version
docker compose up --build
```

Приложение: `http://localhost:3000` или `http://your-server-ip:3000`

## Команды

```bash
# Запуск
docker compose up --build

# Запуск в фоне
docker compose up -d --build

# Остановка
docker compose down

# Логи
docker compose logs -f

# Перезапуск
docker compose restart

# Пересборка
docker compose build --no-cache
```

## Troubleshooting

```bash
# Порт занят
lsof -ti:3000 | xargs kill -9

# Очистка кэша
docker system prune -a

# Firewall
sudo ufw allow 3000
```

