export default function ViewMainSection() {
    return (
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
    )
}