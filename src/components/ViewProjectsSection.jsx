import { projects } from "../js/arrays"

export default function ViewProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-40">
            <h2 className="display mb-10 text-[clamp(3rem,8vw,7rem)]">Проєкти</h2>

            <div>
                {projects.map((project, index) => (
                    <article
                        key={project.repo}
                        className="flex min-h-[85svh] flex-col justify-between border-t border-rule py-6 md:py-8"
                    >
                        <div className="flex items-start justify-between gap-4 text-[13px] text-mute">
                            <span>TrtxP/{project.repo}</span>
                            <span>
                                {project.stars > 0 && <span className="mr-5">★ {project.stars}</span>}
                                {index + 1} / {projects.length}
                            </span>
                        </div>

                        <h3 className="display my-10 text-[clamp(3.25rem,12.5vw,13rem)] break-words">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="decoration-[0.04em] underline-offset-[0.1em] hover:underline"
                            >
                                {project.title}
                            </a>
                        </h3>

                        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                            <p className="max-w-[52ch] md:col-span-6">{project.description}</p>

                            <ul className="text-mute md:col-span-4">
                                {project.stack.map((item) => (
                                    <li key={item} className="border-b border-hair py-1 first:border-t">
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="md:col-span-2 md:text-right">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline underline-offset-4"
                                >
                                    GitHub <span className="arrow arrow-x">→</span>
                                </a>
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
