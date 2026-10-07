export const projects = [
    {
        title: 'Web Messenger',
        repo: 'web-messenger',
        featured: true,
        description:
            'Захищений месенджер на Flutter Web і NestJS: особисті та групові чати, пошук по повідомленнях, опитування, шифрування AES-256-GCM. Єдина кодова база і база даних з мобільною версією.',
        stack: ['Flutter', 'Dart', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Docker'],
        github: 'https://github.com/TrtxP/web-messenger',
        stars: 0,
    },
    {
        title: 'Arena Collector',
        repo: 'web-game',
        description:
            'Браузерна гра з динамічною ареною, де гравець збирає предмети та змагається за рахунок. Повністю на чистому JavaScript.',
        stack: ['JavaScript', 'CSS', 'HTML'],
        github: 'https://github.com/TrtxP/web-game',
        stars: 1,
    },
    {
        title: 'Match-Me',
        repo: 'web',
        featured: true,
        description:
            'Full-stack додаток для знайомств та зустрічей з людьми з усього світу. Java бекенд із TypeScript фронтендом.',
        stack: ['Java', 'TypeScript', 'Full-Stack'],
        github: 'https://github.com/TrtxP/web',
        stars: 0,
    },
    {
        title: 'GraphQL API',
        repo: 'graphql',
        description:
            'Фінальний проект з використанням GraphQL на TypeScript з Apollo Server. Типізований API з запитами та мутаціями.',
        stack: ['TypeScript', 'GraphQL', 'Apollo Server'],
        github: 'https://github.com/TrtxP/graphql',
        stars: 0,
    },
    {
        title: 'Frontend Framework',
        repo: 'frontend-framework',
        featured: true,
        description:
            'Власний фронтенд-фреймворк, написаний на чистому Vanilla JS. Компонентний підхід, роутинг та реактивний стан.',
        stack: ['JavaScript', 'CSS', 'Architecture'],
        github: 'https://github.com/TrtxP/frontend-framework',
        stars: 0,
    },
    {
        title: 'Backend Kurswork',
        repo: 'backend-kurswork',
        description:
            'Курсова робота з бекенд-розробки. Серверна частина на TypeScript та PHP із динамічним фронтендом.',
        stack: ['TypeScript', 'PHP', 'CSS', 'HTML'],
        github: 'https://github.com/TrtxP/backend-kurswork',
        stars: 0,
    },
    {
        title: 'Socket-IO',
        repo: 'Socket-IO',
        description:
            'Приклад використання Socket.IO для зручного написання коду веб-сокетів. Real-time комунікація між клієнтом та сервером з EJS-шаблонами.',
        stack: ['JavaScript', 'Socket.IO', 'EJS', 'Node.js'],
        github: 'https://github.com/TrtxP/Socket-IO',
        stars: 1,
    },
]

export const featuredProjects = projects.filter((project) => project.featured)
export const otherProjects = projects.filter((project) => !project.featured)

export const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Java',
    'Flutter',
    'Dart',
    'NestJS',
    'Мобільна розробка',
    'GraphQL',
    'PHP',
    'Tailwind CSS',
    'Vite',
    'Apollo Server',
    'Git',
    'REST API',
    'Socket.IO',
    'Full-Stack',
]

// Навчальні модулі: дані з академічної виписки kood/Zhytomyr.
// Години — орієнтовний час, витрачений студентом на тему (за визначенням у виписці).
export const modules = [
    {
        name: 'Coding Fundamentals Java',
        hours: 130,
        date: '04.11.2025',
        projects: ['Itinerary', 'KMDB'],
    },
    {
        name: 'Application Development',
        hours: 605,
        date: '04.08.2026',
        projects: ['hello-js', 'real-js', 'browser-js', 'racetrack', 'TypeScript Sprint', 'match-me', 'dot-js', 'web-game'],
    },
    {
        name: 'Mobile App Development',
        hours: 425,
        date: '05.10.2026',
        projects: ['Literal Maintainer', 'Boredom', 'Artist', 'Comms', 'Marathon'],
    },
]

const DOCS = `${import.meta.env.BASE_URL}docs/`

export const documents = [
    {
        id: 'certificate',
        title: 'Completion Certificate',
        subtitle: 'Сертифікат про завершення програми Full-Stack Mastery',
        description:
            'Програма kood/Zhytomyr, 29.09.2025 — 05.10.2026. Три модулі: Java, Application Development і Mobile App Development.',
        facts: ['1 сторінка', '1160 годин'],
        pdf: `${DOCS}certificate.pdf`,
        preview: { src: `${DOCS}certificate-preview.webp`, width: 1100, height: 778 },
        pages: [{ src: `${DOCS}certificate-1.webp`, width: 2000, height: 1414 }],
        landscape: true,
    },
    {
        id: 'transcript',
        title: 'Transcript of Studies',
        subtitle: 'Академічна виписка',
        description:
            'Три модулі, 15 проєктів, години та дати здачі кожного. Виконання всіх обов\u2019язкових проєктів: 100%.',
        facts: ['4 сторінки', '15 проєктів'],
        pdf: `${DOCS}transcript.pdf`,
        preview: { src: `${DOCS}transcript-preview.webp`, width: 900, height: 1273 },
        pages: [1, 2, 3, 4].map((n) => ({ src: `${DOCS}transcript-${n}.webp`, width: 1500, height: 2122 })),
    },
    {
        id: 'soft-skills',
        title: 'Soft Skills Addendum',
        subtitle: 'Додаток до виписки: оцінка soft skills',
        description:
            'Відгуки 26 студентів: командна робота, критичне мислення та дисципліна. Кожен показник 100%.',
        facts: ['1 сторінка', '26 відгуків'],
        pdf: `${DOCS}soft-skills.pdf`,
        preview: { src: `${DOCS}soft-skills-preview.webp`, width: 900, height: 1273 },
        pages: [{ src: `${DOCS}soft-skills-1.webp`, width: 1500, height: 2122 }],
    },
]
