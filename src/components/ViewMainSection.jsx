export default function ViewMainSection() {
    return (
        <section
            id="top"
            className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-[1600px] flex-col justify-end px-5 pb-8 pt-16 md:px-10"
        >
            <h1 className="display -ml-[0.04em] pb-[0.14em] text-[clamp(5rem,21vw,20rem)]">
                <span className="reveal block" style={{ '--d': '0ms' }}>
                    Ілля
                </span>
                <span className="reveal block" style={{ '--d': '120ms' }}>
                    Черепанов
                </span>
            </h1>

            <div
                className="reveal mt-10 grid gap-6 border-t border-rule pt-5 md:grid-cols-12 md:gap-10"
                style={{ '--d': '360ms' }}
            >
                <p className="font-bold md:col-span-4">Full-stack розробник · Flutter</p>
                <p className="text-mute md:col-span-6">
                    Вивчаю розробку програмного забезпечення.
                    <br />
                    Роблю веб-додатки: від прототипу до продукту.
                </p>
                <p className="md:col-span-2 md:text-right">
                    <a href="#contacts" className="underline underline-offset-4">
                        Контакти <span className="arrow arrow-y">↓</span>
                    </a>
                </p>
            </div>
        </section>
    )
}
