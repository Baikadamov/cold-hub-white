# 🖥️ Инструкция по установке на сервер

## Шаг 1: Подготовка сервера

### Установка Docker (Ubuntu/Debian)

```bash
# Обновление пакетов
sudo apt update
sudo apt upgrade -y

# Установка зависимостей
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Добавление GPG ключа Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Добавление репозитория Docker
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Установка Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Добавление пользователя в группу docker
sudo usermod -aG docker $USER

# Перезагрузка для применения изменений
newgrp docker
```

### Проверка установки

```bash
docker --version
docker compose version
```

## Шаг 2: Клонирование и запуск проекта

```bash
# Клонирование репозитория
git clone <your-repo-url>
cd white_version

# Запуск приложения
docker compose up --build -d

# Проверка статуса
docker compose ps

# Просмотр логов
docker compose logs -f
```

## Шаг 3: Настройка firewall

```bash
# Разрешить порт 3000
sudo ufw allow 3000

# Или если используете Nginx
sudo ufw allow 80
sudo ufw allow 443

# Включить firewall
sudo ufw enable

# Проверить статус
sudo ufw status
```

## Шаг 4: Проверка работы

Откройте в браузере:
```
http://your-server-ip:3000
```

## Автозапуск при перезагрузке

Docker Compose уже настроен на автозапуск (`restart: unless-stopped`).

Проверить можно так:
```bash
# Перезагрузка сервера
sudo reboot

# После перезагрузки проверить
docker compose ps
```

## Обновление приложения

```bash
# Перейти в директорию проекта
cd white_version

# Получить последние изменения
git pull

# Пересобрать и перезапустить
docker compose down
docker compose up --build -d
```

## Мониторинг

### Просмотр логов
```bash
docker compose logs -f
```

### Использование ресурсов
```bash
docker stats
```

### Статус контейнеров
```bash
docker compose ps
```

## Резервное копирование

```bash
# Создать backup образа
docker save coldhub-app > coldhub-backup.tar

# Восстановить из backup
docker load < coldhub-backup.tar
```

## Troubleshooting

### Приложение не запускается

```bash
# Проверить логи
docker compose logs

# Пересобрать без кэша
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Порт занят

```bash
# Найти процесс на порту 3000
sudo lsof -i :3000

# Убить процесс
sudo kill -9 <PID>
```

### Очистка Docker

```bash
# Удалить неиспользуемые образы и контейнеры
docker system prune -a

# Удалить volumes
docker volume prune
```

## Настройка HTTPS (опционально)

Для настройки HTTPS используйте Nginx и Let's Encrypt.
См. файл `nginx.conf.example` для примера конфигурации.

```bash
# Установка Nginx
sudo apt install nginx

# Установка Certbot
sudo apt install certbot python3-certbot-nginx

# Получение SSL сертификата
sudo certbot --nginx -d your-domain.com
```

