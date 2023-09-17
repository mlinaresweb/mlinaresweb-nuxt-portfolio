<template>
    <v-row justify="center" class="skills-container">
      <!-- Hard Skills Column -->
      <v-col cols="12" md="5">
        <h3 class="subtitle-1 mb-3">Hard Skills</h3>
        <v-row>
          <v-col v-for="(skill, index) in hardSkills" :key="index" cols="12" sm="6" md="4">
            <v-sheet class="skill-plate d-flex align-center">
              <img :src="`/icons/${skill.icon}.svg`" alt="Icon" class="skill-icon">
              <span class="skill-name">{{ skill.name }}</span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    
      <!-- Spacer -->
      <v-col cols="2"></v-col>
    
      <!-- Soft Skills Column -->
      <v-col cols="12" md="5">
        <h3 class="subtitle-1 mb-3">Soft Skills</h3>
        <v-row>
          <v-col v-for="(skill, index) in softSkills" :key="index" cols="12" sm="6" md="4">
            <v-sheet class="skill-plate d-flex align-center">
                <img :src="`/icons/${skill.icon}.svg`" alt="Icon" class="skill-icon">
              <span class="skill-name">{{ skill.name }}</span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </template>
  
  


  <style scoped>
  .skills-container {
      max-width: 100%;
      margin: 0 auto;
      
  }
  
  .skill-plate {
      background-color: #f7f7f7;
      border-radius: 8px;
      padding: 5px 4px;
      transition: background-color 0.3s ease;
  }
  
  .skill-plate:hover {
      background-color: #e5e5e5;
  }

  .skill-icon {
      margin-right: 4px;
      color: #333;
  }
  
  .skill-name {
      font-size: 10px;
      color: #333;
  }

  /* Para pantallas medianas */
  @media (max-width: 960px) and (min-width: 600px) {
    .skill-name {
      font-size: 13px;
    }
    .skill-icon {
      font-size: 15px;
      margin-right: 7px;
    }
    .skill-plate {
      padding: 4px 8px;
      margin: 8px 0;
    }
  }

  /* Para pantallas pequeñas */
  @media (max-width: 600px) {
    .skill-name {
      font-size: 12px;
    }
    .skill-icon {
      font-size: 14px;
      margin-right: 6px;
    }
    .skill-plate {
      padding: 3px 6px;
      margin: 6px 0;
    }
  }
</style>

<script lang="ts">
import { ref, Ref } from "vue";

interface Skill {
  name: string;
  icon?: string;
}

  export default {
    name: "Skills",
    setup() {
        const hardSkills: Ref<Skill[]> = ref([
        { name: "Html", icon: "html" },
        { name: "Css", icon: "css" },
        { name: "Javascript", icon: "javascript" },
        { name: "Typescript", icon: "typescript" },
        { name: "Vue", icon: "vue" },
        { name: "Nuxt", icon: "nuxt" },
        { name: "Angular", icon: "angular" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "Figma", icon: "figma" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Laravel", icon: "laravel" },
        { name: "Mysql", icon: "mysql" },
        { name: "Git", icon: "git" },
        { name: "Github", icon: "github" },
        { name: "Aws", icon: "aws" },
      ]);
  
      const softSkills: Ref<Skill[]> = ref([
        { name: "Comunicación", icon: "talk" },
        { name: "Trabajo en equipo", icon: "team" },
        { name: "Resolución de problemas", icon: "problem" },
        { name: "Toma de decisiones", icon: "decision" },
        { name: "Pensamiento crítico", icon: "brain" },
        { name: "Empatía con el usuario", icon: "user" }
        // ... añade cualquier otro skill que quieras
      ]);
  
      return {
        hardSkills,
        softSkills,
      };
    },
  };
  </script>