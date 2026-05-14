<template>
  <div>
    <div class="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-white/10">
      <div class="h-full bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 transition-all duration-100" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <nav class="fixed top-2 left-0 right-0 z-[100] px-4 md:px-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between py-3 px-5 md:px-7 rounded-2xl bg-[#1a1f5e]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span class="text-white font-black text-sm">K</span>
          </div>
          <span class="text-white font-black text-lg tracking-tight">koda<span class="text-indigo-300">kode</span></span>
        </NuxtLink>

        <ul class="hidden md:flex gap-1 list-none bg-white/5 rounded-xl px-2 py-1">
          <li><NuxtLink to="/" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg transition-all block">Home</NuxtLink></li>
          <li><NuxtLink to="/#about" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg transition-all block">About</NuxtLink></li>
          <li><NuxtLink to="/#services" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg transition-all block">Services</NuxtLink></li>
          <li><NuxtLink to="/work" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm px-4 py-2 rounded-lg transition-all block">Work</NuxtLink></li>
        </ul>

        <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
          class="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5">
          Get a Quote →
        </a>

        <button class="md:hidden text-white p-2" @click="menuOpen = !menuOpen">
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all origin-center" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-0.5 bg-white transition-all origin-center" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>

      <div v-if="menuOpen" class="md:hidden mt-2 bg-[#1a1f5e]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
        <NuxtLink to="/" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Home</NuxtLink>
        <NuxtLink to="/#about" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">About</NuxtLink>
        <NuxtLink to="/#services" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Services</NuxtLink>
        <NuxtLink to="/work" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Work</NuxtLink>
        <NuxtLink to="/contact" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Contact</NuxtLink>
        <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
          class="bg-indigo-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center mt-2 hover:bg-indigo-500 transition-colors" @click="menuOpen = false">
          Get a Quote →
        </a>
      </div>
    </nav>

    <div class="pt-16">
      <NuxtPage />
    </div>

    <footer class="bg-[#0e1245] border-t border-white/10">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span class="text-white font-black text-sm">K</span>
            </div>
            <span class="text-white font-black text-lg">koda<span class="text-indigo-300">kode</span></span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
            Turning ideas into impact through the power of technology.<br>PT. Tekno Tumbuh Bersama.
          </p>
          <div class="flex flex-col gap-1.5 mb-5">
            <a href="mailto:info@kodakode.com" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">📧 info@kodakode.com</a>
            <a href="tel:087784794214" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">📞 087784794214</a>
            <span class="text-slate-500 text-xs">🕐 Monday–Friday, 10am–5pm WIB</span>
          </div>
          <div class="flex gap-2">
            <a v-for="s in socials" :key="s" href="#" class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-indigo-600/30 hover:border-indigo-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-all text-xs font-bold">{{ s }}</a>
          </div>
        </div>
        <div>
          <div class="text-white font-bold text-sm mb-4 flex items-center gap-2">
            <span class="w-4 h-0.5 bg-indigo-500 inline-block"></span> Services
          </div>
          <ul class="flex flex-col gap-2.5">
            <li v-for="s in footerServices" :key="s"><a href="#" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">{{ s }}</a></li>
          </ul>
        </div>
        <div>
          <div class="text-white font-bold text-sm mb-4 flex items-center gap-2">
            <span class="w-4 h-0.5 bg-indigo-500 inline-block"></span> Company
          </div>
          <ul class="flex flex-col gap-2.5">
            <li><NuxtLink to="/#about" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/work" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Our Work</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Contact</NuxtLink></li>
            <li><a href="#" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/5 py-5 px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span class="text-slate-600 text-xs">© 2025 kodakode — PT. Tekno Tumbuh Bersama. All rights reserved.</span>
        <span class="text-slate-600 text-xs">Built with Nuxt.js 💚</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrollProgress = ref(0)
const socials = ['fb', 'tw', 'ig', 'in']
const footerServices = ['Website Development', 'Mobile App Solutions', 'UX/UI Design', 'IT Consulting', 'SEO Optimization']

function onScroll() {
  const el = document.documentElement
  const scrolled = el.scrollTop || document.body.scrollTop
  const total = el.scrollHeight - el.clientHeight
  scrollProgress.value = total > 0 ? Math.round((scrolled / total) * 100) : 0
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
html, body {
  background-color: #0f1147;
  margin: 0;
  padding: 0;
}
</style>