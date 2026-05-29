<script lang="ts">
    import { onMount } from "svelte";

    interface Project {
        slug: string;
        name: string;
        description: string;
        path: string;
        github?: string;
        tags: string[];
        status: "active" | "soon";
    }

    let projects = $state<Project[]>([]);
    let isLoading = $state(true);



    onMount(async () => {
        try {
            const res = await fetch("/projects/list.json");
            if (res.ok) {
                projects = await res.json();
            }
        } catch (e) {
            console.error("Failed to load projects list:", e);
        } finally {
            isLoading = false;
        }
    });
</script>

{#snippet projectCard(project: Project)}
    <div class="tech-card rounded-lg p-8 flex flex-col justify-between transition-all duration-200 {project.status === 'active' ? 'border-zinc-800/40 hover:-translate-y-0.5' : 'border-zinc-900 bg-zinc-950/40 opacity-50 select-none'}">
        <div>
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <h3 class="text-xl font-bold font-mono {project.status === 'active' ? 'text-white' : 'text-zinc-500'}">{project.name}</h3>
                    {#if project.status === 'active'}
                        <span class="glow-dot" title="Active"></span>
                    {:else}
                        <svg class="w-4 h-4 text-zinc-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                        </svg>
                    {/if}
                </div>
                <span class="text-xs font-mono {project.status === 'active' ? 'text-emerald-400' : 'text-zinc-600'}">
                    {project.status === 'active' ? 'ACTIVE' : 'COMING SOON'}
                </span>
            </div>
            <p class="text-sm md:text-base leading-relaxed mb-6 {project.status === 'active' ? 'text-zinc-400' : 'text-zinc-500'}">
                {project.description}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
                {#each project.tags as tag}
                    <span class="tech-tag {project.status === 'active' ? '' : 'pointer-events-none opacity-50'}">{tag}</span>
                {/each}
            </div>
        </div>
        <div class="mt-4 flex gap-3">
            {#if project.status === 'active'}
                <a href={project.path} rel="external" class="tech-button px-4 py-2 rounded text-xs transition-colors duration-200">
                    Launch Console →
                </a>
                {#if project.github}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" class="tech-button px-4 py-2 rounded text-xs transition-colors duration-200">
                        GitHub
                    </a>
                {/if}
            {:else}
                <button disabled class="tech-button px-4 py-2 rounded text-xs opacity-50 cursor-not-allowed">
                    🔒 Classified
                </button>
            {/if}
        </div>
    </div>
{/snippet}

<div class="space-y-16 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="text-center py-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-mono">
            Projects
        </h1>
        <p class="text-lg md:text-xl text-zinc-400 font-mono max-w-2xl mx-auto leading-relaxed">
            <span class="text-zinc-600">&gt;</span> Open-source security research, automated exploit tools, and CTF challenges.
        </p>
    </div>

    <!-- Project Grid -->
    <div>
        <h2 class="text-xl font-bold text-white mb-8 font-mono tracking-tight flex items-center">
            <span class="text-zinc-600 mr-2">#</span> project_vault
        </h2>

        {#if isLoading}
            <div class="text-center py-12 font-mono text-zinc-500">
                <span class="animate-pulse">Loading vault...</span>
            </div>
        {:else}
            <div class="grid md:grid-cols-2 gap-6">
                {#each projects as project}
                    {@render projectCard(project)}
                {/each}
            </div>
        {/if}
    </div>



    <!-- Collaboration CTA -->
    <div class="tech-card rounded-lg p-8 text-center border border-zinc-800/40">
        <h2 class="text-2xl font-bold text-white mb-4 font-mono tracking-tight">./collaborate.sh</h2>
        <p class="text-zinc-400 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Have an open-source project or security research initiative? Let's discuss development and analysis opportunities.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/zer0x64" target="_blank" rel="noopener noreferrer" class="tech-button px-6 py-3 rounded text-sm transition-colors duration-200">
                GitHub
            </a>
            <a href="https://bsky.app/profile/zer0x64.bsky.social" target="_blank" rel="noopener noreferrer" class="tech-button px-6 py-3 rounded text-sm transition-colors duration-200">
                Bluesky
            </a>
            <a href="https://www.linkedin.com/in/zer0x64/" target="_blank" rel="noopener noreferrer" class="tech-button px-6 py-3 rounded text-sm transition-colors duration-200">
                LinkedIn
            </a>
        </div>
    </div>
</div>

