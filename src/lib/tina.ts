import fs from 'fs';
import path from 'path';

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  order?: number;
}

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');

  try {
    const filenames = fs.readdirSync(projectsDirectory);

    const projects = filenames
      .filter(filename => filename.endsWith('.json'))
      .map(filename => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const project = JSON.parse(fileContents) as Project;
        return project;
      })
      .sort((a, b) => (a.order || 999) - (b.order || 999));

    return projects;
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}
