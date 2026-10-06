import ViewHeader from './components/ViewHeader'
import ViewMainSection from './components/ViewMainSection'
import ViewProjectsSection from './components/ViewProjectsSection'
import ViewSkillsSection from './components/ViewSkillsSection'
import ViewAchievementsSection from './components/ViewAchievementsSection'
import ViewProfile from './components/ViewProfile'

function App() {
  return (
    <div className="min-h-screen bg-paper font-mono text-ink">
      <ViewHeader />
      <main>
        <ViewMainSection />
        <ViewProjectsSection />
        <ViewSkillsSection />
        <ViewAchievementsSection />
        <ViewProfile />
      </main>
    </div>
  )
}

export default App
