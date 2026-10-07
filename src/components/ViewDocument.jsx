import { useEffect } from 'react'
import { documents } from "../js/arrays"

export default function ViewDocument({ id }) {
    const index = documents.findIndex((d) => d.id === id)
    const doc = documents[index]

    useEffect(() => {
        const previous = document.title
        if (doc) document.title = `${doc.title} — Ілля Черепанов`
        return () => {
            document.title = previous
        }
    }, [doc])

    if (!doc) {
        return (
            <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
                <h1 className="display text-[clamp(3rem,8vw,7rem)]">Документ не знайдено</h1>
                <p className="mt-6">
                    <a href="#achievements" className="font-bold underline underline-offset-4">
                        ← До досягнень
                    </a>
                </p>
            </section>
        )
    }

    const next = documents[(index + 1) % documents.length]

    return (
        <section className="mx-auto max-w-[1600px] px-5 pb-16 pt-10 md:px-10 md:pt-14">
            <p className="text-[13px]">
                <a href="#achievements" className="underline underline-offset-4">
                    ← Мої винагороди та досягнення
                </a>
            </p>

            <header className="mt-10 grid gap-6 border-b border-rule pb-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-8">
                    <h1 className="display text-[clamp(3rem,8vw,7.5rem)]">{doc.title}</h1>
                    <p className="mt-4 text-base font-bold">{doc.subtitle}</p>
                </div>
                <p className="flex flex-wrap items-end gap-x-8 gap-y-2 md:col-span-4 md:justify-end">
                    <a href={doc.pdf} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4">
                        Відкрити PDF <span className="arrow arrow-x">↗</span>
                    </a>
                    <a href={doc.pdf} download className="text-mute underline underline-offset-4 hover:text-ink">
                        Завантажити
                    </a>
                </p>
            </header>

            <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-8">
                {doc.pages.map((page, i) => (
                    <figure key={page.src} className="m-0">
                        <img
                            src={page.src}
                            width={page.width}
                            height={page.height}
                            alt={`${doc.title}, сторінка ${i + 1} з ${doc.pages.length}`}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            className="block h-auto w-full border border-rule"
                        />
                        {doc.pages.length > 1 && (
                            <figcaption className="mt-2 text-[13px] text-mute">
                                {i + 1} / {doc.pages.length}
                            </figcaption>
                        )}
                    </figure>
                ))}
            </div>

            <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6" aria-label="Інші документи">
                <a href="#achievements" className="underline underline-offset-4">
                    ← До списку
                </a>
                {next.id !== doc.id && (
                    <a href={`#/documents/${next.id}`} className="font-bold underline underline-offset-4">
                        Далі: {next.title} <span className="arrow arrow-x">→</span>
                    </a>
                )}
            </nav>
        </section>
    )
}
