# ✅ Чек-лист деплоя

## Перед деплоем

- [ ] Docker установлен на сервере
- [ ] Docker Compose установлен на сервере
- [ ] Порт 3000 открыт в firewall
- [ ] Git установлен на сервере

## Деплой

### Вариант 1: Быстрый деплой (рекомендуется)

```bash
git clone <your-repo-url>
cd white_version
docker compose up --build -d
```

### Вариант 2: С использованием скрипта

```bash
git clone <your-repo-url>
cd white_version
./deploy.sh
```

### Вариант 3: С использованием Makefile

```bash
git clone <your-repo-url>
cd white_version
make deploy
```

## После деплоя

- [ ] Проверить статус: `docker compose ps`
- [ ] Проверить логи: `docker compose logs -f`
- [ ] Открыть в браузере: `http://your-server-ip:3000`
- [ ] Проверить все страницы работают
- [ ] Проверить адаптивность на мобильных

## Мониторинг

```bash
# Статус контейнеров
docker compose ps

# Логи в реальном времени
docker compose logs -f

# Использование ресурсов
docker stats

# Проверка здоровья
curl http://localhost:3000
```

## Обновление

```bash
cd white_version
git pull
docker compose down
docker compose up --build -d
```

## Откат (если что-то пошло не так)

```bash
# Остановить текущую версию
docker compose down

# Вернуться к предыдущему коммиту
git checkout <previous-commit-hash>

# Запустить старую версию
docker compose up --build -d
```

## Полезные команды

```bash
# Перезапуск без пересборки
docker compose restart

# Остановка
docker compose down

# Полная очистка и пересборка
docker compose down -v
docker system prune -a
docker compose up --build -d

# Просмотр логов конкретного контейнера
docker logs coldhub-app

# Вход в контейнер
docker exec -it coldhub-app sh
```

## Troubleshooting

### Проблема: Приложение не запускается

```bash
docker compose logs
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Проблема: Порт занят

```bash
sudo lsof -i :3000
sudo kill -9 <PID>
docker compose up -d
```

### Проблема: Нет доступа извне

```bash
# Проверить firewall
sudo ufw status
sudo ufw allow 3000

# Проверить, что контейнер слушает на 0.0.0.0
docker compose ps
```

## Безопасность

- [ ] Настроить firewall (ufw)
- [ ] Использовать HTTPS (Nginx + Let's Encrypt)
- [ ] Регулярно обновлять зависимости
- [ ] Настроить автоматические бэкапы
- [ ] Мониторить логи на ошибки

## Производительность

- [ ] Проверить использование памяти: `docker stats`
- [ ] Настроить логирование (ротация логов)
- [ ] Мониторить время отклика
- [ ] Настроить CDN для статики (опционально)

## Бэкапы

```bash
# Создать backup
docker save coldhub-app > backup-$(date +%Y%m%d).tar

# Восстановить
docker load < backup-YYYYMMDD.tar
```

