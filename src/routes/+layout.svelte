<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "../app.css";

    let { children } = $props();
    let mobileMenuOpen = $state(false);
    let mobileMenuRef = $state<HTMLDivElement>();
    let mobileMenuOpenRef = $state<HTMLButtonElement>();

    const navItems = [
        { href: "/", name: "Home" },
        { href: "/about", name: "About" },
        { href: "/blog", name: "Blog" },
        { href: "/projects", name: "Projects" }
    ];

    const socialLinks = [
        { href: "https://github.com/zer0x64", name: "github" },
        { href: "https://bsky.app/profile/zer0x64.bsky.social", name: "bluesky" },
        { href: "https://www.linkedin.com/in/zer0x64/", name: "linkedin" }
    ];

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape" && mobileMenuOpen) {
            mobileMenuOpen = false;
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
            mobileMenuOpen = false;
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleClickOutside} />

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen flex flex-col matrix-bg">
    <nav class="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-zinc-800/40">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex-shrink-0">
                    <a
                        href="/"
                        class="text-xl font-bold font-mono tracking-tight text-white hover:text-zinc-300 transition-colors duration-200"
                        >zer0x64</a
                    >
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        {#each navItems as { href, name }}
                            <a
                                {href}
                                class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium font-mono transition-colors duration-200"
                                >{name}</a
                            >
                        {/each}
                    </div>
                </div>
                <div class="md:hidden">
                    <button
                        class="text-zinc-400 hover:text-white focus:outline-none transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                        onclick={() => mobileMenuOpen = !mobileMenuOpen}
                        bind:this={mobileMenuOpenRef}
                    >
                        <svg
                            class="h-6 w-6 transition-transform duration-300 {mobileMenuOpen
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
                                    stroke-width="1.5"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            {:else}
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
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
                class="md:hidden border-b border-zinc-800/40 bg-zinc-950/95 backdrop-blur-md transition-all duration-300 ease-in-out"
            >
                <div class="px-4 py-4 space-y-2 font-mono">
                    {#each navItems as { href, name }}
                        <a
                            {href}
                            class="block text-zinc-400 hover:text-white px-3 py-2 rounded text-sm transition-colors duration-200"
                            onclick={() => mobileMenuOpen = false}>{name}</a
                        >
                    {/each}
                </div>
            </div>
        {/if}
    </nav>

    <main class="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {@render children?.()}
    </main>

    <footer class="border-t border-zinc-800/30 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
            <div>&copy; {new Date().getFullYear()} zer0x64. All rights reserved.</div>
            <div class="flex space-x-6">
                {#each socialLinks as { href, name }}
                    <a href={href} class="hover:text-zinc-300 transition-colors" target="_blank" rel="noopener noreferrer">{name}</a>
                {/each}
            </div>
        </div>
    </footer>
</div>

