# Кино-ассеты для сайта — что генерить в Higgsfield

**06.07.2026 | Bali** Стиль: абстрактный, кинематографический, БЕЗ людей, БЕЗ стоковых фото. Мотив: телефонная линия соединяется, звуковые волны складываются в порядок, разрозненные звонки превращаются в записанные заказы. Палитра: глубокий pine `#0E3B36` \+ safety-orange `#F2601F` на тёмном фоне.

Все файлы кладём в папку `/public/media/` в репозитории. Имена — ровно как ниже (сайт уже на них ссылается через `content/site.ts`).

---

## 1\. `hero.mp4` (+ `hero.webm` \+ `hero-poster.jpg`)

Фоновое видео за заголовком главной. Тихое, зацикленное.

**Промпт:**

Abstract cinematic loop: a single glowing orange line travels across a deep dark-teal void and connects two points with a soft pulse, faint sound-wave ripples expanding outward, subtle particle data drifting and settling into neat rows, premium dark lighting, deep pine-green and safety-orange palette, slow smooth camera drift, no people, no text, no logos, seamless loop, 4K.

- Длина: 8–12 сек, бесшовный луп  
- Формат: MP4 (H.264), затем сконвертировать в WebM  
- **Обязательно постер:** кадр из видео как `hero-poster.jpg` (телефон и reduced-motion показывают его вместо видео)  
- Вес после сжатия: ≤ 2.5 MB

## 2\. `problem.mp4` (+ `problem-poster.jpg`)

Для секции «где утекают заказы»: хаос → порядок.

**Промпт:**

Abstract cinematic scene: scattered chaotic orange dots and broken line fragments drifting in a dark teal space, gradually organizing into clean aligned rows and a steady connected line, sense of disorder resolving into order, premium dark palette pine-green and safety-orange, smooth motion, no people, no text, 4K.

- Длина: 6–10 сек  
- Постер обязателен

## 3\. `loop-poster.jpg` (картинка, видео опционально)

Фон секции «как крутится петля».

**Промпт:**

Abstract premium still: a central glowing orange node with soft orbital rings and faint data cards arranged around it, deep pine-green background, elegant minimal, cinematic lighting, no people, no readable text, 4K.

## 4\. `cta.mp4` (+ `cta-poster.jpg`)

Фон финального призыва.

**Промпт:**

Abstract cinematic loop: a calm steady orange line pulsing gently like an open phone line, warm premium lighting on deep dark-teal, subtle glow, sense of "always on, always answered", no people, no text, seamless loop, 4K.

- Постер обязателен

---

## После генерации — как вставить

1. Сложи все файлы в `/public/media/` в репозитории (через GitHub → Add file → Upload, или локально \+ push)  
2. Проверь имена — точно как выше  
3. Видео сожми (Higgsfield или любой компрессор), цель — каждое ≤ 2.5 MB  
4. Пересобери сайт / передеплой на Vercel — ассеты подхватятся автоматически

**Если ассетов пока нет — сайт всё равно работает:** он показывает постеры или чистые цветовые поля pine+оранжевый и остаётся красивым. Видео можно добавить позже, ничего не сломается.

## Чего НЕ генерить

- людей, лица, «улыбающихся операторов»  
- фейковые дашборды с цифрами клиентов  
- фейковые документы, сертификаты, логотипы  
- 3D-объекты, не связанные с продуктом (случайные шары, кристаллы)  
- ничего с читаемым текстом (собьёт язык и будет выглядеть дёшево)

