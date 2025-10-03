<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";
    import { onMount } from "svelte";

    let { children } = $props();
    let mobileMenuOpen = $state(false);
    let mobileMenuRef = $state<HTMLDivElement>();
    let mobileMenuOpenRef = $state<HTMLButtonElement>();

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape" && mobileMenuOpen) {
            closeMobileMenu();
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (
            mobileMenuOpen &&
            mobileMenuRef &&
            mobileMenuOpenRef &&
            !mobileMenuRef.contains(event.target as Node) &&
            !mobileMenuOpenRef.contains(event.target as Node)
        ) {
            closeMobileMenu();
            console.log("Click outside detected");
        }
    }

    onMount(() => {
        document.addEventListener("keydown", handleKeydown);
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.removeEventListener("click", handleClickOutside);
        };
    });
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
                        onclick={toggleMobileMenu}
                        bind:this={mobileMenuOpenRef}
                    >
                        <svg
                            class="h-6 w-6 hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300 {mobileMenuOpen
                                ? 'rotate-90'
                                : ''}"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {#if mobileMenuOpen}
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            {:else}
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            {/if}
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        {#if mobileMenuOpen}
            <div
                bind:this={mobileMenuRef}
                class="md:hidden border-t border-cyan-500/30 bg-black/90 backdrop-blur-sm transform transition-all duration-300 ease-in-out"
            >
                <div class="px-4 py-6 space-y-4">
                    <a
                        href="/"
                        class="block text-cyan-400 hover:text-pink-400 px-4 py-3 rounded-lg font-medium font-mono transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] border border-transparent hover:border-cyan-400/30 active:scale-95"
                        onclick={closeMobileMenu}>$ cd /home</a
                    >
                    <a
                        href="/about"
                        class="block text-gray-300 hover:text-cyan-400 px-4 py-3 rounded-lg font-medium font-mono transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)] border border-transparent hover:border-cyan-400/30 active:scale-95"
                        onclick={closeMobileMenu}>$ ./about --info</a
                    >
                    <a
                        href="/blog"
                        class="block text-gray-300 hover:text-green-400 px-4 py-3 rounded-lg font-medium font-mono transition-all duration-300 hover:bg-green-400/10 hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] border border-transparent hover:border-green-400/30 active:scale-95"
                        onclick={closeMobileMenu}>$ cat /blog/posts</a
                    >
                    <a
                        href="/projects"
                        class="block text-gray-300 hover:text-purple-400 px-4 py-3 rounded-lg font-medium font-mono transition-all duration-300 hover:bg-purple-400/10 hover:shadow-[0_0_10px_rgba(147,51,234,0.2)] border border-transparent hover:border-purple-400/30 active:scale-95"
                        onclick={closeMobileMenu}>$ ls /projects/</a
                    >

                    <!-- Mobile Terminal Footer -->
                    <div class="pt-4 mt-6 border-t border-cyan-500/20">
                        <div class="text-sm font-mono text-gray-500 px-4">
                            <span class="text-green-400">zer0x64@mobile</span
                            >:<span class="text-cyan-400">~</span>$
                            <span class="animate-pulse">_</span>
                        </div>
                        <div class="text-xs font-mono text-gray-600 px-4 mt-2">
                            <span class="text-cyan-400"># ESC</span> to close menu
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </nav>

    <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {@render children?.()}
    </main>
</div>
