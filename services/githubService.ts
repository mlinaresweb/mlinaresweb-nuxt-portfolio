import axios from 'axios';

export interface Repo {
    id: number;
    name: string;
    description: string | null;
    languages: string[];
    languages_url: string;
    stargazers_count: number;
    forks_count: number;
    created_at: string; // Fecha de creación del repositorio
  }
  
  const customDescriptions: { [repoName: string]: string } = {
    "nombre-del-repositorio": "Tu descripción personalizada aquí",
    // ... Puedes añadir más si lo deseas
  };
  
  const fetchRepos = async (username: string): Promise<Repo[]> => {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const fetchedRepos: Repo[] = response.data;
  
    // Ordenar repositorios por fecha de creación en orden descendente
    fetchedRepos.sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
    for (let repo of fetchedRepos) {
      if (customDescriptions[repo.name]) {
        repo.description = customDescriptions[repo.name];
      }
  
      const langResponse = await axios.get(repo.languages_url);
      repo.languages = Object.keys(langResponse.data);
    }
  
    return fetchedRepos;
  };
  
  export { fetchRepos };