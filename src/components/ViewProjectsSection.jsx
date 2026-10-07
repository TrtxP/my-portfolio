import { featuredProjects, otherProjects } from "../js/arrays"

export default function ViewProjectsSection() {
    return (
        <section id="projects" className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-40">
            <h2 className="display mb-10 text-[clamp(3rem,8vw,7rem)]">Проєкти</h2>

            <div>
                {featuredProjects.map((project, index) => (
                    <article
                        key={project.repo}
                        className="flex min-h-[85svh] flex-col justify-between border-t border-rule py-6 md:py-8"
                    >
                        <div className="flex items-start justify-between gap-4 text-[13px] text-mute">
                            <span>TrtxP/{project.repo}</span>
                            <span>
                                {project.stars > 0 && <span className="mr-5">★ {project.stars}</span>}
                                {index + 1} / {featuredProjects.length}
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

            <div className="border-t border-rule pt-8 md:pt-10">
                <h3 className="display mb-8 text-[clamp(2rem,4.5vw,4rem)]">Інші проєкти</h3>
                <ul>
                    {otherProjects.map((project) => (
                        <li
                            key={project.repo}
                            className="grid gap-x-10 gap-y-3 border-t border-hair py-6 md:grid-cols-12"
                        >
                            <h4 className="display text-[clamp(1.75rem,3vw,2.75rem)] md:col-span-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="decoration-[0.05em] underline-offset-[0.12em] hover:underline"
                                >
                                    {project.title}
                                </a>
                            </h4>
                            <p className="text-mute md:col-span-5">{project.description}</p>
                            <p className="md:col-span-2">{project.stack.join(' / ')}</p>
                            <p className="md:col-span-1 md:text-right">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline underline-offset-4"
                                >
                                    GitHub <span className="arrow arrow-x">→</span>
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
