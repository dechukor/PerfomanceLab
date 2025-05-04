# PerfomanceLab

Описание задачи:

1. Есть 3 категории товаров: еда, одежда, электроника.
2. Под каждую категорию страница с гридом и пагинацией.
3. Должна быть возможность сортировки хотя бы по одному столбцу (например, наименование товара. Можно использовать заглушки для начитки данных).
4. Есть корзина в виде сайдбара, который выезжает справа со списком добавленных товаров.

Тех.требования:

1. Использовать React + Typescript+ Redux-toolkit
2. User-friendly interface.
3. Фокусироваться на БЭКе не стоит. Можно использовать заглушки

Git Flow:

- main - ветка для размещения итоговой версии приложения (production)
- feature - ветка разработки приложения
  - PRJ-[номер задачи] - ветки для реализации отдельных задач в приложении.
    - PRJ-01 - развернуть проект на Vite, подключить Redux-toolkit.
    - PRJ-02 - подключить и настроить JSON-server.
    - PRJ-03 - сформировать структуру каталогов, создать макет сайта.
    - PRJ-04 - создать модули card(карточка товара), card-list(грид с карточками).
    - PRJ-05 - создать и настроить store при помощи Redux-toolkit, загрузку данных с сервера осуществлять при помощи RTK-query
    - PRJ-06 - создать Корзину в виде сайдбара, который выезжает справа со списком добавленных товаров, описать логику добавления товаров в корзину.
    - PRJ-07 - выполнить оптимизацию и реорганизацию структуры каталогов проекта.
    - PRJ-08 - добавить карточку товара с описанием, карточка должна открываться в модальном окне и содержать более полное описание товара.

```
Скрипты для работы с проектом:

    "npm run build": сборка production версии проекта
    "npm run dev": запуск development версии проекта
    "npm run server": запуск JSON-server
    "npm start": совместный запуск JSON-server и development версии проекта (npm run server + npm run dev)
```

```
PerfomanceLab
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ images
│     ├─ category
│     │  ├─ category-clothes.png
│     │  ├─ category-electronics.png
│     │  └─ category-foods.png
│     ├─ logo
│     │  ├─ icon.png
│     │  └─ logo.png
│     └─ plugs
│        ├─ loading.gif
│        └─ noImage.png
├─ README.md
├─ server
│  └─ db.json      // моковая БД бэка для JSON-server
├─ src
│  ├─ App.scss
│  ├─ App.tsx
│  ├─ components
│  │  ├─ cart-card      // карточка товара в корзине
│  │  │  ├─ CartCard.module.scss
│  │  │  └─ CartCard.tsx
│  │  ├─ category-card      // карточка выбора категории
│  │  │  ├─ CategoryCard.module.scss
│  │  │  └─ CategoryCard.tsx
│  │  ├─ index.ts
│  │  ├─ paginator    // компонент пагинатор
│  │  │  ├─ Paginator.module.scss
│  │  │  └─ Paginator.tsx
│  │  ├─ product-card       // карточка товара в списке выбора товаров
│  │  │  ├─ ProductCard.module.scss
│  │  │  └─ ProductCard.tsx
│  │  ├─ product-card-description       // карточка товара с полным описанием
│  │  │  ├─ ProductCardDescription.module.scss
│  │  │  └─ ProductCardDescription.tsx
│  │  └─ sort           // компонент сортировки
│  │     ├─ Sort.module.scss
│  │     └─ Sort.tsx
│  ├─ constants
│  │  ├─ categories.ts          // файл содержащий объект, который описывает категории товаров на сайте
│  │  ├─ price-unit.ts           // денежные единицы отображаемые на сайте
│  │  └─ URL.ts          // url сервера
│  ├─ index.scss
│  ├─ index.tsx
│  ├─ layout
│  │  ├─ header          // заголовок сайта
│  │  │  ├─ Header.module.scss
│  │  │  └─ Header.tsx
│  │  ├─ index.ts
│  │  └─ main           // основной блок
│  │     ├─ Main.module.scss
│  │     └─ Main.tsx
│  ├─ modules
│  │  ├─ cart          // корзина
│  │  │  ├─ Cart.module.scss
│  │  │  └─ Cart.tsx
│  │  ├─ cart-card-list          // список товаров в корзине
│  │  │  ├─ CartCardList.module.scss
│  │  │  └─ CartCardList.tsx
│  │  ├─ index.ts
│  │  └─ product-card-list          // список товаров
│  │     ├─ ProductCardList.module.scss
│  │     └─ ProductCardList.tsx
│  ├─ pages
│  │  ├─ category-page          // страница выбора категории (домашняя страница)
│  │  │  ├─ CategoryPage.module.scss
│  │  │  └─ CategoryPage.tsx
│  │  ├─ index.ts
│  │  └─ select-category          // страница отображения категории товаров
│  │     ├─ SelectCategory.module.scss
│  │     └─ SelectCategory.tsx
│  ├─ services
│  │  └─ productsApi.ts
│  ├─ store
│  │  ├─ cartSlice.ts
│  │  ├─ selectedCategorySlice.ts
│  │  └─ store.ts
│  ├─ styles
│  │  ├─ main.scss
│  │  ├─ _mixins.scss
│  │  └─ _vars.scss
│  ├─ types
│  │  └─ types.ts
│  ├─ UI
│  │  ├─ button
│  │  │  ├─ Button.module.scss
│  │  │  └─ Button.tsx
│  │  ├─ error
│  │  │  ├─ Error.module.scss
│  │  │  └─ Error.tsx
│  │  ├─ index.ts
│  │  ├─ loading
│  │  │  ├─ Loading.module.scss
│  │  │  └─ Loading.tsx
│  │  ├─ modal
│  │  │  ├─ Modal.module.scss
│  │  │  └─ Modal.tsx
│  │  └─ select
│  │     ├─ Select.module.scss
│  │     └─ Select.tsx
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
