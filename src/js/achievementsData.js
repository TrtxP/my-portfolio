export const achievementsSummary = {
    institution: 'kood / Zhytomyr',
    program: 'Full-Stack Mastery',
    period: '29.09.2025 — 05.10.2026',
    partner: 'Житомирська політехніка & ESTDEV (Естонія)',
    totalHours: '1 160',
    completionRate: '100%',
    softSkillsGrade: '100%',
    peerReviewers: 26,
}

export const academicModules = [
    {
        id: 'java',
        title: 'Coding Fundamentals Java',
        hours: 130,
        completion: '100%',
        completionDate: '04.11.2025',
        collaborators: 12,
        description:
            'Бекенд-програмування на Java та принципи ООП: CLI-утиліти, робота з файловими системами, парсинг даних, веб-застосунки, розробка API та реляційні бази даних.',
        projects: [
            { name: 'Itinerary', hours: 60, rate: '100%', date: '18.10.2025' },
            { name: 'KMDB', hours: 70, rate: '100%', date: '04.11.2025' },
        ],
    },
    {
        id: 'web',
        title: 'Application Development',
        hours: 605,
        completion: '100%',
        completionDate: '04.08.2026',
        collaborators: 24,
        description:
            'Сучасна full-stack розробка: JavaScript, TypeScript, React. Безпечна автентифікація, GraphQL API, event-driven архітектура, real-time комунікація, власний фронтенд-фреймворк, рекомендаційні алгоритми, дизайн баз даних та оптимізація швидкодії.',
        projects: [
            { name: 'hello-js', hours: 15, rate: '100%', date: '03.01.2026' },
            { name: 'real-js', hours: 15, rate: '100%', date: '21.01.2026' },
            { name: 'browser-js', hours: 20, rate: '100%', date: '02.02.2026' },
            { name: 'racetrack', hours: 225, rate: '100%', date: '19.03.2026' },
            { name: 'TypeScript Sprint', hours: 15, rate: '100%', date: '24.03.2026' },
            { name: 'match-me', hours: 200, rate: '100%', date: '23.07.2026' },
            { name: 'dot-js', hours: 55, rate: '100%', date: '29.07.2026' },
            { name: 'web-game', hours: 60, rate: '100%', date: '04.08.2026' },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile App Development',
        hours: 425,
        completion: '100%',
        completionDate: '05.10.2026',
        collaborators: 13,
        description:
            'Кросплатформенні додатки на Flutter (iOS, Android, Web): кастомні інтерфейси на Canvas, локальне сховище з шифруванням, WebSockets, мультиплеєрна ігрова архітектура, сенсори пристроїв, потокова обробка даних, реактивне управління станом.',
        projects: [
            { name: 'Literal Maintainer', hours: 115, rate: '100%', date: '22.08.2026' },
            { name: 'Boredom', hours: 140, rate: '100%', date: '18.09.2026' },
            { name: 'Artist', hours: 35, rate: '100%', date: '24.09.2026' },
            { name: 'Comms', hours: 80, rate: '100%', date: '05.10.2026' },
            { name: 'Marathon', hours: 55, rate: '100%', date: '03.10.2026' },
        ],
    },
]

export const softSkillsData = [
    {
        skill: 'Teamwork',
        grade: '100%',
        description:
            'Ефективна співпраця в командах, підтримка та прозора комунікація з учасниками проєкту.',
    },
    {
        skill: 'Critical thinking',
        grade: '100%',
        description:
            'Конструктивний зворотний зв’язок, пошук нестандартних та інноваційних інженерних рішень.',
    },
    {
        skill: 'Discipline',
        grade: '100%',
        description:
            'Надійний тайм-менеджмент, дотримання дедлайнів та повна відповідальність за результати.',
    },
]

export const documentsList = [
    {
        id: 'certificate',
        title: 'Completion Certificate',
        subtitle: 'Сертифікат про закінчення програми Full-Stack Mastery',
        institution: 'kood / Zhytomyr',
        date: '05.10.2026',
        scope: '1 160 академічних годин',
        description:
            'Офіційне підтвердження успішного завершення обов’язкової річної програми навчання: Java (130 год), Application Development (605 год) та Mobile Development (425 год).',
        pdfUrl: '/documents/kood-completion-certificate.pdf',
        pages: ['/documents/previews/certificate-page-1.png'],
        pageLabels: ['Сертифікат'],
        orientation: 'landscape',
        highlights: [
            { label: 'Програма', value: 'Full-Stack Mastery' },
            { label: 'Обсяг', value: '1 160 год' },
            { label: 'Результат', value: '100% виконано' },
        ],
    },
    {
        id: 'transcript',
        title: 'Transcript of Studies',
        subtitle: 'Офіційна академічна виписка (4 сторінки)',
        institution: 'kood / Zhytomyr',
        date: '29.09.2025 — 05.10.2026',
        scope: '4 сторінки · 3 модулі · 15 проєктів',
        description:
            'Повний деталізований транскрипт усіх завершених модулів та проєктів з погодинним обліком, показниками успішності та статистикою командної співпраці.',
        pdfUrl: '/documents/kood-transcript-of-studies.pdf',
        pages: [
            '/documents/previews/transcript-page-1.png',
            '/documents/previews/transcript-page-2.png',
            '/documents/previews/transcript-page-3.png',
            '/documents/previews/transcript-page-4.png',
        ],
        pageLabels: [
            'Стор. 1: Java (130 год)',
            'Стор. 2: Web Dev (605 год)',
            'Стор. 3: Mobile (425 год)',
            'Стор. 4: Підтвердження',
        ],
        orientation: 'portrait',
        highlights: [
            { label: 'Сторінок', value: '4 стор.' },
            { label: 'Модулів', value: '3 ключові' },
            { label: 'Проєктів', value: '15 завершено' },
        ],
    },
    {
        id: 'soft-skills',
        title: 'Soft Skills Addendum',
        subtitle: 'Оцінка гнучких навичок за peer-review',
        institution: 'kood / Zhytomyr',
        date: '05.10.2026',
        scope: '100% Grade · 26 одногрупників',
        description:
            'Оцінка гнучких навичок на основі спільної роботи та відгуків 26 fellow students. 100% за роботу в команді, критичне мислення та дисципліну.',
        pdfUrl: '/documents/kood-soft-skills-addendum.pdf',
        pages: ['/documents/previews/soft-skills-page-1.png'],
        pageLabels: ['Soft Skills (100%)'],
        orientation: 'portrait',
        highlights: [
            { label: 'Загальна оцінка', value: '100%' },
            { label: 'Рецензентів', value: '26 студентів' },
            { label: 'Навички', value: 'Teamwork, Thinking, Discipline' },
        ],
    },
]

