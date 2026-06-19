<template>
  <div>

    <!-- LOADING SCREEN -->
    <Transition name="loader">
      <div
        v-if="loading"
        class="preloader fixed inset-0 z-[999] flex items-center justify-center overflow-hidden"
        :class="{ 'is-opening': curtainOpening }"
      >
        <div class="preloader-grid"></div>
        <div class="preloader-glow preloader-glow-one"></div>

        <div class="preloader-orbit hidden" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="magnetic-field" aria-hidden="true">
          <span
            v-for="(dot, i) in magneticDots"
            :key="`magnetic-dot-${i}`"
            :style="{
              '--x': dot.x,
              '--y': dot.y,
              '--near-x': dot.nearX,
              '--near-y': dot.nearY,
              '--mid-x': dot.midX,
              '--mid-y': dot.midY,
              '--far-x': dot.farX,
              '--far-y': dot.farY,
              '--delay': `${dot.delay}s`,
              '--size': `${dot.size}px`,
              '--hue': dot.hue,
            }"
          ></span>
        </div>

        <div class="relative z-10 flex flex-col items-center px-6 text-center">
          <div class="brand-loader" aria-label="KODAKODE">
            <div class="preloader-logo-mark">
              <span class="logo-loading-orbit" aria-hidden="true"></span>
            </div>
          </div>

          <div class="loader-ring hidden mb-7">
            <svg viewBox="0 0 120 120" class="loader-ring-svg" aria-hidden="true">
              <circle cx="60" cy="60" r="48" class="loader-ring-track" />
              <circle
                cx="60"
                cy="60"
                r="48"
                class="loader-ring-progress"
                :style="{ strokeDashoffset: 302 - (302 * loadingProgress) / 100 }"
              />
            </svg>
            <div class="loader-ring-core">
              <span>{{ loadingProgress }}</span>
              <small>%</small>
            </div>
          </div>

        </div>
      </div>
    </Transition>

    <!-- READING PROGRESS -->
    <div class="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-white/10">
      <div
        ref="progressBar"
        class="h-full origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400"
      ></div>
    </div>

    <!-- NAVBAR -->
    <nav class="fixed top-2 left-0 right-0 z-[100] px-4 md:px-6">
      <div
        class="max-w-6xl mx-auto flex items-center justify-between py-4 px-5 md:px-8 rounded-2xl border border-white/10 shadow-lg shadow-black/20 transition-colors duration-200"
        :class="menuOpen ? 'bg-[#080b33]' : 'bg-[#0f1147]/95'"
      >

        <NuxtLink to="/">
          <img
            src="https://kodakode.com/wp-content/uploads/2023/02/kodakode-logo-biru-teks-putih-300x106.png"
            alt="kodakode logo"
            class="h-10 md:h-12 w-auto"
          />
        </NuxtLink>

        <ul class="hidden md:flex gap-1 list-none bg-white/5 rounded-xl px-2 py-1.5">
          <li><NuxtLink to="/" class="text-slate-300 hover:text-white hover:bg-white/10 text-base px-5 py-2.5 rounded-lg transition-all block">Home</NuxtLink></li>
          <li><NuxtLink to="/#about" class="text-slate-300 hover:text-white hover:bg-white/10 text-base px-5 py-2.5 rounded-lg transition-all block">About</NuxtLink></li>
          <li><NuxtLink to="/#services" class="text-slate-300 hover:text-white hover:bg-white/10 text-base px-5 py-2.5 rounded-lg transition-all block">Services</NuxtLink></li>
          <li><NuxtLink to="/work" class="text-slate-300 hover:text-white hover:bg-white/10 text-base px-5 py-2.5 rounded-lg transition-all block">Work</NuxtLink></li>
        </ul>

        <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
          class="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white text-base font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5">
          Get a Quote →
        </a>

        <!-- hamburger -->
        <button class="md:hidden text-white p-2 rounded-xl bg-white/8 border border-white/10" @click="menuOpen = !menuOpen">
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all origin-center" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-0.5 bg-white transition-all origin-center" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="menuOpen" class="md:hidden mt-2 bg-[#080b33] border border-indigo-300/20 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl shadow-indigo-950/50 ring-1 ring-white/10">
        <NuxtLink to="/" class="text-slate-100 hover:text-white hover:bg-white/10 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Home</NuxtLink>
        <NuxtLink to="/#about" class="text-slate-100 hover:text-white hover:bg-white/10 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">About</NuxtLink>
        <NuxtLink to="/#services" class="text-slate-100 hover:text-white hover:bg-white/10 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Services</NuxtLink>
        <NuxtLink to="/work" class="text-slate-100 hover:text-white hover:bg-white/10 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Work</NuxtLink>
        <NuxtLink to="/contact" class="text-slate-100 hover:text-white hover:bg-white/10 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all" @click="menuOpen = false">Contact</NuxtLink>
        <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
          class="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center mt-2" @click="menuOpen = false">
          Get a Quote →
        </a>
      </div>
    </nav>

    <div class="pt-20 md:pt-24">
      <NuxtPage />
    </div>

    <button
      type="button"
      class="back-to-top"
      :class="{ 'is-visible': backToTopVisible }"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      ↑
    </button>

    <!-- FOOTER -->
    <footer style="background:#0a0d3d" class="border-t border-white/10">
      <div class="max-w-6xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div class="md:col-span-2">
          <!-- Footer logo -->
          <img
            src="https://kodakode.com/wp-content/uploads/2023/02/kodakode-logo-biru-teks-putih-300x106.png"
            alt="kodakode logo"
            class="h-10 w-auto mb-5"
          />

          <p class="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
            Turning ideas into impact through the power of technology.<br>PT. Tekno Tumbuh Bersama.
          </p>

          <div class="flex flex-col gap-2 mb-6">
            <a href="mailto:info@kodakode.com" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors flex items-center gap-2">
              📧 info@kodakode.com
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="inline-flex items-center gap-2 rounded-xl border border-green-500/25 bg-green-500/10 px-4 py-2.5 text-green-300 hover:bg-green-500/15 hover:text-green-200 transition-colors text-base font-semibold group">
              <svg viewBox="0 0 24 24" class="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="#25d366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <span class="text-slate-500 text-xs">🕐 Monday–Friday, 10am–5pm WIB</span>
          </div>

          <!-- Social icons -->
          <div class="hidden gap-2">
            <a href="https://facebook.com/kodakode" target="_blank" title="Facebook"
              class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style="background:#1877f220; border:1px solid #1877f240">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#1877f2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com/kodakode" target="_blank" title="Twitter / X"
              class="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style="background:#1da1f220; border:1px solid #1da1f240">
              <svg viewBox="0 0 24 24" class="w-4 h-4" fill="#1da1f2" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
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
            <li v-for="s in footerServices" :key="s">
              <a href="#services" class="text-slate-400 hover:text-indigo-300 text-sm transition-colors">{{ s }}</a>
            </li>
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
          <div class="hidden mt-6">
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 text-green-400 text-xs font-medium px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 shrink-0" fill="#4ade80" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
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

