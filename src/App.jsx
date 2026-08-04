import ViewProfile from './components/ViewProfile'
import ViewHeader from './components/ViewHeader'
import ViewMainSection from './components/ViewMainSection'
import ViewProjectsSection from './components/ViewProjectsSection'
import ViewSkillsSection from './components/ViewSkillsSection'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_30%),linear-gradient(180deg,#f8fafc,#f1f5f9)] transition-opacity duration-300 dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_30%),linear-gradient(180deg,#020617,#0f172a)]" />

      {/* VIEW HEADER */}
      <ViewHeader />

      {/* VIEW PROFILE */}
      <ViewProfile />

      {/* VIEW MAIN SECTION */}
      <ViewMainSection />

      {/* VIEW PROJECTS SECTION */}
      <ViewProjectsSection />

      {/* VIEW SKILLS SECTION */}
      <ViewSkillsSection />
    </main>
  )
}

export default App

