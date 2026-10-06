import { handleEmailClick } from "../js/send-email"

const EMAIL = 'cerepanovila13@gmail.com'

export default function ViewProfile() {
    return (
        <section id="contacts" className="mx-auto max-w-[1600px] border-t border-rule px-5 pt-24 md:px-10 md:pt-32">
            <h2 className="display mb-10 text-[clamp(3rem,8vw,7rem)]">Контакти</h2>

            <dl className="border-b border-hair">
                <div className="grid gap-1 border-t border-hair py-5 md:grid-cols-12 md:gap-10">
                    <dt className="text-mute md:col-span-3">Email</dt>
                    <dd className="text-lg md:col-span-9 md:text-2xl">
                        <a href={`mailto:${EMAIL}`} onClick={handleEmailClick} className="underline underline-offset-4">
                            {EMAIL}
                        </a>
                    </dd>
                </div>
                <div className="grid gap-1 border-t border-hair py-5 md:grid-cols-12 md:gap-10">
                    <dt className="text-mute md:col-span-3">Телефон</dt>
                    <dd className="text-lg md:col-span-9 md:text-2xl">
                        <a href="tel:+380989498744" className="underline underline-offset-4">
                            +380 98 949 87 44
                        </a>
                    </dd>
                </div>
                <div className="grid gap-1 border-t border-hair py-5 md:grid-cols-12 md:gap-10">
                    <dt className="text-mute md:col-span-3">Адреса</dt>
                    <dd className="text-lg md:col-span-9 md:text-2xl">
                        м. Коростень, Житомирська обл.,
                        <br />
                        вул. Лозова 20А
                    </dd>
                </div>
            </dl>

            <footer className="flex items-center justify-between py-8 text-[13px] text-mute">
                <span>© {new Date().getFullYear()} Ілля Черепанов</span>
                <a href="#top" className="hover:text-ink">
                    Вгору <span className="arrow">↑</span>
                </a>
            </footer>
        </section>
    )
}
