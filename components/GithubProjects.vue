<template>
    <div class="github-projects">
        <v-card v-for="repo in displayedRepos" :key="repo.id" class="repo-card">
        <v-card-title class="repo-title">{{ repo.name }}</v-card-title>
        <v-card-text class="repo-description">{{ repo.description }}</v-card-text>
        <v-card-actions class="repo-actions">
          <div class="repo-techs">
            <v-chip v-for="lang in repo.languages" :key="lang" small>{{ lang }}</v-chip>
          </div>
          <div class="repo-stats">
            <v-icon>mdi-star</v-icon>{{ repo.stargazers_count }}
            <v-icon>mdi-source-fork</v-icon>{{ repo.forks_count }}
          </div>
        </v-card-actions>
      </v-card>
     <!-- Botón para cargar más repositorios -->
     <v-btn v-if="reposToShow < repos.length" @click="loadMore" class="load-more-btn">
      Cargar más
    </v-btn>
  </div>
</template>

  
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { fetchRepos, Repo } from '../services/githubService';  // Importa el servicio

export default defineComponent({
  name: 'GithubProjects',
  setup() {
    const repos = ref<Repo[]>([]);
    const reposToShow = ref(4);

    const loadMore = () => {
      reposToShow.value += 4;
    };

    const displayedRepos = computed(() => repos.value.slice(0, reposToShow.value));

    onMounted(async () => {
      try {
        repos.value = await fetchRepos('mlinaresweb');  // Utiliza el servicio
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    });

    return { repos, loadMore, displayedRepos, reposToShow };
  }
});
</script>
  
<style>
.github-projects {
  margin: 0 auto;
  padding: 0 ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Asegura que las tarjetas estén distribuidas uniformemente */
}

.repo-card {
  box-sizing: border-box; /* Esto asegura que el padding y el border sean incluidos en el ancho total */
  width: calc(50% - 10px); /* Toma la mitad del ancho menos un pequeño margen */
  margin-bottom: 20px;
  padding: 15px;
}

.repo-title {
  font-weight: 600;
}

.repo-description {
  margin-bottom: 15px;
}

.repo-actions {
  display: flex;
  justify-content: space-between;
}

.repo-techs {
  display: flex;
  gap: 5px;
}

.repo-stats {
  display: flex;
  gap: 10px;
  align-items: center;
}

.load-more-btn {
  width: 100%;
  margin: 20px 0;
}


</style>