export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

import { ref, Ref } from 'vue';

export default function useSlider(initialProjects: Project[], isMobile: Ref<boolean>) {
    const projects: Ref<Project[]> = ref(initialProjects);

    return {
        projects
    };
}
