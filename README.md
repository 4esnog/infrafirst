# Задание №6 (инфраструктура веб-приложений) в ШРИ 2016, Яндекс.

[![Build Status](https://travis-ci.org/4esnog/infrafirst.svg?branch=master)](https://travis-ci.org/4esnog/infrafirst)
[![bitHound Overall Score](https://www.bithound.io/github/4esnog/infrafirst/badges/score.svg)](https://www.bithound.io/github/4esnog/infrafirst)

Посмотреть в действии: [ссылка](https://infrafirst.herokuapp.com/).

## Установка

```bash
npm install
```

## Тесты
```bash
npm run lint # ESLint
npm test     # Mocha тесты
```

## Запуск
```bash
npm start
```

## Описание работы

Само по себе это простое приложение, показывающее случайный смайлик на фоне случайного цвета. Клик в любом месте загружает с сервера новые цвет и смайлик. При каждом запросе на сервер приложение пишет в логи время рендеринга ответа и сам ответ:

```javascript
console.time('Render /');
res.render( ... );
console.timeEnd('Render /');
```

## Инфраструктура

При появлении в репозитории на GitHub коммитов и pull request, начинается сборка коммита/PR на Travis-CI. Трэвис запускает команды "npm run lint" (запускает линтер ESLint) и "npm run test" (unit-тесты Mocha). По окончании сборки на почту приходит уведомление о её результате. Если обновление произошло в ветке master, после успешной сборки в Travis, изменения разворачиваются на хостинг (Heroku).

### Проверки CI и BitHound для Pull request
![Pull Request checks](https://raw.githubusercontent.com/4esnog/infrafirst/master/screenshots/pr-checks.png)

### Travis-CI

Довольно удобный (и первый для меня) Continious Integration сервис. Без особых проблем настроил отправку уведомлений на email, деплой на heroku, и исполняемые при сборке скрипты через `.travis.yml`.

В шапку Readme добавлен бейдж "build".

### Heroku

Бесплатный хостинг, поддерживающий различные платформы и инструменты. Удобно работать с GitHub на nodejs. Сначала использовался Automatic Deploy с ожиданием прохождения тестов CI, но потом функцию отправки на деплой с heroku я переложил на Travis.

#### Логи

![Heroku logs](https://raw.githubusercontent.com/4esnog/infrafirst/master/screenshots/heroku-logs.png)

Можно посмотреть по пути More -> View logs. Именно сюда выводятся логи, которые пишет само приложение. Кроме них, пишутся и логи самого heroku, содержащие информацию о состоянии приложения и запросах к нему (id запроса, метод, адрес, адрес хоста, время соединения, статус ответа приложения, количество переданной информации).

### BitHound

Облачный линтер. Настроен мной так, чтобы приложение проверялось при каждом новом коммите. Показывает:

* количество зависимостей (dependencies и devDependencies), указывает на неиспользуемые
* качество кода
* использованные "хаки" (комментарии `//TODO:` и `//HACK`)
* общий балл (0 .. 100)

В шапку Readme добавлен бейдж BitHound.

### Uptime Robot

![Uptime Robot](https://raw.githubusercontent.com/4esnog/infrafirst/master/screenshots/uptimerobot.png)

Позволяет установить одновременно несколько мониторов, проверяющих состояние разных характеристик приложения:

* ответ http(s)
* наличие ключевого слова в ответе
* ping
* ответ определённого порта

Для каждого монитора есть график времени ответа за последние сутки, текущее состояние, события самого монитора (когда он был запущен, остановлен, когда изменилось состояние приложения).
