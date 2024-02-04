import { MiniProjectCard } from '../components/MiniProjectCard'
import { ProjectCard } from '../components/ProjectCard'

async function getRepoData() {
  const res = await fetch(`https://api.github.com/users/lars-ostervold/repos?${Date.now()}`, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch data with status code ${res.status}`)
  }
  return res.json()
}

const otherProjects = [
  {
    title: 'BREAD!🥖',
    description: 'I\'ve been making a ridiculous amount of sourdough recently because it\'s rly rly fun.',
    imageUrl: '/images/bread-photo.JPG',
    url: null
  },
]


export default async function Page() {
  const repoData = await getRepoData()

  return (
    <main>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter">Programming Projects 🖥️</h1>
      <p className="prose prose-neutral dark:text-white mb-8">
        Here's a collection of some of my programming projects. If there's a public website, clicking
        the link will take you there. If not, the link will take you to the GitHub repository.
      </p>
      <div className="projects-grid grid grid-cols-1 gap-4">
        {repoData.map((repo, index) => (
          <MiniProjectCard
            key={index}
            title={repo.name}
            description={repo.description}
            url={repo.html_url}
            homepage={repo.homepage}
          />
        ))}
      </div>
      <h1 className="font-medium text-3xl mb-4 mt-8 tracking-tighter">What else is cooking... 👨🏼‍🍳</h1>
      <p className="prose prose-neutral dark:text-white mb-8">
        A collection of other passion projects that aren't programming 😇
      </p>
      <div className="projects-grid grid grid-cols-2 gap-4">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  )
}