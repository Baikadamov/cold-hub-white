# ⚡ Быстрый старт

## На сервере (первый раз)

```bash
# 1. Клонировать репозиторий
git clone <your-repo-url>
cd white_version

# 2. Запустить
docker compose up --build -d

# 3. Проверить
docker compose ps
```

**Готово!** Приложение доступно на `http://your-server-ip:3000`

---

## Основные команды

```bash
# Запуск
docker compose up -d

# Остановка
docker compose down

# Перезапуск
docker compose restart

# Логи
docker compose logs -f

# Статус
docker compose ps
```

---

## Обновление

```bash
git pull
docker compose down
docker compose up --build -d
```

---

## Если что-то не работает

```bash
# Полная пересборка
docker compose down
docker compose build --no-cache
docker compose up -d

# Проверить логи
docker compose logs -f
```

---

## Полезные ссылки

- [Подробная инструкция](DOCKER_README.md)
- [Настройка сервера](SERVER_SETUP.md)
- [Чек-лист деплоя](DEPLOYMENT_CHECKLIST.md)

