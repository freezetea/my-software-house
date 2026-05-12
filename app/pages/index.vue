<template>
  <div>
    <section class="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center text-center px-6 gap-4">
      <span class="text-xs uppercase tracking-widest text-violet-400 border border-violet-800 px-4 py-1 rounded-full">Nuxt.js Software House</span>
      <h2 class="text-6xl font-black tracking-tight">We build digital<br><span class="text-violet-400">products</span></h2>
      <p class="text-zinc-400 text-lg max-w-md">Fast, modern websites and apps built with Nuxt.js — from MVPs to full platforms.</p>
      <NuxtLink to="/contact" class="mt-4 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
        Start a project
      </NuxtLink>
    </section>

    <section class="bg-zinc-900 py-24 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-3xl font-black text-white mb-12">What we do</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-zinc-800 rounded-2xl p-6 text-left">
            <div class="text-2xl mb-3">🌐</div>
            <h4 class="text-white font-bold mb-2">Web Apps</h4>
            <p class="text-zinc-400 text-sm">Fast, modern websites built with Nuxt.js and Vue.</p>
          </div>
          <div class="bg-zinc-800 rounded-2xl p-6 text-left">
            <div class="text-2xl mb-3">📱</div>
            <h4 class="text-white font-bold mb-2">Mobile UX</h4>
            <p class="text-zinc-400 text-sm">Responsive designs that work on any screen size.</p>
          </div>
          <div class="bg-zinc-800 rounded-2xl p-6 text-left">
            <div class="text-2xl mb-3">⚙️</div>
            <h4 class="text-white font-bold mb-2">API & Backend</h4>
            <p class="text-zinc-400 text-sm">Secure server routes and database integrations.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>