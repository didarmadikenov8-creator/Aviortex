export const PHONE_DISPLAY = '+7 707 727 23 63';
export const PHONE_WA = '77077272363';
export const INSTAGRAM_URL = 'https://instagram.com/aviortex.almaty';
export const ADDRESS = 'ул. Яссауи, 139, Алматы';
export const ORDER_EVENT = 'aviortex:order';

export const waLink = (text) =>
    `https://wa.me/${PHONE_WA}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const openOrder = (product) =>
    window.dispatchEvent(new CustomEvent(ORDER_EVENT, { detail: product }));

export const PRODUCT_OPTIONS = [
    'Термосумки',
    'Спецодежда',
    'Шопперы',
    'Пледы',
    'Головные уборы',
    'Брендирование',
    'Другое',
];

const U = (id, w = 1200) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const P = (id, w = 940) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
    heroMain: U('photo-1745095034955-1019067b7ce4', 1600),
    heroSecondary: U('photo-1739117441029-9f2a8e59e8b2', 800),
    about: U('photo-1746737198845-e1e74bea786e', 1000),
    gallery: [
        { src: U('photo-1557462987-dd1c191266f0', 900), caption: 'Вышивка на производстве' },
        { src: P(9222790, 900), caption: 'Спецодежда с брендированием' },
        { src: U('photo-1497997092403-f091fcf5b6c4', 900), caption: 'Пошив изделий на заказ' },
        { src: P(13431758, 900), caption: 'Термосумка для доставки' },
        { src: U('photo-1699347611474-5be693bee31e', 900), caption: 'Головные уборы' },
        { src: P(9869067, 900), caption: 'Шопперы под нанесение логотипа' },
    ],
};

export const PRODUCTS = [
    {
        slug: 'thermosumki',
        title: 'Термосумки',
        desc: 'Термосумки и терморюкзаки для служб доставки и HoReCa — с брендированием вашего логотипа.',
        src: P(8988477, 1200),
        span: 'lg:col-span-4',
        ratio: 'aspect-[4/3]',
    },
    {
        slug: 'spetsodezhda',
        title: 'Спецодежда',
        desc: 'Рабочие костюмы, униформа и жилеты, сшитые под задачи вашего бизнеса.',
        src: U('photo-1635874555009-f7ec660e730c', 900),
        span: 'lg:col-span-2',
        ratio: 'aspect-[4/5]',
    },
    {
        slug: 'shoppery',
        title: 'Шопперы',
        desc: 'Эко-сумки из хлопка с нанесением логотипа — для ритейла, ивентов и промо.',
        src: U('photo-1574365569389-a10d488ca3fb', 900),
        span: 'lg:col-span-2',
        ratio: 'aspect-[4/5]',
    },
    {
        slug: 'pledy',
        title: 'Пледы',
        desc: 'Пледы с вышивкой или нанесением — мерч и корпоративные подарки для брендов.',
        src: P(30838013, 1200),
        span: 'lg:col-span-4',
        ratio: 'aspect-[4/3]',
    },
    {
        slug: 'golovnye-ubory',
        title: 'Головные уборы',
        desc: 'Бейсболки, шапки и другие головные уборы с вышивкой и нанесением.',
        src: P(37484033, 1200),
        span: 'lg:col-span-3',
        ratio: 'aspect-[3/2]',
    },
    {
        slug: 'brendirovanie',
        title: 'Брендирование',
        desc: 'Наносим ваш логотип на изделия — вышивка и другие способы нанесения.',
        src: U('photo-1657668282135-b620193e7801', 1200),
        span: 'lg:col-span-3',
        ratio: 'aspect-[3/2]',
    },
];

export const PROCESS_STEPS = [
    'Оставляете заявку',
    'Обсуждаем изделие, количество и брендирование',
    'Согласовываем заказ',
    'Производим',
    'Доставляем по Казахстану',
];

export const CLIENTS = ['CHOCOFOOD', 'MELOMAN', 'FREEDOM'];

export const MARQUEE_ITEMS = [
    'Термосумки',
    'Спецодежда',
    'Шопперы',
    'Пледы',
    'Головные уборы',
    'Брендирование',
    'Индивидуальный пошив',
];
