import { documents, modules } from "../js/arrays"

const totalHours = modules.reduce((sum, m) => sum + m.hours, 0)

function DocumentRow({ doc }) {
    const href = `#/documents/${doc.id}`
    return (
        <article className="grid gap-8 border-t border-rule py-8 md:grid-cols-12 md:gap-10 md:py-12">
            <div className="flex flex-col justify-between md:col-span-5">
                <div>
                    <p className="text-[13px] text-mute">{doc.facts.join(' / ')}</p>
                    <h3 className="display mt-3 text-[clamp(2.25rem,4.5vw,4rem)]">{doc.title}</h3>
                    <p className="mt-3 font-bold">{doc.subtitle}</p>
                    <p className="mt-3 max-w-[48ch] text-mute">{doc.description}</p>
                </div>
                <p className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                    <a href={href} className="font-bold underline underline-offset-4">
                        Переглянути повністю <span className="arrow arrow-x">→</span>
                    </a>
                    <a href={doc.pdf} download className="text-mute underline underline-offset-4 hover:text-ink">
                        Завантажити PDF
                    </a>
                </p>
            </div>

            <a
                href={href}
                aria-label={`${doc.title}: переглянути документ повністю`}
                className={
                    doc.landscape
                        ? 'block self-start border border-rule md:col-span-7'
                        : 'block self-start border border-rule md:col-span-5 md:col-start-8'
                }
            >
                <img
                    src={doc.preview.src}
                    width={doc.preview.width}
                    height={doc.preview.height}
                    alt={`Перша сторінка документа: ${doc.title}`}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                />
            </a>
        </article>
    )
}

export default function ViewAchievementsSection() {
    return (
        <section id="achievements" className="mx-auto max-w-[1600px] border-t border-rule px-5 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
            <h2 className="display mb-8 text-[clamp(3rem,8vw,7rem)]">Мої винагороди та досягнення</h2>
            <p className="mb-14 max-w-[64ch] text-base text-mute">
                У жовтні 2026 завершив програму Full-Stack Mastery у kood/Zhytomyr:
                три модулі, усі проєкти виконані на 100%. Нижче години за модулями
                та оригінали документів, які можна переглянути повністю.
            </p>

            <div className="mb-20 md:mb-28">
                <div className="grid gap-x-10 border-t border-rule pt-4 pb-8 md:grid-cols-12">
                    <p className="text-mute md:col-span-4">Усього годин навчання</p>
                    <p className="display text-[clamp(4rem,12vw,11rem)] md:col-span-8">{totalHours}</p>
                </div>

                <ul>
                    {modules.map((m) => (
                        <li key={m.name} className="grid gap-x-10 gap-y-2 border-t border-hair py-5 md:grid-cols-12">
                            <p className="font-bold md:col-span-4">{m.name}</p>
                            <p className="text-mute md:col-span-6">{m.projects.join(', ')}</p>
                            <p className="md:col-span-2 md:text-right">
                                <span className="text-lg font-bold">{m.hours} год</span>
                                <span className="block text-[13px] text-mute">до {m.date}</span>
                            </p>
                        </li>
                    ))}
                </ul>
                <p className="border-t border-hair pt-3 text-[13px] text-mute">
                    Години, як і в академічній виписці, показують орієнтовний час, витрачений на тему.
                </p>
            </div>

            <div>
                {documents.map((doc) => (
                    <DocumentRow key={doc.id} doc={doc} />
                ))}
            </div>
        </section>
    )
}
