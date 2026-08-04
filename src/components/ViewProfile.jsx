import { handleEmailClick } from "../js/send-email"

export default function ViewProfile() {
    return (
        <section className="relative z-10 py-20 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="order-1 col-span-1 lg:col-span-12">
                        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/10">
                            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl lg:-right-8 lg:-top-8" />

                            <p className="mb-2 text-lg font-medium text-cyan-600 dark:text-cyan-400">
                                Привіт, мене звати Ілля Черепанов 👋
                            </p>
                            <h1 className="relative text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                                Frontend & Backend Developer
                            </h1>
                            <p className="relative mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
                                Вивчаю IT та розробку програмного забезпечення. Спеціалізуюсь на веб-розробці,
                                створенні сучасних веб-додатків та вирішенні складних алгоритмічних задач.
                            </p>

                            <div className="relative mt-6 flex flex-col gap-4 sm:flex-row">
                                <button
                                    onClick={handleEmailClick}
                                    className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl"
                                >
                                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M22 6L12 13L2 6"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span>Зв'язатися зі мною</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="order-2 col-span-1 lg:col-span-12">
                        <div className="flex h-full flex-col justify-center rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/10 lg:p-10">
                            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Контактна інформація</h3>
                            <ul className="space-y-6 text-slate-700 dark:text-slate-300">
                                <li className="flex items-start gap-4">
                                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Телефон</p>
                                        <a href="tel:+380989498744" className="text-lg font-semibold transition hover:text-cyan-600 dark:hover:text-cyan-400">
                                            +380-98-949-87-44
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                                        <a href="mailto:cerepanovila13@gmail.com" className="text-lg font-semibold transition hover:text-pink-600 dark:hover:text-pink-400">
                                            cerepanovila13@gmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Адреса</p>
                                        <p className="text-lg font-semibold">
                                            м. Коростень, Житомирська обл.,<br />
                                            вул. Лозова 20А
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}