<div class="space-y-12">
    <!-- Page Header -->
    <div class="text-center relative">
        <div
            class="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-cyan-500/5 animate-pulse"
        ></div>
        <div class="relative z-10">
            <h1
                class="text-4xl md:text-6xl font-bold text-green-400 mb-6 font-mono glow-green"
            >
                <span class="text-cyan-500">[</span> Blog
                <span class="text-cyan-500">]</span>
            </h1>
            <p
                class="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed"
            >
                <span class="text-green-400">&gt;</span> Insights into
                <span class="text-cyan-400">cybersecurity</span>,
                <span class="text-pink-400">CTF writeups</span>, and deep
                technical analysis of
                <span class="text-red-400">vulnerabilities</span>
                and
                <span class="text-purple-400">exploitation techniques</span>.
                <span class="animate-pulse text-green-400">_</span>
            </p>
        </div>
    </div>

    <!-- Categories Filter -->
    <div class="max-w-5xl mx-auto">
        <div class="cyber-card rounded-xl p-6">
            <h2
                class="text-2xl font-semibold text-cyan-400 mb-6 font-mono flex items-center"
            >
                <span class="text-green-400 mr-2">$</span> ls /blog/categories/
                <span class="ml-4 text-pink-500 animate-pulse">|</span>
            </h2>
            <div class="flex flex-wrap gap-4">
                <button
                    class="cyber-button px-6 py-3 rounded-lg text-sm font-medium font-mono hover:scale-105 transition-all duration-300"
                >
                    <span class="text-cyan-400">0xFF</span> All Posts
                </button>
                <button
                    class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/50 text-pink-300 px-6 py-3 rounded-lg text-sm font-medium font-mono hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                >
                    <span class="text-pink-500">0x01</span> CTF Writeups
                </button>
                <button
                    class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300 px-6 py-3 rounded-lg text-sm font-medium font-mono hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                >
                    <span class="text-purple-500">0x02</span> Memory Exploitation
                </button>
                <button
                    class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-300 px-6 py-3 rounded-lg text-sm font-medium font-mono hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                    <span class="text-green-500">0x03</span> Cryptography
                </button>
                <button
                    class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/50 text-yellow-300 px-6 py-3 rounded-lg text-sm font-medium font-mono hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                >
                    <span class="text-yellow-500">0x04</span> Research
                </button>
                <button
                    class="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 text-blue-300 px-6 py-3 rounded-lg text-sm font-medium font-mono hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                    <span class="text-blue-500">0x05</span> Tools & Tutorials
                </button>
            </div>
        </div>
    </div>

    <!-- Blog Posts -->
    <div class="max-w-5xl mx-auto space-y-8">
        <!-- Sample Blog Post 1 -->
        <article
            class="cyber-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div class="flex items-center text-sm text-gray-400 mb-4 font-mono">
                <time class="text-cyan-400">Coming Soon</time>
                <span class="mx-3 text-pink-400">•</span>
                <span
                    class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/50 text-purple-300 text-xs font-medium px-3 py-1 rounded-lg"
                >
                    <span class="text-purple-500">0x02</span> Memory Exploitation
                </span>
                <span class="ml-auto text-green-400">STATUS: CLASSIFIED</span>
            </div>
            <h3
                class="text-2xl font-semibold text-purple-400 mb-4 font-mono group-hover:glow-text transition-all duration-300"
            >
                Advanced ROP Techniques in Modern Binaries
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                Exploring sophisticated <span class="text-red-400"
                    >Return-Oriented Programming</span
                >
                techniques to bypass modern exploit mitigations including
                <span class="text-yellow-400">ASLR</span>,
                <span class="text-cyan-400">DEP</span>, and
                <span class="text-green-400">stack canaries</span>. We'll dive
                into
                <span class="text-pink-400">gadget chaining strategies</span> and
                automation tools.
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6 font-mono text-sm">
                    <span class="text-gray-400">📖 8 min read</span>
                    <span class="text-gray-500">💀 Difficulty: EXTREME</span>
                </div>
                <button
                    class="cyber-button px-6 py-3 rounded-lg font-medium text-sm group-hover:scale-105 transition-all duration-300"
                >
                    <span class="flex items-center">
                        Access File <span class="ml-2">→</span>
                    </span>
                </button>
            </div>
        </article>

        <!-- Sample Blog Post 2 -->
        <article
            class="cyber-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div class="flex items-center text-sm text-gray-400 mb-4 font-mono">
                <time class="text-cyan-400">Coming Soon</time>
                <span class="mx-3 text-pink-400">•</span>
                <span
                    class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-300 text-xs font-medium px-3 py-1 rounded-lg"
                >
                    <span class="text-green-500">0x03</span> Cryptography
                </span>
                <span class="ml-auto text-red-400">DANGER: HIGH</span>
            </div>
            <h3
                class="text-2xl font-semibold text-green-400 mb-4 font-mono group-hover:glow-green transition-all duration-300"
            >
                Breaking RSA: Common Implementation Vulnerabilities
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                A deep dive into real-world <span class="text-red-400"
                    >RSA implementation flaws</span
                >, from
                <span class="text-yellow-400">padding oracle attacks</span>
                to <span class="text-purple-400">timing side-channels</span>.
                Includes practical examples and
                <span class="text-pink-400">exploitation techniques</span> used in
                CTF challenges.
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6 font-mono text-sm">
                    <span class="text-gray-400">🔐 12 min read</span>
                    <span class="text-gray-500">🎯 Target: RSA-2048</span>
                </div>
                <button
                    class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400 text-green-300 px-6 py-3 rounded-lg font-medium text-sm hover:border-green-300 hover:bg-green-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-105"
                >
                    <span class="flex items-center">
                        Decrypt File <span class="ml-2">→</span>
                    </span>
                </button>
            </div>
        </article>

        <!-- Sample Blog Post 3 -->
        <article
            class="cyber-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div class="flex items-center text-sm text-gray-400 mb-4 font-mono">
                <time class="text-cyan-400">Coming Soon</time>
                <span class="mx-3 text-pink-400">•</span>
                <span
                    class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400/50 text-pink-300 text-xs font-medium px-3 py-1 rounded-lg"
                >
                    <span class="text-pink-500">0x01</span> CTF Writeups
                </span>
                <span class="ml-auto text-yellow-400">PREMIUM CONTENT</span>
            </div>
            <h3
                class="text-2xl font-semibold text-pink-400 mb-4 font-mono group-hover:text-yellow-400 transition-all duration-300"
            >
                NorthSec 2024: Behind the Scenes of Challenge Design
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                An inside look at the process of creating <span
                    class="text-red-400">CTF challenges</span
                >
                for one of the world's largest
                <span class="text-cyan-400">cybersecurity competitions</span>.
                From initial concept to final deployment, learn what makes a
                <span class="text-yellow-400">great challenge</span>.
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6 font-mono text-sm">
                    <span class="text-gray-400">⚡ 15 min read</span>
                    <span class="text-gray-500">🏆 Level: INSIDER</span>
                </div>
                <button
                    class="bg-gradient-to-r from-pink-500/20 to-red-500/20 border border-pink-400 text-pink-300 px-6 py-3 rounded-lg font-medium text-sm hover:border-pink-300 hover:bg-pink-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:scale-105"
                >
                    <span class="flex items-center">
                        Access Archive <span class="ml-2">→</span>
                    </span>
                </button>
            </div>
        </article>

        <!-- Sample Blog Post 4 -->
        <article
            class="cyber-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
            ></div>
            <div class="flex items-center text-sm text-gray-400 mb-4 font-mono">
                <time class="text-cyan-400">Coming Soon</time>
                <span class="mx-3 text-pink-400">•</span>
                <span
                    class="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/50 text-blue-300 text-xs font-medium px-3 py-1 rounded-lg"
                >
                    <span class="text-blue-500">0x05</span> Tools & Tutorials
                </span>
                <span class="ml-auto text-purple-400">BUILD GUIDE</span>
            </div>
            <h3
                class="text-2xl font-semibold text-blue-400 mb-4 font-mono group-hover:glow-text transition-all duration-300"
            >
                Building Your Own Binary Analysis Framework
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed text-lg">
                Step-by-step guide to creating custom tools for <span
                    class="text-cyan-400">reverse engineering</span
                >
                and <span class="text-red-400">vulnerability research</span>.
                Covering everything from
                <span class="text-green-400">disassembly</span>
                to <span class="text-purple-400">dynamic analysis</span> and
                <span class="text-yellow-400">symbolic execution</span>.
            </p>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-6 font-mono text-sm">
                    <span class="text-gray-400">🔧 20 min read</span>
                    <span class="text-gray-500">⚙️ Complexity: ADVANCED</span>
                </div>
                <button
                    class="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-medium text-sm hover:border-blue-300 hover:bg-blue-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-105"
                >
                    <span class="flex items-center">
                        Download Source <span class="ml-2">→</span>
                    </span>
                </button>
            </div>
        </article>
    </div>

    <!-- Coming Soon Message -->
    <div class="max-w-5xl mx-auto text-center py-16">
        <div class="cyber-card rounded-xl p-12 relative overflow-hidden">
            <div
                class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"
            ></div>
            <div class="relative z-10">
                <h2
                    class="text-3xl font-semibold text-cyan-400 mb-6 font-mono glow-cyan"
                >
                    <span class="text-green-400">&gt;</span>
                    ./compile_content.sh <span class="animate-pulse">|</span>
                </h2>
                <p
                    class="text-gray-300 mb-8 text-lg font-mono leading-relaxed max-w-3xl mx-auto"
                >
                    I'm currently working on exciting new content covering the
                    latest in
                    <span class="text-cyan-400">cybersecurity research</span>,
                    <span class="text-pink-400">CTF writeups</span>, and
                    technical <span class="text-green-400">deep-dives</span>.
                    Stay tuned for regular updates from the
                    <span class="text-red-400">digital underground</span>!
                </p>

                <div
                    class="mb-8 p-4 bg-black/40 rounded-lg border border-cyan-500/30 font-mono text-sm max-w-md mx-auto"
                >
                    <div class="text-cyan-400 mb-2">$ ./status.sh</div>
                    <div class="text-green-400">
                        📝 Articles in progress: 12
                    </div>
                    <div class="text-yellow-400">🔬 Research active: TRUE</div>
                    <div class="text-pink-400">⏳ ETA: SOON™</div>
                </div>

                <div class="flex flex-col sm:flex-row justify-center gap-6">
                    <a
                        href="/about"
                        class="cyber-button px-8 py-4 rounded-lg font-medium font-mono text-lg group"
                    >
                        <span class="flex items-center justify-center">
                            <span class="text-cyan-400 mr-2">👤</span>
                            Learn More About Me
                            <span
                                class="ml-2 group-hover:translate-x-1 transition-transform"
                                >→</span
                            >
                        </span>
                    </a>
                    <a
                        href="/projects"
                        class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-medium font-mono text-lg hover:border-purple-300 hover:bg-purple-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
                    >
                        <span class="flex items-center justify-center">
                            <span class="text-purple-400 mr-2">⚡</span>
                            View My Projects
                            <span
                                class="ml-2 group-hover:translate-x-1 transition-transform"
                                >→</span
                            >
                        </span>
                    </a>
                </div>

                <div class="mt-8 text-sm font-mono text-gray-500">
                    <span class="text-green-400">zer0x64@blog</span>:<span
                        class="text-cyan-400">~</span
                    >$ <span class="animate-pulse">_</span>
                </div>
            </div>
        </div>
    </div>
</div>
