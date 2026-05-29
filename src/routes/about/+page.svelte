<script lang="ts">
    const expertise = [
        {
            title: "0x01. Offensive Security",
            description: "Penetration testing, network exploits, and red teaming. Specializing in demonstrating realistic threat vectors and bypassing complex defense systems.",
            cmd: "$ exploit --target remote"
        },
        {
            title: "0x02. Cryptography",
            description: "Analyzing protocols, implementing cryptographic algorithms, and finding side-channel or logical flaws in custom crypto configurations.",
            cmd: "$ decrypt --key private.pem"
        },
        {
            title: "0x03. Memory Corruption Exploitation",
            description: "Decompiling binaries, analyzing malware, heap/stack exploitation, and writing custom tooling to inspect running process architectures.",
            cmd: "$ ghidra --analyze binary"
        }
    ];
</script>

<div class="space-y-16 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="text-center py-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-mono">
            About Me
        </h1>
        <p class="text-lg md:text-xl text-zinc-400 font-mono max-w-2xl mx-auto leading-relaxed">
            <span class="text-zinc-600">&gt;</span> Security specialist focusing on defensive systems through offensive understanding.
        </p>
    </div>

    <!-- Whoami Section -->
    <div class="tech-card rounded-lg p-8 border border-zinc-800/40">
        <h2 class="text-2xl font-bold text-white mb-6 font-mono tracking-tight flex items-center">
            <span class="text-zinc-600 mr-2">$</span> whoami
        </h2>
        <div class="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
                I'm <span class="text-white font-semibold font-mono">zer0x64</span>, a cybersecurity specialist focused on finding and understanding vulnerabilities within modern applications. My work spans offensive operations, cryptographic audits, and memory corruption exploitation.
            </p>
            <p>
                I approach systems with the belief that security is not a state, but a continuous process of analysis. Understanding how complex systems fail at a low level is essential to making them resilient.
            </p>
        </div>
    </div>

    <!-- Technical Expertise Bento Grid -->
    <div>
        <h2 class="text-xl font-bold text-white mb-6 font-mono tracking-tight flex items-center">
            <span class="text-zinc-600 mr-2">#</span> technical_expertise
        </h2>
        <div class="grid-bento">
            {#each expertise as { title, description, cmd }}
                <div class="tech-card rounded-lg p-6 border border-zinc-800/40 flex flex-col justify-between">
                    <div>
                        <h3 class="text-lg font-bold text-white font-mono mb-3">{title}</h3>
                        <p class="text-sm text-zinc-400 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    <div class="mt-6 text-xs font-mono text-zinc-500">
                        {cmd}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- NorthSec CTF -->
    <div class="tech-card rounded-lg p-8 border border-zinc-800/40">
        <h2 class="text-2xl font-bold text-white mb-6 font-mono tracking-tight flex items-center">
            <span class="text-zinc-600 mr-2">!</span> NorthSec CTF
        </h2>
        <div class="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
                I serve as a challenge designer for <strong class="text-white font-semibold">NorthSec CTF</strong>, one of the premier live-hacking events globally. My role is to design engaging, creative challenges that prioritize the fun factor and clever logic.
            </p>
            <p>
                By building fun and innovative challenge environments, I help participants explore obscure exploitation mechanisms, from custom memory corruption bugs to complex cryptographic side-channels.
            </p>
            
        </div>
    </div>

    <!-- Philosophy -->
    <div class="tech-card rounded-lg p-8 border border-zinc-800/40">
        <h2 class="text-2xl font-bold text-white mb-6 font-mono tracking-tight flex items-center">
            <span class="text-zinc-600 mr-2">~</span> Philosophy
        </h2>
        <div class="space-y-6 text-zinc-300 leading-relaxed text-base md:text-lg">
            <p>
                Security through obscurity is not security. I advocate for open-source analysis, detailed disclosures, and active collaboration within the white-hat community. The only way to build secure platforms is to fully understand how they break.
            </p>
            <blockquote class="border-l border-zinc-700 pl-4 py-1 italic text-zinc-400 font-mono text-sm leading-relaxed">
                "We explore... and you call us criminals.<br>
                We seek after knowledge... and you call us criminals.<br>
                We exist without skin color, without nationality, without religious bias... and you call us criminals."<br>
                <span class="text-zinc-500 block mt-2">— The Mentor, 1986</span>
            </blockquote>
        </div>
    </div>

    <!-- Contact & Action -->
    <div class="tech-card rounded-lg p-8 text-center border border-zinc-800/40">
        <h2 class="text-2xl font-bold text-white mb-4 font-mono tracking-tight">./connect.sh</h2>
        <p class="text-zinc-400 mb-8 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Interested in collaboration, discussing security research, or CTF design? Let's connect.
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

