export const categories = [
  {
    name: "Кросовки",
  },
  {
    name: "Одежда",
  },
  {
    name: "Аксессуары",
  },
];

export const types = [
  {
    name: "Бег",
  },
  {
    name: "Баскетбол",
  },
  {
    name: "Футбол",
  },
  {
    name: "Кроссовки смехом",
  },
  {
    name: "Сапоги",
  },
  {
    name: "Ботинки",
  },
  {
    name: "Сандалии и сланцы",
  },
  {
    name: "Спортивный стиль",
  },
  {
    name: "Анораки",
  },
  {
    name: "Боксеры",
  },
  {
    name: "Бомберы",
  },
  {
    name: "Брюки спортивные",
  },
  {
    name: "Велокостюм",
  },
  {
    name: "Ветровки",
  },
  {
    name: "Браслеты",
  },
  {
    name: "Брелок",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const sizes = [
  {
    name: 35,
  },
  {
    name: 36,
  },
  {
    name: 37,
  },
  {
    name: 38,
  },
  {
    name: 39,
  },
  {
    name: 40,
  },

  {
    name: 41,
  },
  {
    name: 42,
  },

  {
    name: 43,
  },
  {
    name: 44,
  },
  {
    name: 45,
  },
];

export const brands = [
  {
    name: "Nike",
  },
  {
    name: "Addidas",
  },
  {
    name: "Asics",
  },
  {
    name: "Columbia",
  },
  {
    name: "Porsche",
  },
  {
    name: "Reebook",
  },
  {
    name: "Vans",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const seasons = [
  {
    name: "Демисезон",
  },
  {
    name: "Зима",
  },
  {
    name: "Лето",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const colors = [
  {
    name: "Черный",
    type: "#29292D",
  },
  {
    name: "Белый",
    type: "#FFFFFF",
  },
  {
    name: "Розовый",
    type: "#FFE1E1",
  },
  {
    name: "красный",
    type: "#D92A27",
  },
  {
    name: "Бежевый",
    type: "#EDDED0",
  },
  {
    name: "Голубой",
    type: "#76DECB",
  },
  {
    name: "Синий",
    type: "#336CBD",
  },
  {
    name: "Фиолетовый",
    type: "#A13FBA",
  },
  {
    name: "Зеленый",
    type: "#2C830E",
  },
  {
    name: "Хакки",
    type: "#2E4824",
  },
  {
    name: "Желтый",
    type: "#EBEF31",
  },
  {
    name: "Серый",
    type: "#C4C4C4",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "СЛАНЦЫ ADIDAS YEEZY SLIDE",
    description:
      "Кроссовки Nike Air Presto – обувь, которая создана с учетом максимальной вентиляции стопы и комфорта при ношении и занятиях спортом. Верхняя часть кроссовок изготовлена из материала, который обеспечивает идеальный микроклимат внутри обуви и комфорт при ношении. Подошва эластичная и в пяточной части имеет вставки «Air Sole» для лучшей амортизации. Глубокий рельеф протектора обеспечивает мягкость хода и удобство при ношении. Для фиксации стопы предусмотрена шнуровка через специальный каркас, который при затягивании образует жесткую и эластичную конструкцию.",
    price: 3690,
    brandId: 2,
    seasonId: 3,
    categoryId: 1,
    image: [
      "https://s3-alpha-sig.figma.com/img/fb18/1cef/50ed113657196f95ec7b3ba8cac64681?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwT1MZFIkcOD49gwUvcjh4M7ymGYfQfMJ2U0E8Ag0Fg3x2QwbOb5dD6w8J0X57i7h0uImE-E4IKBSH5vOKhMqA2IpBpzs~-cs5AkQsNHkY~-jpzxvuNQ~WyqhB2TLlQ7mNKLjSe0eSFHdb1ZjPDpyKbWaK-QSvIy3znJqe8lmRndmFbto0Zh-zWJquZ3Kium99U8d6GbVOWWqPjdRNHHdeG6imaPlXDrSh8KKBl2CdAfrmYiV9LOcNjUb6e96vsguWJ8ZHlSa8ZzcqM4ZPFYdIPKh3fUD8INw-bTYzn6xEW~2G8P2N0EO6YBCTK4beYS4epkCi3SZqdt6kBQMdTVrQ__",
      "https://s3-alpha-sig.figma.com/img/79f5/6499/3b85bc0f1e284c691be78fba2ab306da?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mD~O73LY2GNNrBgGPaQkqq-7jga9BxTKwGsQ5HWy5~m~VKYMMTTa3mWsfEZfL8-Fl93xmp4GoGGFsjwV-HwMUPRzoTlOpyw2JpAnp1KacpjNOyXyv-W61J~9CYkJ5eQfmFf59P23hjcxKEGirZy6AXpOGlhia12SmObzoJ2WWbcsPKl-2DxyGYo1xbac7xxgO27hqH7d9jGIr5pYaiHo4S-Mjjh6rzWGjjCsB0Cq3QS8Nn22MVKHW6tBw7GJTk-BtcrD-uWKYOYr0MKJ~TrX~7eddRBYyL6DQXzP~4fQsOVEthp4ZAyMKIZ5tVdwLtWovcwUic7aLa4m7HgS-sZ99A__",
      "https://s3-alpha-sig.figma.com/img/9180/9aaf/af922524eadcc563e631fe75f447de12?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZhZuGjXJYNfBpyTWMs-ZbLhTav3-A5MK2u0R8XgSyHFvcNg-EM8SQ1KO699QrGlNQKxTZubFLJIy~BsCXdt5f0qqhtDekuLo9AxSlDzlW6U0zzf3U5U89ExHAtSHKszFOIg0Gzjj6vt~P2vCUqOlXbt7bBDDz5nEH1CszE2yFpGkp9oIu~u0kaBHUI9y7ORl0zuTpxXTZxduqRghLf1FwItDuU2YUhe4X230rExyi-fV4aLJtgqSfsfQNmwK18AkyueYhe2CAveHEYTcVBbdobyRUAt0EpIw0wPnXEGxUxUblZAY-PFLytakJ1icLmSgpmRjGILRRLaxDsXxZXE3LQ__",
      "https://s3-alpha-sig.figma.com/img/b2bc/9bea/6126f12727be92a06ca8026a3d231482?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PscgF7hoGptxSTJZc9nqn0AyaBQaX42GH9z2zwZyuIQkg9jMvFlmJVvoW8S2lNuhqVW1D12P1~CFOYiPQNCyJu0xl7QhqB9XKLsOC-iDNr-qU6wNB4OErXJcV-sFw5opvSxcwKVQ8cdgrpJAtL9SEiKtz6s3SWlxFN5GSi~Qq-QNX-CVxBgOlLcPyQ0YJFIycQFPGu8DvhihYjADI4BXI0NMl0GkDG42vssNDgxt-ypTFYKiRwk7F9i3f4M9f-57GXlwdnCkD8zpc9ucOVk6ssRfYEi1790f-MBvHyScOAVuN8Lxur95IwxvXB5SQt8AeWSwY2NSoP1JYrKiY17PpA__",
      "https://s3-alpha-sig.figma.com/img/d588/58a1/0596e6b465e8fa65d4fe46c966300023?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=du4VkuAydkaPApHJ39iBXmT-P~ldbUOwTpfdndJrysLXdpBkNOVxmJ0~QlNct67QswWcDQ70NObPJddTTGtr~7CT8sV0RCtZ~0QmAVx5-rz~BygfIl7uvDIJR3JP1PmCrd1D3ioKWOenCREyLBSyq3tHcgIbbH07jRtUCYDDJVG1S9-aW6ATF6fR6E~QfNNJ8vWBs0EprFLnFsWq8BEqkshTqtFMYGJ5motpAGo9wAuvJCkZfKdsBUzq812rOdgbVc8QnBrpzzQ7-Adpt8oMUEY5C5ua9q16PHR~Q2uVEEePTapC7F~2ryP85mTIh-zhwryU1Xlf~D76dV1QgYHT5Q__",
    ],
    sale: true,
  },
  {
    name: "КРОССОВКИ NIKE AIR MAX 270",
    description:
      "Кроссовки Nike Air Max 270 сочетают в себе комфорт и стиль. Верхняя часть выполнена из легкого и дышащего материала, который обеспечивает максимальный комфорт в течение всего дня. Подошва оснащена амортизирующей вставкой Air Max, которая гарантирует превосходную амортизацию и поддержку стопы при ходьбе или беге.",
    price: 4990,
    brandId: 1,
    seasonId: 1,
    categoryId: 1,
    image: [
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
    ],
  },
  {
    name: "БОТИНКИ TIMBERLAND PREMIUM",
    description:
      "Ботинки Timberland Premium – это классическая обувь, которая идеально подходит для холодной погоды. Изготовлены из высококачественной натуральной кожи с водоотталкивающей обработкой. Прочная подошва обеспечивает отличное сцепление с любой поверхностью.",
    price: 7990,
    brandId: 3,
    seasonId: 2,
    categoryId: 1,
    image: [
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
    ],
  },
].map((obj, index) => ({ id: index + 1, ...obj }));
