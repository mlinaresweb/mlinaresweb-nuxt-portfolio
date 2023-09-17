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
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const fetchedRepos: Repo[] = await response.json();
  
    // Ordenar repositorios por fecha de creación en orden descendente
    fetchedRepos.sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  
    for (let repo of fetchedRepos) {
      if (customDescriptions[repo.name]) {
        repo.description = customDescriptions[repo.name];
      }
  
      const langResponse = await fetch(repo.languages_url);
      const langData = await langResponse.json();
      repo.languages = Object.keys(langData);
    }
  
    return fetchedRepos;
  };
  
  export { fetchRepos };
  