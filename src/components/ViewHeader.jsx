import ToggleThemes from "./ToggleThemes"

const links = [
    { href: '#projects', label: 'Проєкти' },
    { href: '#skills', label: 'Навички' },
    { href: '#contacts', label: 'Контакти' },
]

export default function ViewHeader() {
    return (
        <header className="sticky top-0 z-20 border-b border-hair bg-paper">
            <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-x-6 gap-y-1 px-5 py-4 text-[13px] md:px-10">
                <a href="#top" className="whitespace-nowrap font-bold hover:underline">
                    <span className="sm:hidden">І. Ч.</span>
                    <span className="hidden sm:inline">І. Черепанов</span>
                </a>
                <nav className="flex items-center gap-x-4 md:gap-x-8" aria-label="Навігація">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="hover:underline underline-offset-4">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/TrtxP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden underline-offset-4 hover:underline sm:inline"
                    >
                        GitHub <span className="arrow arrow-x">↗</span>
                    </a>
                    <ToggleThemes />
                </nav>
            </div>
        </header>
    )
}