const loading = ref(true)
const loadingProgress = ref(0)
const curtainOpening = ref(false)
const magneticDots = [
  { x: -44, y: -22, delay: 0.02, size: 5, hue: '#818cf8' },
  { x: -32, y: 18, delay: 0.1, size: 4, hue: '#c4b5fd' },
  { x: -6, y: -18, delay: 0.22, size: 5, hue: '#93c5fd' },
  { x: 8, y: 22, delay: 0.12, size: 6, hue: '#818cf8' },
  { x: 34, y: -18, delay: 0.16, size: 6, hue: '#a78bfa' },
].map(dot => ({
  ...dot,
  x: `${dot.x}vw`,
  y: `${dot.y}vh`,
  nearX: `${dot.x * 0.08}vw`,
  nearY: `${dot.y * 0.08}vh`,
  midX: `${dot.x * 0.72}vw`,
  midY: `${dot.y * 0.72}vh`,
  farX: `${dot.x * 1.08}vw`,
  farY: `${dot.y * 1.08}vh`,
}))

const menuOpen = ref(false)
const progressBar = ref(null)
const backToTopVisible = ref(false)
let scrollRaf = 0

const footerServices = [
  'Website Development',
  'Mobile App Solutions',
  'UX/UI Design',
  'IT Consulting',
  'SEO Optimization',
]

