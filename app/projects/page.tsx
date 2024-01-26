import { MiniProjectCard } from '../components/MiniProjectCard'

// const Repos: React.FC<ReposProps> = ({ repos }) => {
//   return (
//     <div className="projects-grid grid grid-cols-2 gap-4">
//       {repos.map((repo, index) => (
//         <ProjectCard
//           key={index}
//           title={repo.name}
//           description={repo.description}
//           imageUrl={repo.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };

async function getRepoData() {
  const res = await fetch('https://api.github.com/users/lars-ostervold/repos')
  if (!res.ok) {
    throw new Error(`Failed to fetch data with status code ${res.status}`)
  }
  return res.json()
}


export default async function Page() {
  const repoData = await getRepoData()

  return (
    <main>
      <h1 className="font-medium text-3xl mb-4 tracking-tighter">🚀 My Programming Projects 🖥️</h1>
      <div className="projects-grid grid grid-cols-1 gap-4">
        {repoData.map((repo, index) => (
          <MiniProjectCard
            key={index}
            title={repo.name}
            description={repo.description}
          />
        ))}
      </div>
    </main>
  )
}