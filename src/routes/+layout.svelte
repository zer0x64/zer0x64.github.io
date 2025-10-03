<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen matrix-bg">
    <nav
        class="bg-black/80 backdrop-blur-sm border-b border-cyan-500/30 nav-glow"
    >
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <a
                        href="/"
                        class="text-2xl font-bold glow-cyan hover:glow-pink transition-all duration-300"
                        >zer0x64</a
                    >
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a
                            href="/"
                            class="text-cyan-400 hover:text-pink-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:glow-pink relative group"
                            >Home
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                        <a
                            href="/about"
                            class="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:glow-cyan relative group"
                            >About
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                        <a
                            href="/blog"
                            class="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:glow-green relative group"
                            >Blog
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                        <a
                            href="/projects"
                            class="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                            >Projects
                            <span
                                class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"
                            ></span>
                        </a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button
                        class="text-cyan-400 hover:text-pink-400 focus:outline-none focus:text-pink-400 transition-all duration-300"
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            class="h-6 w-6 hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {@render children?.()}
    </main>
</div>
