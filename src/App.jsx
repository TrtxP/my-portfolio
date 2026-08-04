import { useState, useEffect } from 'react'
import { handleEmailClick } from './send-email'
import ViewProfile from './components/ViewProfile'

const projects = [
  {
    title: 'Arena Collector',
    repo: 'web-game',
    description:
      'Браузерна гра з динамічною ареною, де гравець збирає предмети та змагається за рахунок. Повністю на чистому JavaScript.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    github: 'https://github.com/TrtxP/web-game',
    stars: 1,
    gradient: 'from-amber-400/40 via-orange-400/30 to-red-400/20',
    gradientDark: 'from-amber-500/30 via-orange-500/20 to-red-500/10',
    icon: '🎮',
  },
  {
    title: 'Match-Me',
    repo: 'web',
    description:
      'Full-stack додаток для знайомств та зустрічей з людьми з усього світу. Java бекенд із TypeScript фронтендом.',
    stack: ['Java', 'TypeScript', 'Full-Stack'],
    github: 'https://github.com/TrtxP/web',
    stars: 0,
    gradient: 'from-violet-400/40 via-fuchsia-400/30 to-pink-400/20',
    gradientDark: 'from-violet-500/30 via-fuchsia-500/20 to-pink-500/10',
    icon: '💬',
  },
  {
    title: 'GraphQL API',
    repo: 'graphql',
    description:
      'Фінальний проект з використанням GraphQL на TypeScript з Apollo Server. Типізований API з запитами та мутаціями.',
    stack: ['TypeScript', 'GraphQL', 'Apollo Server'],
    github: 'https://github.com/TrtxP/graphql',
    stars: 0,
    gradient: 'from-pink-400/40 via-rose-400/30 to-red-400/20',
    gradientDark: 'from-pink-500/30 via-rose-500/20 to-red-500/10',
    icon: '⚡',
  },
  {
    title: 'Frontend Framework',
    repo: 'frontend-framework',
    description:
      'Власний фронтенд-фреймворк, написаний на чистому Vanilla JS. Компонентний підхід, роутинг та реактивний стан.',
    stack: ['JavaScript', 'CSS', 'Architecture'],
    github: 'https://github.com/TrtxP/frontend-framework',
    stars: 0,
    gradient: 'from-emerald-400/40 via-teal-400/30 to-cyan-400/20',
    gradientDark: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/10',
    icon: '🧩',
  },
  {
    title: 'Backend Kurswork',
    repo: 'backend-kurswork',
    description:
      'Курсова робота з бекенд-розробки. Серверна частина на TypeScript та PHP із динамічним фронтендом.',
    stack: ['TypeScript', 'PHP', 'CSS', 'HTML'],
    github: 'https://github.com/TrtxP/backend-kurswork',
    stars: 0,
    gradient: 'from-sky-400/40 via-blue-400/30 to-indigo-400/20',
    gradientDark: 'from-sky-500/30 via-blue-500/20 to-indigo-500/10',
    icon: '🛠️',
  },
  {
    title: 'Socket-IO',
    repo: 'Socket-IO',
    description:
      'Приклад використання Socket.IO для зручного написання коду веб-сокетів. Real-time комунікація між клієнтом та сервером з EJS-шаблонами.',
    stack: ['JavaScript', 'Socket.IO', 'EJS', 'Node.js'],
    github: 'https://github.com/TrtxP/Socket-IO',
    stars: 1,
    gradient: 'from-lime-400/40 via-green-400/30 to-emerald-400/20',
    gradientDark: 'from-lime-500/30 via-green-500/20 to-emerald-500/10',
    icon: '🔌',
  },
]

const skills = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Java', icon: '☕' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'PHP', icon: '🐘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Apollo Server', icon: '🚀' },
  { name: 'Git', icon: '🔀' },
  { name: 'Full-Stack', icon: '🏗️' },
  { name: 'REST API', icon: '🔌' },
  { name: 'Socket.IO', icon: '📡' },
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#f8fafc,#f1f5f9)] transition-opacity duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,#020617,#0f172a)]" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Ілля<span className="text-cyan-500 dark:text-cyan-400">.</span>dev
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#projects">
              Проєкти
            </a>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#skills">
              Навички
            </a>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#contact">
              Контакти
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition hover:text-slate-900 dark:hover:text-white"
              href="https://github.com/TrtxP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </nav>
          <button
            onClick={toggleTheme}
            type="button"
            className="flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 p-2.5 text-slate-700 shadow-sm transition hover:border-cyan-500/50 hover:bg-white hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
            title={theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* VIEW PROFILE */}
      <ViewProfile />

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200">
            Full-Stack Developer • React • TypeScript • Java
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl">
            Створюю швидкі, чисті та зручні вебінтерфейси.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Допомагаю бізнесам і командам перетворювати ідеї на якісні
            вебпродукти: від першого прототипу до готового інтерфейсу.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
            >
              Переглянути роботи
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white/80 px-7 py-3 text-center font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-200"
            >
              Зв’язатися
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-2xl dark:shadow-black/30">
          <div className="rounded-[1.5rem] bg-slate-900 p-6 shadow-inner">
            <div className="mb-8 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-5 font-mono text-sm text-slate-300">
              <p>
                <span className="text-purple-300">const</span>{' '}
                <span className="text-cyan-300">developer</span> = &#123;
              </p>
              <p className="pl-5">
                focus: <span className="text-emerald-300">'UI quality'</span>,
              </p>
              <p className="pl-5">
                tools: <span className="text-emerald-300">'React + Vite'</span>,
              </p>
              <p className="pl-5">
                result:{' '}
                <span className="text-emerald-300">'clean production code'</span>
              </p>
              <p>&#125;</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Мої проекти на GitHub</h2>
          </div>
          <a
            href="https://github.com/TrtxP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 transition hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm font-medium">@TrtxP</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.repo}
              className={`group relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:bg-white hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:border-cyan-300/50 dark:hover:bg-white/[0.07] dark:hover:shadow-lg dark:hover:shadow-cyan-500/5 ${index >= 3 ? 'sm:col-span-1 lg:col-span-1' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient header with icon */}
              <div className={`relative mb-6 flex h-32 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} dark:${project.gradientDark} overflow-hidden`}>
                <span className="text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {project.icon}
                </span>
                {/* Star badge */}
                {project.stars > 0 && (
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-amber-600 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-amber-400">
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {project.stars}
                  </span>
                )}
              </div>

              {/* Title and repo name */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-slate-500 dark:text-slate-500">
                    TrtxP/{project.repo}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

              {/* Stack tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-cyan-950/40 dark:group-hover:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 hover:shadow dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-950/30 dark:hover:text-cyan-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Відкрити на GitHub
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Технології та фокус</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-4 py-2.5 font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-md dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:shadow-lg dark:hover:shadow-cyan-500/5"
              >
                <span className="text-base">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-16 pb-24">
        <div className="rounded-[2rem] bg-gradient-to-r from-cyan-400 to-cyan-500 p-8 text-slate-950 shadow-lg shadow-cyan-400/20 md:p-12">
          <p className="font-semibold uppercase tracking-[0.25em] text-slate-800">
            Contact
          </p>
          <div className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">Потрібен сайт?</h2>
              <p className="mt-4 max-w-2xl text-lg font-medium text-slate-900">
                Напишіть мені, і я підготую структуру, дизайн та реалізацію під
                ваші задачі.
              </p>
            </div>
            <a
              onClick={handleEmailClick}
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl"
            >
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor" />
              </svg>
              <span>Написати в Gmail</span>
              <svg className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

