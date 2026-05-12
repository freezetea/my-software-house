<template>
  <div class="min-h-screen bg-zinc-950 px-6 py-24">
    <div class="max-w-4xl mx-auto">

      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-widest text-violet-400 border border-violet-800 px-4 py-1 rounded-full">Our work</span>
        <h2 class="text-5xl font-black text-white mt-6 mb-4">Projects we're proud of</h2>
        <p class="text-zinc-400 max-w-md mx-auto">A selection of websites and apps we've built for our clients.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-600 transition-colors">
          <div class="h-48 bg-violet-900/30 flex items-center justify-center text-5xl">🛒</div>
          <div class="p-6">
            <span class="text-xs text-violet-400 uppercase tracking-widest">E-commerce</span>
            <h3 class="text-white font-bold text-xl mt-1 mb-2">ShopFast</h3>
            <p class="text-zinc-400 text-sm">A full-stack e-commerce platform built with Nuxt.js and Stripe payments.</p>
            <div class="flex gap-2 mt-4">
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Nuxt.js</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Stripe</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Tailwind</span>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-600 transition-colors">
          <div class="h-48 bg-teal-900/30 flex items-center justify-center text-5xl">📊</div>
          <div class="p-6">
            <span class="text-xs text-teal-400 uppercase tracking-widest">SaaS</span>
            <h3 class="text-white font-bold text-xl mt-1 mb-2">DashMetrics</h3>
            <p class="text-zinc-400 text-sm">An analytics dashboard with real-time charts and team collaboration.</p>
            <div class="flex gap-2 mt-4">
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Vue 3</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Supabase</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Chart.js</span>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-600 transition-colors">
          <div class="h-48 bg-amber-900/30 flex items-center justify-center text-5xl">🏨</div>
          <div class="p-6">
            <span class="text-xs text-amber-400 uppercase tracking-widest">Booking</span>
            <h3 class="text-white font-bold text-xl mt-1 mb-2">StayEasy</h3>
            <p class="text-zinc-400 text-sm">A hotel booking platform with availability calendar and payments.</p>
            <div class="flex gap-2 mt-4">
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Nuxt.js</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Prisma</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-600 transition-colors">
          <div class="h-48 bg-pink-900/30 flex items-center justify-center text-5xl">🎨</div>
          <div class="p-6">
            <span class="text-xs text-pink-400 uppercase tracking-widest">Portfolio</span>
            <h3 class="text-white font-bold text-xl mt-1 mb-2">ArtFolio</h3>
            <p class="text-zinc-400 text-sm">A creative portfolio site with animations and a headless CMS.</p>
            <div class="flex gap-2 mt-4">
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Nuxt.js</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Sanity</span>
              <span class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">GSAP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>