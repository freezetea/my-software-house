<template>
  <div>
    <!-- READING PROGRESS -->
    <div class="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-white/10">
      <div class="h-full bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 transition-all duration-100" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <!-- NAVBAR -->
    <nav class="fixed top-2 left-0 right-0 z-[100] px-4 md:px-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between py-3 px-5 md:px-7 rounded-2xl bg-[#0f1147]/85 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
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
          class="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5">
          Get a Quote →
        </a>

        <button class="md:hidden text-white p-2" @click="menuOpen = !menuOpen">
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all origin-center" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-0.5 bg-white transition-all origin-center" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>

      <div v-if="menuOpen" class="md:hidden mt-2 bg-[#0f1147]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
        <NuxtLink to="/" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Home</NuxtLink>
        <NuxtLink to="/#about" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">About</NuxtLink>
        <NuxtLink to="/#services" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Services</NuxtLink>
        <NuxtLink to="/work" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Work</NuxtLink>
        <NuxtLink to="/contact" class="text-slate-300 hover:text-white hover:bg-white/10 text-sm py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Contact</NuxtLink>
        <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
          class="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center mt-2" @click="menuOpen = false">
          Get a Quote →
        </a>
      </div>
    </nav>

    <div class="pt-16">
      <NuxtPage />
    </div>

    <!-- FOOTER -->
    <footer style="background:#0a0d3d" class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span class="text-white font-black text-sm">K</span>
            </div>
            <span class="text-white font-black text-lg">koda<span class="text-indigo-300">kode</span></span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">Turning ideas into impact through the power of technology.<br>PT. Tekno Tumbuh Bersama.</p>
          <div class="flex flex-col gap-1.5 mb-6">
            <a href="mailto:info@kodakode.com" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">📧 info@kodakode.com</a>
            <a href="tel:087784794214" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">📞 087784794214</a>
            <span class="text-slate-500 text-xs">🕐 Monday–Friday, 10am–5pm WIB</span>
          </div>
          <div class="flex gap-2">
  <!-- Facebook -->
  <a href="https://facebook.com/kodakode" target="_blank" title="Facebook"
    class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
    style="background:#1877f220; border:1px solid #1877f240">
    <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#1877f2" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
  <!-- Twitter/X -->
  <a href="https://twitter.com/kodakode" target="_blank" title="Twitter / X"
    class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
    style="background:#1da1f220; border:1px solid #1da1f240">
    <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#1da1f2" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
  <!-- Instagram -->
  <a href="https://instagram.com/kodakode" target="_blank" title="Instagram"
    class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
    style="background:#e1306c20; border:1px solid #e1306c40">
    <svg viewBox="0 0 24 24" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#f09433"/>
          <stop offset="50%" stop-color="#dc2743"/>
          <stop offset="100%" stop-color="#bc1888"/>
        </linearGradient>
      </defs>
      <path fill="url(#igGrad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  <!-- LinkedIn -->
  <a href="https://linkedin.com/company/kodakode" target="_blank" title="LinkedIn"
    class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
    style="background:#0a66c220; border:1px solid #0a66c240">
    <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#0a66c2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
</div>
        </div>
        <div>
          <div class="text-white font-bold text-sm mb-4 flex items-center gap-2">
            <span class="w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 inline-block rounded-full"></span> Services
          </div>
          <ul class="flex flex-col gap-2.5">
            <li v-for="s in footerServices" :key="s"><a href="#" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">{{ s }}</a></li>
          </ul>
        </div>
        <div>
          <div class="text-white font-bold text-sm mb-4 flex items-center gap-2">
            <span class="w-4 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 inline-block rounded-full"></span> Company
          </div>
          <ul class="flex flex-col gap-2.5">
            <li><NuxtLink to="/#about" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/work" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Our Work</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Contact</NuxtLink></li>
            <li><a href="https://kodakode.com/blog-standard/" target="_blank" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Blog</a></li>
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

const socials = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/kodakode',
    color: '#1877f2',
    fill: '#1877f2',
    viewBox: '0 0 24 24',
    path: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>'
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/kodakode',
    color: '#1da1f2',
    fill: '#1da1f2',
    viewBox: '0 0 24 24',
    path: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/kodakode',
    color: '#e1306c',
    fill: 'url(#igGrad)',
    viewBox: '0 0 24 24',
    path: '<defs><linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#f09433"/><stop offset="25%" stop-color="#e6683c"/><stop offset="50%" stop-color="#dc2743"/><stop offset="75%" stop-color="#cc2366"/><stop offset="100%" stop-color="#bc1888"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/kodakode',
    color: '#0a66c2',
    fill: '#0a66c2',
    viewBox: '0 0 24 24',
    path: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  },
]

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