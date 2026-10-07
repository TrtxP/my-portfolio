# Портфоліо Іллі Черепанова

Односторінкове портфоліо у стилі чоловічого мінімалізму: світла «паперова» тема, чорний текст, монохромна темна тема.
Живий сайт: https://ilya-dev.vercel.app

## Стек

React 19, Vite 8, Tailwind CSS 4. Шрифти Oswald (заголовки) та JetBrains Mono (текст) вбудовані через `@fontsource`, зовнішніх запитів до CDN немає.

## Структура

```
src/
  App.jsx                  збирає сторінку; hash-маршрут #/documents/<id> для перегляду документів
  components/
    ViewHeader.jsx         шапка й навігація
    ViewMainSection.jsx    hero
    ViewProjectsSection.jsx  3 повні блоки + компактний список інших проєктів
    ViewSkillsSection.jsx  навички
    ViewAchievementsSection.jsx  години за модулями, сертифікат і документи з прев'ю
    ViewDocument.jsx       повний перегляд документа (сторінки PDF як зображення)
    ViewProfile.jsx        контакти
    ToggleThemes.jsx       світла/темна тема (зберігається в localStorage)
  js/arrays.js             дані: проєкти, навички, модулі, документи
  js/send-email.js         відкриття Gmail або mailto
public/
  docs/                    PDF документів і їхні зображення (webp)
  favicon.svg, robots.txt, sitemap.xml
```

## Запуск

```bash
npm install
npm run dev      # розробка
npm run build    # збірка в dist/
npm run preview  # перегляд збірки
```

## Як змінити вміст

- **Проєкти:** `src/js/arrays.js`, масив `projects`. Поле `featured: true` робить проєкт повним блоком на екран, решта потрапляє в компактний список.
- **Навички:** масив `skills` в тому ж файлі.
- **Документи:** покласти PDF у `public/docs/`, зробити зображення сторінок (наприклад, `pdftoppm -png -r 220`), перетворити на webp і додати запис у `documents`.
- **Контакти:** `src/components/ViewProfile.jsx`.

## Приватність документів

У PDF у `public/docs/` дата народження замальована (текст видалено, а не лише прикрито). Перш ніж замінювати документи, перевірте оригінали на персональні дані.

## Деплой

Статичний сайт: підключений до Vercel, кожен `git push` у головну гілку запускає новий деплой.
