import { handleEmailClick } from "../js/send-email"

export default function ViewProfile() {
    return (
        <section className="relative z-10 py-20 lg:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    <div className="order-2 col-span-1 lg:order-1 lg:col-span-7">
                        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/10">
                            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl lg:-right-8 lg:-top-8" />

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

                    <div className="order-1 col-span-1 lg:order-2 lg:col-span-5">
                        <div className="flex h-full justify-center lg:justify-start">
                            <div className="relative w-full max-w-[320px] sm:max-w-[400px]">
                                <div className="aspect-square w-full rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm backdrop-filter transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl hover:shadow-cyan-500/10 lg:p-6">
                                    <div className="relative flex h-full flex-col justify-end">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-30 blur-xl" />
                                        <div className="relative flex items-end gap-1">
                                            <div className="flex-1">
                                                <div className="mb-1 rounded-md bg-white/30 p-1.5 backdrop-blur-sm backdrop-filter">
                                                    <div className="aspect-square rounded-md bg-gradient-to-br from-cyan-400 to-blue-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="mb-1 rounded-md bg-white/30 p-1.5 backdrop-blur-sm backdrop-filter">
                                                    <div className="aspect-square rounded-md bg-gradient-to-br from-purple-400 to-violet-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="mb-1 rounded-md bg-white/30 p-1.5 backdrop-blur-sm backdrop-filter">
                                                    <div className="aspect-square rounded-md bg-gradient-to-br from-pink-400 to-rose-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="mb-1 rounded-md bg-white/30 p-1.5 backdrop-blur-sm backdrop-filter">
                                                    <div className="aspect-square rounded-md bg-gradient-to-br from-emerald-400 to-teal-400" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="mb-1 rounded-md bg-white/30 p-1.5 backdrop-blur-sm backdrop-filter">
                                                    <div className="aspect-square rounded-md bg-gradient-to-br from-amber-400 to-orange-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-20 w-20 rounded-full bg-slate-900/10 blur-2xl backdrop-blur-sm backdrop-filter transition-all duration-300 hover:block lg:flex" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}