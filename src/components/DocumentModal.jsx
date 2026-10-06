import { useState, useEffect } from 'react'

export default function DocumentModal({
    isOpen,
    onClose,
    documents,
    initialDocId = 'certificate',
    initialPage = 0,
}) {
    const [activeDocId, setActiveDocId] = useState(initialDocId)
    const [activePageIndex, setActivePageIndex] = useState(initialPage)
    const [viewMode, setViewMode] = useState('image') // 'image' | 'pdf'
    const [isZoomed, setIsZoomed] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setActiveDocId(initialDocId)
            setActivePageIndex(initialPage)
            setIsZoomed(false)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen, initialDocId, initialPage])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return
            if (e.key === 'Escape') {
                onClose()
            } else if (e.key === 'ArrowRight') {
                const currentDoc = documents.find((d) => d.id === activeDocId)
                if (currentDoc && activePageIndex < currentDoc.pages.length - 1) {
                    setActivePageIndex((prev) => prev + 1)
                }
            } else if (e.key === 'ArrowLeft') {
                if (activePageIndex > 0) {
                    setActivePageIndex((prev) => prev - 1)
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, activeDocId, activePageIndex, documents, onClose])

    if (!isOpen) return null

    const currentDoc = documents.find((d) => d.id === activeDocId) || documents[0]
    const totalPages = currentDoc.pages.length

    const handleSelectDoc = (docId) => {
        setActiveDocId(docId)
        setActivePageIndex(0)
    }

    return (
        <div
            className="fixed inset-0 z-50 flex flex-col bg-paper text-ink"
            role="dialog"
            aria-modal="true"
            aria-label={`Перегляд документа: ${currentDoc.title}`}
        >
            {/* Верхня навігаційна панель */}
            <div className="border-b border-rule bg-paper px-4 py-3 md:px-8">
                <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4">
                    {/* Вибір документа */}
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        {documents.map((doc) => {
                            const isActive = doc.id === currentDoc.id
                            return (
                                <button
                                    key={doc.id}
                                    type="button"
                                    onClick={() => handleSelectDoc(doc.id)}
                                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                                        isActive
                                            ? 'bg-ink text-paper font-bold'
                                            : 'border border-hair text-mute hover:border-rule hover:text-ink'
                                    }`}
                                >
                                    {doc.title}
                                </button>
                            )
                        })}
                    </div>

                    {/* Дії та закриття */}
                    <div className="flex items-center gap-3 text-xs font-mono">
                        {/* Масштаб для зображень */}
                        {viewMode === 'image' && (
                            <button
                                type="button"
                                onClick={() => setIsZoomed((prev) => !prev)}
                                className="hidden sm:inline-block border border-hair px-2.5 py-1 text-mute hover:border-rule hover:text-ink cursor-pointer"
                                title="Перемкнути масштаб"
                            >
                                {isZoomed ? 'Зменшити —' : 'Збільшити +'}
                            </button>
                        )}

                        {/* Перемикач режиму перегляду */}
                        <div className="hidden sm:flex border border-hair">
                            <button
                                type="button"
                                onClick={() => setViewMode('image')}
                                className={`px-2.5 py-1 cursor-pointer ${
                                    viewMode === 'image' ? 'bg-ink text-paper' : 'text-mute hover:text-ink'
                                }`}
                                title="Перегляд у високій чіткості"
                            >
                                HD Скани
                            </button>
                            <button
                                type="button"
                                onClick={() => setViewMode('pdf')}
                                className={`px-2.5 py-1 cursor-pointer ${
                                    viewMode === 'pdf' ? 'bg-ink text-paper' : 'text-mute hover:text-ink'
                                }`}
                                title="Вбудований PDF"
                            >
                                PDF
                            </button>
                        </div>

                        <a
                            href={currentDoc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:opacity-80"
                        >
                            Нова вкладка ↗
                        </a>

                        <a
                            href={currentDoc.pdfUrl}
                            download
                            className="hidden md:inline underline underline-offset-4 hover:opacity-80"
                        >
                            Завантажити ↓
                        </a>

                        <button
                            type="button"
                            onClick={onClose}
                            className="border border-rule px-3 py-1.5 text-xs font-bold uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors cursor-pointer"
                            aria-label="Закрити модальне вікно"
                        >
                            Закрити ✕
                        </button>
                    </div>
                </div>

                {/* Додаткова смуга для багатосторінкових документів */}
                {totalPages > 1 && viewMode === 'image' && (
                    <div className="mx-auto mt-3 flex max-w-[1600px] flex-wrap items-center justify-between gap-3 border-t border-hair pt-2 text-xs text-mute">
                        <div className="flex flex-wrap items-center gap-2">
                            <span>Сторінка:</span>
                            {currentDoc.pages.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setActivePageIndex(idx)}
                                    className={`h-7 w-7 border font-mono transition-colors cursor-pointer ${
                                        activePageIndex === idx
                                            ? 'border-rule bg-ink text-paper font-bold'
                                            : 'border-hair text-mute hover:border-rule hover:text-ink'
                                    }`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                            <span className="ml-2 hidden sm:inline text-mute">
                                {currentDoc.pageLabels?.[activePageIndex]}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                disabled={activePageIndex === 0}
                                onClick={() => setActivePageIndex((p) => Math.max(0, p - 1))}
                                className="border border-hair px-2 py-1 disabled:opacity-30 hover:border-rule cursor-pointer"
                            >
                                ← Попередня
                            </button>
                            <span className="font-mono">
                                {activePageIndex + 1} / {totalPages}
                            </span>
                            <button
                                type="button"
                                disabled={activePageIndex === totalPages - 1}
                                onClick={() => setActivePageIndex((p) => Math.min(totalPages - 1, p + 1))}
                                className="border border-hair px-2 py-1 disabled:opacity-30 hover:border-rule cursor-pointer"
                            >
                                Наступна →
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Основна область перегляду */}
            <div className="flex-1 overflow-auto p-4 md:p-8 flex items-center justify-center">
                {viewMode === 'pdf' ? (
                    <div className="h-full w-full max-w-[1400px] border border-rule bg-white">
                        <iframe
                            src={currentDoc.pdfUrl}
                            title={currentDoc.title}
                            className="h-full w-full min-h-[75vh]"
                        />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center max-w-[1300px] w-full">
                        <div
                            onClick={() => setIsZoomed((prev) => !prev)}
                            className={`relative border border-rule bg-white transition-all cursor-zoom-in ${
                                isZoomed
                                    ? 'max-w-none w-full cursor-zoom-out shadow-2xl'
                                    : 'shadow-lg'
                            }`}
                            title="Клацніть для зміни масштабу"
                        >
                            <img
                                src={currentDoc.pages[activePageIndex]}
                                alt={`${currentDoc.title} — сторінка ${activePageIndex + 1}`}
                                className={`w-auto max-w-full select-none mx-auto ${
                                    isZoomed
                                        ? 'max-h-none'
                                        : 'max-h-[75vh] object-contain'
                                }`}
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between w-full max-w-[900px] text-xs text-mute font-mono">
                            <span>{currentDoc.subtitle}</span>
                            <span>{currentDoc.date}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
