import { projects } from "../js/arrays"

export default function ViewProjectsSection() {
    return (
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
    )
}