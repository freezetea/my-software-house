<template>
  <div>
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <NuxtLink to="/" class="text-white font-black text-xl tracking-tight">
        My<span class="text-violet-400">Studio</span>
      </NuxtLink>
      <ul class="flex gap-8 list-none">
  <li>
    <NuxtLink to="/" class="text-zinc-400 hover:text-white text-sm transition-colors">
      Home
    </NuxtLink>
  </li>
  <li>
    <NuxtLink to="/work" class="text-zinc-400 hover:text-white text-sm transition-colors">
      Work
    </NuxtLink>
  </li>
  <li>
    <NuxtLink to="/contact" class="text-zinc-400 hover:text-white text-sm transition-colors">
      Contact
    </NuxtLink>
  </li>
</ul>
      <NuxtLink to="/contact" class="bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
        Get a quote
      </NuxtLink>
    </nav>

    <div class="pt-16">
      <NuxtPage />
    </div>

    <footer class="bg-zinc-900 border-t border-zinc-800 text-zinc-400 text-center py-8 text-sm">
      <p>© 2026 MyStudio. Built with Nuxt.js 💚</p>
    </footer>
  </div>
</template>