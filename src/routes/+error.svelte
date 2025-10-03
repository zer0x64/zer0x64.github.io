<script lang="ts">
    import { page } from "$app/stores";

    $: status = ($page.error as any)?.status;
    $: message = ($page.error as any)?.message;
</script>

<div class="min-h-screen flex items-center justify-center matrix-bg">
    <div class="max-w-3xl mx-auto text-center px-4">
        <div class="cyber-card rounded-xl p-12 relative overflow-hidden">
            <div
                class="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-500/5 animate-pulse"
            ></div>
            <div class="relative z-10">
                <div class="mb-8">
                    <h1
                        class="text-8xl font-bold text-red-400 mb-6 font-mono glow-text animate-pulse"
                    >
                        {status || "404"}
                    </h1>
                    <h2 class="text-4xl font-bold text-cyan-400 mb-6 font-mono">
                        {#if status === 404}
                            <span class="text-red-500">[</span> ACCESS DENIED
                            <span class="text-red-500">]</span>
                        {:else if status}
                            <span class="text-red-500">[</span> SYSTEM ERROR {status}
                            <span class="text-red-500">]</span>
                        {:else}
                            <span class="text-red-500">[</span> CRITICAL FAILURE
                            <span class="text-red-500">]</span>
                        {/if}
                    </h2>
                    <div
                        class="mb-8 p-4 bg-black/40 rounded-lg border border-red-500/40 font-mono text-sm"
                    >
                        <div class="text-red-400 mb-2">
                            $ cat /var/log/error.log
                        </div>
                        <p class="text-gray-300 leading-relaxed">
                            {#if status === 404}
                                <span class="text-red-400">ERROR:</span> The
                                requested resource could not be located in the
                                filesystem.<br />
                                <span class="text-yellow-400">CAUSE:</span> File
                                may have been
                                <span class="text-pink-400">deleted</span>,
                                <span class="text-cyan-400">moved</span>, or
                                <span class="text-green-400">never existed</span
                                >.<br />
                                <span class="text-purple-400">ACTION:</span> Verify
                                the path and try again.
                            {:else if message}
                                <span class="text-red-400">ERROR:</span>
                                {message}
                            {:else}
                                <span class="text-red-400">FATAL:</span> An
                                unexpected system failure has occurred.<br />
                                <span class="text-yellow-400">STATUS:</span> Recovery
                                attempts in progress...
                            {/if}
                        </p>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="flex flex-col sm:flex-row justify-center gap-6">
                        <a
                            href="/"
                            class="cyber-button px-8 py-4 rounded-lg font-medium font-mono text-lg group"
                        >
                            <span class="flex items-center justify-center">
                                <span class="text-cyan-400 mr-2">🏠</span>
                                Return to Base
                                <span
                                    class="ml-2 group-hover:translate-x-1 transition-transform"
                                    >→</span
                                >
                            </span>
                        </a>
                        <button
                            onclick={() => history.back()}
                            class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-medium font-mono text-lg hover:border-purple-300 hover:bg-purple-400/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
                        >
                            <span class="flex items-center justify-center">
                                <span class="text-purple-400 mr-2">↺</span>
                                Go Back
                                <span
                                    class="ml-2 group-hover:-translate-x-1 transition-transform"
                                    >←</span
                                >
                            </span>
                        </button>
                    </div>

                    <div class="pt-8">
                        <p class="text-sm text-cyan-400 mb-4 font-mono">
                            <span class="text-green-400">&gt;</span> Or navigate
                            to these sectors:
                        </p>
                        <div class="flex justify-center space-x-8 font-mono">
                            <a
                                href="/about"
                                class="text-cyan-400 hover:text-pink-400 font-medium hover:glow-text transition-all duration-300"
                                >./about</a
                            >
                            <a
                                href="/blog"
                                class="text-green-400 hover:text-yellow-400 font-medium hover:glow-text transition-all duration-300"
                                >./blog</a
                            >
                            <a
                                href="/projects"
                                class="text-purple-400 hover:text-cyan-400 font-medium hover:glow-text transition-all duration-300"
                                >./projects</a
                            >
                        </div>
                    </div>
                </div>

                <div class="mt-12 text-center">
                    <div
                        class="inline-flex items-center space-x-3 text-gray-500 bg-black/30 px-6 py-3 rounded-lg border border-red-500/30"
                    >
                        <svg
                            class="w-5 h-5 text-red-400 animate-pulse"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-sm font-mono text-gray-400">
                            If this error persists, the <span
                                class="text-red-400">system</span
                            >
                            might need
                            <span class="text-cyan-400">debugging</span>
                        </span>
                    </div>

                    <div class="mt-6 text-xs font-mono text-gray-600">
                        <span class="text-green-400">zer0x64@error</span>:<span
                            class="text-cyan-400">~</span
                        >$ <span class="animate-pulse">_</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
