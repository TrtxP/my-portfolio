import { skills } from "../js/arrays"

export default function ViewSkillsSection() {
    return (
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
    )
}