function onScroll() {
  if (scrollRaf) return
  scrollRaf = requestAnimationFrame(() => {
    const el = document.documentElement
    const scrolled = el.scrollTop || document.body.scrollTop
    const total = el.scrollHeight - el.clientHeight
    const progress = total > 0 ? scrolled / total : 0
    if (progressBar.value) {
      progressBar.value.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`
    }

    const shouldShowBackToTop = progress > 0.08
    if (backToTopVisible.value !== shouldShowBackToTop) {
      backToTopVisible.value = shouldShowBackToTop
    }
    scrollRaf = 0
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  const duration = 1150

  requestAnimationFrame(() => {
    loadingProgress.value = 100
  })

  setTimeout(() => {
    curtainOpening.value = true
    setTimeout(() => { loading.value = false }, 520)
  }, duration)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (scrollRaf) cancelAnimationFrame(scrollRaf)
})
</script>

<style>
html, body {
  background-color: #0f1147;
  margin: 0;
  padding: 0;
}

.back-to-top {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 140;
  width: 3.1rem;
  height: 3.1rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(129, 140, 248, 0.42);
  border-radius: 999px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  font-size: 1.35rem;
  font-weight: 900;
  box-shadow: 0 16px 36px rgba(79, 70, 229, 0.34);
  opacity: 0;
  pointer-events: none;
  transform: translateY(0.8rem) scale(0.9);
  transition: opacity 0.24s ease, transform 0.24s ease, box-shadow 0.24s ease;
}

.back-to-top.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.back-to-top:hover {
  transform: translateY(-0.18rem) scale(1.03);
  box-shadow: 0 20px 44px rgba(79, 70, 229, 0.44);
}

.preloader {
  background:
    radial-gradient(circle at 50% 45%, rgba(124, 58, 237, 0.28), transparent 32%),
    radial-gradient(circle at 22% 24%, rgba(79, 70, 229, 0.24), transparent 28%),
    linear-gradient(135deg, #080b33 0%, #0f1147 52%, #1b0f58 100%);
  color: white;
  transition: background 0.8s ease, opacity 0.52s ease;
  contain: layout paint style;
}

.preloader::before,
.preloader::after {
  content: "";
  position: absolute;
  top: 0;
  z-index: 30;
  width: 50.5%;
  height: 100%;
  background:
    radial-gradient(circle at 100% 50%, rgba(167, 139, 250, 0.24), transparent 38%),
    linear-gradient(90deg, #070a2e 0%, #0d1045 58%, #17105b 100%);
  box-shadow:
    inset 0 0 90px rgba(255, 255, 255, 0.035),
    0 0 42px rgba(10, 13, 61, 0.55);
  opacity: 0;
  pointer-events: none;
  transform: translateX(0);
}

.preloader::before {
  left: 0;
  transform-origin: left center;
  border-right: 1px solid rgba(199, 210, 254, 0.26);
  box-shadow:
    inset -24px 0 42px rgba(167, 139, 250, 0.18),
    20px 0 46px rgba(129, 140, 248, 0.22);
}

.preloader::after {
  right: 0;
  transform-origin: right center;
  background:
    radial-gradient(circle at 0% 50%, rgba(167, 139, 250, 0.24), transparent 38%),
    linear-gradient(270deg, #070a2e 0%, #0d1045 58%, #17105b 100%);
  border-left: 1px solid rgba(199, 210, 254, 0.26);
  box-shadow:
    inset 24px 0 42px rgba(167, 139, 250, 0.18),
    -20px 0 46px rgba(129, 140, 248, 0.22);
}

.preloader-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: radial-gradient(circle at center, black 0%, transparent 68%);
  opacity: 0.22;
}

.preloader-glow {
  position: absolute;
  width: 14rem;
  height: 14rem;
  border-radius: 999px;
  filter: blur(16px);
  pointer-events: none;
}

.preloader-glow-one {
  top: 14%;
  left: 16%;
  background: rgba(99, 102, 241, 0.28);
  animation: none;
}

.preloader-glow-two {
  right: 16%;
  bottom: 12%;
  background: rgba(168, 85, 247, 0.22);
  animation: loader-float 6s ease-in-out infinite reverse;
}

.preloader-orbit {
  position: absolute;
  width: min(72vw, 28rem);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  opacity: 0.55;
}

.preloader-orbit::before,
.preloader-orbit::after {
  content: "";
  position: absolute;
  inset: 15%;
  border: 1px solid rgba(129, 140, 248, 0.16);
  border-radius: 999px;
}

.preloader-orbit::after {
  inset: 30%;
  border-color: rgba(196, 181, 253, 0.18);
}

.preloader-orbit span {
  position: absolute;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: #c4b5fd;
  box-shadow: 0 0 24px rgba(196, 181, 253, 0.8);
}

.preloader-orbit span:nth-child(1) {
  top: -0.25rem;
  left: 50%;
}

.preloader-orbit span:nth-child(2) {
  right: 12%;
  bottom: 18%;
  background: #818cf8;
}

.preloader-orbit span:nth-child(3) {
  left: 14%;
  bottom: 20%;
  background: #a78bfa;
}

.magnetic-field {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  overflow: hidden;
  display: none;
}

.magnetic-field span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  background: var(--hue);
  box-shadow:
    0 0 8px rgba(129, 140, 248, 0.35);
  opacity: 0.78;
  transform: translate3d(var(--x), var(--y), 0) scale(0.72);
  will-change: transform, opacity;
  animation: magnetic-gather 1.7s cubic-bezier(.22, 1, .36, 1) infinite;
  animation-delay: var(--delay);
}

.preloader.is-opening .magnetic-field span {
  animation: magnetic-release 0.7s cubic-bezier(.16, 1, .3, 1) forwards;
  animation-delay: var(--delay);
}

.brand-loader {
  position: relative;
  display: grid;
  width: 7.5rem;
  min-height: 7.5rem;
  place-items: center;
  border-radius: 999px;
}

.brand-loader::before {
  content: "";
  position: absolute;
  inset: -1.4rem -2.4rem;
  z-index: -1;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(129, 140, 248, 0.18), transparent 66%);
  opacity: 0.9;
  animation: loader-logo-aura 1.8s ease-in-out infinite;
}

.preloader-logo-mark {
  position: relative;
  display: grid;
  width: 5.35rem;
  height: 5.35rem;
  place-items: center;
  overflow: visible;
  border-radius: 999px;
}

.preloader-logo-mark::before {
  content: "";
  width: 4.45rem;
  height: 4.45rem;
  display: block;
  border-radius: 999px;
  background-image: url("https://kodakode.com/wp-content/uploads/2023/02/kodakode-logo-biru-teks-putih-300x106.png");
  background-repeat: no-repeat;
  background-size: auto 4.45rem;
  background-position: left center;
  filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.26));
  opacity: 0;
  transform: translateY(0.55rem) scale(0.94);
  animation: loader-logo-arrive 0.72s cubic-bezier(.22, 1, .36, 1) 0.08s both;
}

.preloader-logo {
  display: none;
}

.logo-loading-orbit {
  position: absolute;
  inset: -0.55rem;
  border-radius: 999px;
  background:
    conic-gradient(from 0deg, transparent 0deg 256deg, rgba(248, 250, 252, 0.98) 284deg, #a78bfa 318deg, transparent 344deg 360deg);
  filter: drop-shadow(0 0 12px rgba(167, 139, 250, 0.5));
  animation: logo-orbit-spin 1.08s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
}

.logo-loading-orbit::after {
  content: "";
  position: absolute;
  right: 0.08rem;
  top: 50%;
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 999px;
  background: #f8fafc;
  box-shadow: 0 0 16px rgba(248, 250, 252, 0.8);
  transform: translateY(-50%);
}

.loader-reference-text {
  color: #c7d2fe;
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: none;
}

.loader-reference-text::after {
  content: "";
  display: inline-block;
  width: 1.15rem;
  text-align: left;
  animation: loading-dots 1.4s steps(4, end) infinite;
}

.loader-status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  height: 2.25rem;
  padding: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: #c7d2fe;
  font-size: 0.82rem;
  font-weight: 700;
  backdrop-filter: blur(16px);
}

.loader-pulse-dot {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.8);
  animation: loader-pulse 1.1s ease-in-out infinite;
}

.loading-text-wrap {
  display: flex;
  flex-direction: column;
}

.loader-ring {
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
}

.loader-ring-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.loader-ring-track,
.loader-ring-progress {
  fill: none;
  stroke-width: 7;
}

.loader-ring-track {
  stroke: rgba(255, 255, 255, 0.08);
}

.loader-ring-progress {
  stroke: url("#loader-gradient");
  stroke: #a78bfa;
  stroke-linecap: round;
  stroke-dasharray: 302;
  transition: stroke-dashoffset 0.28s ease;
  filter: drop-shadow(0 0 10px rgba(167, 139, 250, 0.65));
}

.loader-ring-core {
  position: absolute;
  inset: 1.35rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.12rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(15, 17, 71, 0.72);
  box-shadow: inset 0 0 28px rgba(129, 140, 248, 0.18);
  backdrop-filter: blur(12px);
}

.loader-ring-core span {
  font-size: 1.45rem;
  font-weight: 900;
  color: white;
}

.loader-ring-core small {
  color: #a5b4fc;
  font-size: 0.75rem;
  font-weight: 800;
}

.loader-bar {
  width: min(18rem, 62vw);
  height: 0.2rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(226, 232, 240, 0.18);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.05),
    0 18px 42px rgba(15, 23, 42, 0.2);
}

.reference-loader-bar {
  width: min(15.5rem, 60vw);
  height: 0.18rem;
  background: rgba(199, 210, 254, 0.16);
}

.loader-bar div {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #f8fafc 0%, #c7d2fe 42%, #8b5cf6 72%, #22c55e 100%);
  box-shadow: 0 0 18px rgba(167, 139, 250, 0.48);
  transition: width 1.08s cubic-bezier(.22, 1, .36, 1);
}

.preloader.is-opening {
  background:
    radial-gradient(circle at 50% 45%, rgba(167, 139, 250, 0.14), transparent 46%),
    rgba(8, 11, 51, 0);
}

.preloader.is-opening::before,
.preloader.is-opening::after {
  opacity: 0;
  animation: none;
}

.preloader.is-opening .preloader-grid,
.preloader.is-opening .preloader-glow,
.preloader.is-opening .preloader-orbit {
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.42s ease, transform 0.68s ease;
}

.preloader.is-opening .brand-loader {
  animation: logo-soft-release 0.72s cubic-bezier(.22, 1, .36, 1) forwards;
}

.loader-leave-active {
  transition: opacity 0.52s ease, background 0.52s ease;
}

.loader-leave-active::before,
.loader-leave-active::after {
  opacity: 0;
  animation: none;
}

.loader-leave-active::before {
  animation: none;
}

.loader-leave-active::after {
  animation: none;
}

.loader-leave-active .preloader-grid,
.loader-leave-active .preloader-glow,
.loader-leave-active .preloader-orbit,
.loader-leave-active .relative.z-10 {
  transition: opacity 0.28s ease, transform 0.42s ease;
}

.loader-leave-to .preloader-grid,
.loader-leave-to .preloader-glow,
.loader-leave-to .preloader-orbit,
.loader-leave-to .relative.z-10 {
  opacity: 0;
  transform: scale(0.94);
}

.loader-leave-to {
  background: transparent;
  opacity: 0;
}

@keyframes loader-logo-arrive {
  0% {
    opacity: 0;
    transform: translateY(0.55rem) scale(0.94);
    filter: blur(6px) drop-shadow(0 18px 34px rgba(0, 0, 0, 0.24));
  }
  72% {
    opacity: 1;
    transform: translateY(-0.08rem) scale(1.02);
    filter: blur(0) drop-shadow(0 18px 34px rgba(0, 0, 0, 0.26));
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0) drop-shadow(0 18px 34px rgba(0, 0, 0, 0.26));
  }
}

@keyframes loader-logo-aura {
  0%, 100% {
    opacity: 0.46;
    transform: scale(0.92);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.08);
  }
}

@keyframes logo-orbit-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes magnetic-gather {
  0% {
    opacity: 0;
    transform: translate3d(var(--x), var(--y), 0) scale(0.55);
  }
  36% {
    opacity: 0.92;
    transform: translate3d(var(--near-x), var(--near-y), 0) scale(1.05);
  }
  64% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(0.78);
  }
  100% {
    opacity: 0.78;
    transform: translate3d(var(--near-x), var(--near-y), 0) scale(0.9);
  }
}

@keyframes magnetic-release {
  0% {
    opacity: 0.96;
    transform: translate3d(var(--near-x), var(--near-y), 0) scale(0.9);
  }
  62% {
    opacity: 0.78;
    transform: translate3d(var(--mid-x), var(--mid-y), 0) scale(1.12);
  }
  100% {
    opacity: 0;
    transform: translate3d(var(--far-x), var(--far-y), 0) scale(0.55);
  }
}

@keyframes logo-soft-release {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  42% {
    opacity: 1;
    transform: translateY(-0.72rem) scale(0.9);
  }
  100% {
    opacity: 0;
    transform: translateY(-1.35rem) scale(0.76);
  }
}

@keyframes loader-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes loader-grid-drift {
  to {
    background-position: 42px 42px;
  }
}

@keyframes loader-float {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(1rem, -0.75rem, 0) scale(1.08);
  }
}

@keyframes loader-pulse {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes curtain-left-open {
  0% {
    transform: translateX(0) scaleX(1);
  }
  12% {
    transform: translateX(0) scaleX(1.025);
  }
  68% {
    transform: translateX(-82%) scaleX(1.08);
  }
  84% {
    transform: translateX(-103%) scaleX(0.96);
  }
  100% {
    transform: translateX(-115%) scaleX(1);
  }
}

@keyframes curtain-right-open {
  0% {
    transform: translateX(0) scaleX(1);
  }
  12% {
    transform: translateX(0) scaleX(1.025);
  }
  68% {
    transform: translateX(82%) scaleX(1.08);
  }
  84% {
    transform: translateX(103%) scaleX(0.96);
  }
  100% {
    transform: translateX(115%) scaleX(1);
  }
}
</style>
