

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}
import { ref, Ref, computed } from 'vue';
export default function useSlider(initialProjects: Project[], isMobile: Ref<boolean>) {
    const projects: Ref<Project[]> = ref(initialProjects);
    const currentIndex: Ref<number> = ref(0);

    const size = computed(() => isMobile.value ? 1 : 3);
    
    const projectGroups = computed(() => {
        const groups = [];
        for (let i = 0; i < projects.value.length; i++) {
            let group = [];
            for (let j = 0; j < size.value; j++) {
                group.push(projects.value[(i + j) % projects.value.length]);
            }
            groups.push(group);
        }
        return groups;
    });
    
    return {
        currentIndex,
        projectGroups
    };
}


