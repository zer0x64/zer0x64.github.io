<script lang="ts">
    const techTags = [
        { code: "0x01", label: "Offensive Security" },
        { code: "0x02", label: "Cryptography" },
        { code: "0x03", label: "Memory Corruption Exploitation" }
    ];

    const quickLinks = [
        {
            href: "/about",
            title: "./about",
            description: "Explore my professional profile, technical areas of expertise, and CTF design philosophy.",
            cmd: "cd /about"
        },
        {
            href: "/blog",
            title: "./blog",
            description: "Read technical articles, security research write-ups, and CTF challenge breakdowns.",
            cmd: "cat /posts"
        },
        {
            href: "/projects",
            title: "./projects",
            description: "Access my arsenal of open-source tools, exploit frameworks, and scripts.",
            cmd: "ls /projects"
        }
    ];
</script>

<div class="space-y-16">
    <!-- Hero Section -->
    <div class="text-center py-20 relative">
        <div class="relative z-10 max-w-3xl mx-auto">
            <h1 class="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 font-mono">
                zer0x64
            </h1>
            <p class="text-lg md:text-2xl text-zinc-400 font-mono mb-8 leading-relaxed">
                <span class="text-zinc-600">&gt;</span> Cybersecurity Specialist
                <span class="text-zinc-600">&amp;</span> CTF Challenge Designer
            </p>
            
            <div class="flex flex-wrap justify-center gap-3">
                {#each techTags as { code, label }}
                    <span class="tech-tag">
                        <span class="text-zinc-600 mr-1.5">{code}</span> {label}
                    </span>
                {/each}
            </div>
        </div>
    </div>

    <!-- Bio Section (Profile / About Box) -->
    <div class="max-w-3xl mx-auto">
        <div class="tech-card rounded-lg p-8 md:p-10 border border-zinc-800/40">
            <h2 class="text-2xl font-bold text-white mb-6 font-mono tracking-tight flex items-center">
                <span class="text-zinc-600 mr-2">$</span> whoami
            </h2>
            <div class="space-y-6 text-zinc-300 font-sans leading-relaxed text-base md:text-lg">
                <p>
                    I'm a <span class="text-white font-semibold">cybersecurity specialist</span> with expertise in <span class="text-white">offensive security</span>, <span class="text-white">cryptography</span>, and <span class="text-white">memory corruption exploitation</span>. My passion lies in understanding and analyzing the intricate vulnerabilities within complex systems.
                </p>
                <p>
                    As a challenge designer for the <strong class="text-white font-semibold">NorthSec CTF</strong>, one of the largest in-person hacking competitions globally, I design engaging and creative challenges that prioritize the fun factor and clever logic.
                </p>
                <p>
                    Through this digital space, I share security research, exploit write-ups, and open-source utility tools. Welcome to my digital workspace.
                </p>
            </div>
        </div>
    </div>

    <!-- Quick Links -->
    <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {#each quickLinks as { href, title, description, cmd }}
            <a href={href} class="group tech-card rounded-lg p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-bold text-white font-mono">{title}</h3>
                        <span class="text-zinc-600 group-hover:text-zinc-400 transition-colors">→</span>
                    </div>
                    <p class="text-sm text-zinc-400 leading-relaxed">
                        {description}
                    </p>
                </div>
                <div class="mt-6 text-xs font-mono text-zinc-500">
                    {cmd}
                </div>
            </a>
        {/each}
    </div>
</div>

