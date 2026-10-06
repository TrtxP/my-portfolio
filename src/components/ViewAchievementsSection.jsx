import { useState } from 'react'
import DocumentModal from './DocumentModal'
import {
    achievementsSummary,
    academicModules,
    softSkillsData,
    documentsList,
} from '../js/achievementsData'

export default function ViewAchievementsSection() {
    const [modalState, setModalState] = useState({
        isOpen: false,
        docId: 'certificate',
        page: 0,
    })

    // Для картки з кількома сторінками (Transcript) зберігаємо вибрану сторінку для швидкого перегляду
    const [cardPageIndices, setCardPageIndices] = useState({
        transcript: 0,
    })

    // Стан для розкриття детального списку проєктів модуля
    const [expandedModule, setExpandedModule] = useState(null)

    const openDoc = (docId, page = 0) => {
        setModalState({
            isOpen: true,
            docId,
            page,
        })
    }

    const closeModal = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }))
    }

    return (
        <section
            id="achievements"
            className="mx-auto max-w-[1600px] border-t border-rule px-5 pt-24 md:px-10 md:pt-40"
        >
            {/* Заголовок розділу */}
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
                <div>
                    <span className="text-xs uppercase tracking-widest text-mute block mb-2">
                        Офіційні сертифікати та академічні виписки
                    </span>
                    <h2 className="display text-[clamp(2.75rem,7.5vw,6.5rem)]">
                        Мої винагороди та досягнення
                    </h2>
                </div>
                <div className="text-xs font-mono text-mute md:text-right">
                    <span>{achievementsSummary.institution}</span>
                    <br />
                    <span>{achievementsSummary.period}</span>
                </div>
            </div>

            <p className="max-w-[75ch] text-base text-mute mb-12">
                Успішно завершив повну річну програму{' '}
                <strong className="text-ink font-semibold">Full-Stack Mastery</strong> у{' '}
                {achievementsSummary.institution} (у співпраці з Житомирською політехнікою за фінансової
                підтримки ESTDEV — From the people of Estonia). Загальний обсяг практичного
                навчання склав{' '}
                <strong className="text-ink font-semibold">
                    {achievementsSummary.totalHours} академічних годин
                </strong>{' '}
                із 100% виконанням усіх обов’язкових та додаткових завдань.
            </p>

            {/* Метрики / Підсумкові показники */}
            <div className="grid grid-cols-2 gap-6 border-y border-rule py-8 md:grid-cols-4 md:gap-8 mb-16">
                <div>
                    <span className="display block text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                        1 160
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-mute mt-2 block">
                        Годин занять і практики
                    </span>
                </div>
                <div>
                    <span className="display block text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                        100%
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-mute mt-2 block">
                        Completion rate
                    </span>
                </div>
                <div>
                    <span className="display block text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                        3
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-mute mt-2 block">
                        Основні модулі (Java, Web, Mobile)
                    </span>
                </div>
                <div>
                    <span className="display block text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                        100%
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-mute mt-2 block">
                        Soft Skills (26 peer reviews)
                    </span>
                </div>
            </div>

            {/* Картки офіційних документів */}
            <div className="mb-24">
                <div className="flex items-center justify-between border-b border-hair pb-3 mb-8 text-xs font-mono uppercase tracking-wider text-mute">
                    <span>Офіційні PDF-документи з деталізованим прев’ю</span>
                    <span>Клікніть для перегляду</span>
                </div>

                <div className="grid gap-10 lg:grid-cols-12">
                    {documentsList.map((doc, idx) => {
                        const isMultiPage = doc.pages.length > 1
                        const activePage = isMultiPage ? cardPageIndices[doc.id] || 0 : 0
                        const currentPreview = doc.pages[activePage]

                        // Сертифікат виділяємо ширше
                        const colSpanClass =
                            doc.id === 'certificate'
                                ? 'lg:col-span-12 xl:col-span-12'
                                : doc.id === 'transcript'
                                ? 'lg:col-span-7'
                                : 'lg:col-span-5'

                        return (
                            <article
                                key={doc.id}
                                className={`border border-rule bg-paper p-5 md:p-8 flex flex-col justify-between transition-colors ${colSpanClass}`}
                            >
                                <div>
                                    {/* Шапка картки */}
                                    <div className="flex items-start justify-between gap-4 border-b border-hair pb-4 text-xs font-mono text-mute">
                                        <div>
                                            <span className="font-bold text-ink">#{idx + 1}</span> · {doc.institution}
                                        </div>
                                        <div className="text-right">
                                            <span>{doc.scope}</span>
                                        </div>
                                    </div>

                                    {/* Інтерактивне прев'ю високої якості */}
                                    <div className="my-6">
                                        <div
                                            onClick={() => openDoc(doc.id, activePage)}
                                            className="group relative cursor-pointer overflow-hidden border border-hair bg-neutral-900 transition-all hover:border-rule"
                                            title="Натисніть для відкриття повнорозмірного перегляду"
                                        >
                                            <img
                                                src={currentPreview}
                                                alt={doc.title}
                                                loading="lazy"
                                                className={`w-full object-contain transition-transform duration-300 group-hover:scale-[1.01] ${
                                                    doc.orientation === 'landscape'
                                                        ? 'max-h-[520px]'
                                                        : 'max-h-[560px]'
                                                }`}
                                            />

                                            {/* Накладання-підказка при наведенні */}
                                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                                <span className="border border-white bg-black/90 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white">
                                                    Переглянути повністю (HD) ↗
                                                </span>
                                            </div>
                                        </div>

                                        {/* Перемикач сторінок для багатосторінкових документів прямо на картці */}
                                        {isMultiPage && (
                                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-hair pt-3 text-xs font-mono">
                                                <span className="text-mute">
                                                    Сторінка {activePage + 1} з {doc.pages.length}:{' '}
                                                    <span className="text-ink">
                                                        {doc.pageLabels?.[activePage]}
                                                    </span>
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    {doc.pages.map((_, pIdx) => (
                                                        <button
                                                            key={pIdx}
                                                            type="button"
                                                            onClick={() =>
                                                                setCardPageIndices((prev) => ({
                                                                    ...prev,
                                                                    [doc.id]: pIdx,
                                                                }))
                                                            }
                                                            className={`h-6 w-6 border text-[11px] font-mono transition-colors ${
                                                                activePage === pIdx
                                                                    ? 'border-rule bg-ink text-paper font-bold'
                                                                    : 'border-hair text-mute hover:border-rule hover:text-ink'
                                                            }`}
                                                            title={`Показати сторінку ${pIdx + 1}`}
                                                        >
                                                            {pIdx + 1}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Інформація про документ */}
                                    <h3 className="display text-2xl md:text-3xl mb-2">{doc.title}</h3>
                                    <p className="font-mono text-xs text-mute mb-4">{doc.subtitle}</p>
                                    <p className="text-sm text-mute leading-relaxed mb-6">
                                        {doc.description}
                                    </p>

                                    {/* Ключові параметри */}
                                    <div className="grid grid-cols-3 gap-2 border-t border-hair py-3 mb-6 text-xs font-mono">
                                        {doc.highlights.map((item) => (
                                            <div key={item.label}>
                                                <span className="text-mute block">{item.label}</span>
                                                <span className="font-semibold text-ink">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Панель дій */}
                                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4 text-xs font-mono">
                                    <button
                                        type="button"
                                        onClick={() => openDoc(doc.id, activePage)}
                                        className="font-bold underline underline-offset-4 hover:opacity-75 cursor-pointer"
                                    >
                                        Переглянути повністю <span className="arrow arrow-x">→</span>
                                    </button>

                                    <div className="flex items-center gap-4 text-mute">
                                        <a
                                            href={doc.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline underline-offset-4 hover:text-ink"
                                        >
                                            PDF у новій вкладці ↗
                                        </a>
                                        <a
                                            href={doc.pdfUrl}
                                            download
                                            className="underline underline-offset-4 hover:text-ink"
                                        >
                                            Завантажити ↓
                                        </a>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* Детальний облік часу та відвідування модулів */}
            <div className="border-t border-rule pt-16 mb-20">
                <div className="mb-8">
                    <span className="text-xs uppercase tracking-widest text-mute block mb-2">
                        Академічний хронометраж занять
                    </span>
                    <h3 className="display text-[clamp(2rem,5vw,4rem)]">
                        Години занять та виконані проєкти
                    </h3>
                    <p className="max-w-[70ch] text-sm text-mute mt-3">
                        Офіційний погодинний звіт згідно з випискою Transcript of Studies. Кожен модуль
                        включав обов’язкові практичні проєкти, командну співпрацю, peer review та
                        контроль якості коду.
                    </p>
                </div>

                <div className="space-y-6">
                    {academicModules.map((module) => {
                        const isExpanded = expandedModule === module.id
                        return (
                            <div
                                key={module.id}
                                className="border border-hair bg-paper/50 transition-colors hover:border-rule"
                            >
                                {/* Заголовок модуля */}
                                <div
                                    onClick={() =>
                                        setExpandedModule(isExpanded ? null : module.id)
                                    }
                                    className="flex cursor-pointer flex-col justify-between gap-4 p-5 md:flex-row md:items-center md:p-6"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 text-xs font-mono text-mute mb-1">
                                            <span>Завершено: {module.completionDate}</span>
                                            <span>·</span>
                                            <span>Команда: {module.collaborators} одногрупників</span>
                                        </div>
                                        <h4 className="display text-2xl md:text-3xl">{module.title}</h4>
                                    </div>

                                    <div className="flex items-center justify-between gap-6 md:justify-end">
                                        <div className="text-right">
                                            <span className="display block text-3xl md:text-4xl leading-none">
                                                {module.hours} год
                                            </span>
                                            <span className="text-[11px] font-mono text-mute uppercase">
                                                Успішність: {module.completion}
                                            </span>
                                        </div>
                                        <span className="border border-hair px-3 py-1 font-mono text-xs text-mute hover:border-rule hover:text-ink">
                                            {isExpanded ? 'Згорнути —' : 'Деталі проєктів +'}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t border-hair px-5 py-4 md:px-6">
                                    <p className="text-sm text-mute leading-relaxed max-w-[85ch]">
                                        {module.description}
                                    </p>
                                </div>

                                {/* Розкривна таблиця проєктів модуля */}
                                {isExpanded && (
                                    <div className="border-t border-hair bg-neutral-500/5 p-5 md:p-6">
                                        <span className="block text-xs font-mono uppercase tracking-wider text-mute mb-4">
                                            Проєкти модуля ({module.projects.length} робіт)
                                        </span>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left font-mono text-xs">
                                                <thead>
                                                    <tr className="border-b border-hair text-mute">
                                                        <th className="pb-2 font-normal">Назва проєкту</th>
                                                        <th className="pb-2 font-normal text-right">Години</th>
                                                        <th className="pb-2 font-normal text-right">Completion</th>
                                                        <th className="pb-2 font-normal text-right">Дата здачі</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-hair">
                                                    {module.projects.map((proj) => (
                                                        <tr key={proj.name} className="hover:bg-neutral-500/10">
                                                            <td className="py-2.5 font-bold">{proj.name}</td>
                                                            <td className="py-2.5 text-right text-mute">
                                                                {proj.hours} год
                                                            </td>
                                                            <td className="py-2.5 text-right text-ink">
                                                                {proj.rate}
                                                            </td>
                                                            <td className="py-2.5 text-right text-mute">
                                                                {proj.date}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Оцінка гнучких навичок (Soft Skills) */}
            <div className="border-t border-rule pt-16 pb-12">
                <div className="mb-8">
                    <span className="text-xs uppercase tracking-widest text-mute block mb-2">
                        Оцінювання взаємодії (Addendum)
                    </span>
                    <h3 className="display text-[clamp(2rem,5vw,4rem)]">
                        Soft Skills & Командна робота
                    </h3>
                    <p className="max-w-[70ch] text-sm text-mute mt-3">
                        Оцінка сформована на основі зворотного зв’язку від{' '}
                        <strong className="text-ink font-semibold">26 одногрупників</strong> протягом
                        усієї програми під час спільних проєктів, парного програмування та peer review.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {softSkillsData.map((item) => (
                        <div key={item.skill} className="border border-hair p-6 bg-paper/30">
                            <div className="flex items-baseline justify-between border-b border-hair pb-3 mb-4">
                                <h4 className="display text-2xl">{item.skill}</h4>
                                <span className="font-mono text-xl font-bold">{item.grade}</span>
                            </div>
                            <p className="text-sm text-mute leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Повнорозмірне модальне вікно для детального перегляду всіх документів та PDF */}
            <DocumentModal
                isOpen={modalState.isOpen}
                onClose={closeModal}
                documents={documentsList}
                initialDocId={modalState.docId}
                initialPage={modalState.page}
            />
        </section>
    )
}

