import { getProjects } from '@/lib/tina'
import Projects from './Projects'

export default async function ProjectsWrapper() {
  const projects = await getProjects()

  return <Projects projects={projects} />
}
