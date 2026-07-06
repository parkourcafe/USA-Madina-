# Сгенерированные ассеты — статус на 07.07.2026

Медиа для сайта уже положены в `public/media/` и подключены через
`content/site.ts`. Исходники были в рабочей папке проекта как локальные MP4.

## Готово в репозитории

| Файл | Слот | Источник | Параметры |
| --- | --- | --- | --- |
| `hero.mp4` | `heroVideo.mp4` | line/wave MP4 | H.264, 1280x720, 24 fps, 5.0 s, 1.29 MB, без аудио |
| `hero.webm` | `heroVideo.webm` | line/wave MP4 | VP9, 1280x720, 24 fps, 5.0 s, 86 KB, без аудио |
| `hero-poster.jpg` | `heroVideo.poster` | кадр из `hero.mp4` | JPG, 1280x720 |
| `problem.mp4` | `problemSequence.mp4` | network/dots MP4 | H.264, 1280x720, 24 fps, 5.0 s, 1.02 MB, без аудио |
| `problem-poster.jpg` | `problemSequence.poster` | кадр из `problem.mp4` | JPG, 1280x720 |
| `loop-poster.jpg` | `loopVisual.poster` | кадр из `problem.mp4` | JPG, 1280x720 |
| `cta.mp4` | `ctaVisual.mp4` | line/wave MP4 | H.264, 1280x720, 24 fps, 5.0 s, 1.29 MB, без аудио |
| `cta-poster.jpg` | `ctaVisual.poster` | кадр из `cta.mp4` | JPG, 1280x720 |

## Что осталось

- `founder.jpg` — нужен реальный портрет основателя, около 800x1000 px.
  Не генерировать: на странице `/about` это честный founder slot.
- Можно позже заменить `loop-poster.jpg` на отдельный premium still, если будет
  новый Higgsfield/Gemini asset. Сейчас слот закрыт рабочим абстрактным кадром.

## Примечания

- Все видео укладываются в лимит до 2.5 MB на файл.
- Видео не автозапускаются на mobile/reduced-motion: сайт показывает posters.
- Если файлы будут заменены, имена должны остаться такими же, чтобы не менять JSX.
