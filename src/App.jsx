import { useEffect, useState } from 'react'
import ViewHeader from './components/ViewHeader'
import ViewMainSection from './components/ViewMainSection'
import ViewProjectsSection from './components/ViewProjectsSection'
import ViewSkillsSection from './components/ViewSkillsSection'
import ViewAchievementsSection from './components/ViewAchievementsSection'
import ViewProfile from './components/ViewProfile'
import ViewDocument from './components/ViewDocument'

// Маршрут документа: #/documents/<id>. Усе інше показує головну сторінку.
function readDocumentId() {
  const match = window.location.hash.match(/^#\/documents\/([\w-]+)$/)
  return match ? match[1] : null
}

function App() {
  const [documentId, setDocumentId] = useState(readDocumentId)

  useEffect(() => {
    const onHashChange = () => setDocumentId(readDocumentId())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Перехід між головною та переглядом документа: нагору або до потрібного якоря.
  useEffect(() => {
    if (documentId) {
      window.scrollTo(0, 0)
      return
    }
    const anchor = window.location.hash.slice(1)
    if (anchor) {
      requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView())
    }
  }, [documentId])

  return (
    <div className="min-h-screen bg-paper font-mono text-ink">
      <ViewHeader />
      <main>
        {documentId ? (
          <ViewDocument id={documentId} />
        ) : (
          <>
            <ViewMainSection />
            <ViewProjectsSection />
            <ViewSkillsSection />
            <ViewAchievementsSection />
            <ViewProfile />
          </>
        )}
      </main>
    </div>
  )
}

export default App
