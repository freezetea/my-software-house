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
        <div class="preloader-glow preloader-glow-two"></div>

        <div class="preloader-orbit" aria-hidden="true">
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
          <div class="brand-loader mb-4" aria-label="KODAKODE">
            <span
              v-for="(letter, i) in brandLetters"
              :key="`${letter}-${i}`"
              :style="{ animationDelay: `${i * 0.08}s` }"
            >
              {{ letter }}
            </span>
          </div>

          <div class="loader-reference-text mb-7">
            Loading
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

          <div class="loader-bar reference-loader-bar">
            <div :style="{ width: `${loadingProgress}%` }"></div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- READING PROGRESS -->
    <div class="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-white/10">
      <div class="h-full bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 transition-all duration-100" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <!-- NAVBAR -->
    <nav class="fixed top-2 left-0 right-0 z-[100] px-4 md:px-6">
      <div class="max-w-6xl mx-auto flex items-center justify-between py-3 px-5 md:px-7 rounded-2xl bg-[#0f1147]/85 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/20">

        <NuxtLink to="/">
          <img
            src="https://kodakode.com/wp-content/uploads/2023/02/kodakode-logo-biru-teks-putih-300x106.png"
            alt="kodakode logo"
            class="h-8 w-auto"
          />
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

        <!-- hamburger -->
        <button class="md:hidden text-white p-2" @click="menuOpen = !menuOpen">
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all origin-center" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-5 h-0.5 bg-white mb-1.5 transition-all" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-5 h-0.5 bg-white transition-all origin-center" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>

      <!-- Mobile menu -->
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
              class="inline-flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm group">
              <svg viewBox="0 0 24 24" class="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="#25d366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <span class="text-slate-500 text-xs">🕐 Monday–Friday, 10am–5pm WIB</span>
          </div>

          <!-- Social icons -->
          <div class="flex gap-2">
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
const loadingTextIdx = ref(0)
const curtainOpening = ref(false)
const brandLetters = 'KODAKODE'.split('')
const loadingTexts = ['Loading']
const magneticDots = [
  { x: -44, y: -22, delay: 0.02, size: 5, hue: '#818cf8' },
  { x: -32, y: 18, delay: 0.1, size: 4, hue: '#c4b5fd' },
  { x: -14, y: 28, delay: 0.06, size: 4, hue: '#a78bfa' },
  { x: -6, y: -18, delay: 0.22, size: 5, hue: '#93c5fd' },
  { x: 8, y: 22, delay: 0.12, size: 6, hue: '#818cf8' },
  { x: 16, y: -26, delay: 0.28, size: 4, hue: '#c4b5fd' },
  { x: 34, y: -18, delay: 0.16, size: 6, hue: '#a78bfa' },
  { x: 44, y: 24, delay: 0.24, size: 4, hue: '#93c5fd' },
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
const scrollProgress = ref(0)

const footerServices = [
  'Website Development',
  'Mobile App Solutions',
  'UX/UI Design',
  'IT Consulting',
  'SEO Optimization',
]

function onScroll() {
  const el = document.documentElement
  const scrolled = el.scrollTop || document.body.scrollTop
  const total = el.scrollHeight - el.clientHeight
  scrollProgress.value = total > 0 ? Math.round((scrolled / total) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)

  const duration = 2200
  const start = performance.now()

  const textTimer = setInterval(() => {
    if (loadingTextIdx.value < loadingTexts.length - 1) {
      loadingTextIdx.value++
    }
  }, duration / loadingTexts.length)

  const progressTimer = setInterval(() => {
    const elapsed = performance.now() - start
    const pct = Math.min(Math.round((elapsed / duration) * 100), 100)
    loadingProgress.value = pct
    if (pct >= 100) {
      clearInterval(progressTimer)
      clearInterval(textTimer)
      loadingTextIdx.value = loadingTexts.length - 1
      setTimeout(() => {
        curtainOpening.value = true
        setTimeout(() => { loading.value = false }, 1420)
      }, 280)
    }
  }, 32)
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
html, body {
  background-color: #0f1147;
  margin: 0;
  padding: 0;
}

.preloader {
  background:
    radial-gradient(circle at 50% 45%, rgba(124, 58, 237, 0.28), transparent 32%),
    radial-gradient(circle at 22% 24%, rgba(79, 70, 229, 0.24), transparent 28%),
    linear-gradient(135deg, #080b33 0%, #0f1147 52%, #1b0f58 100%);
  color: white;
  backdrop-filter: blur(18px) saturate(1.08);
  transition: background 1s ease, backdrop-filter 1s ease, opacity 0.62s ease;
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
  opacity: 0.55;
  animation: loader-grid-drift 10s linear infinite;
}

.preloader-glow {
  position: absolute;
  width: 20rem;
  height: 20rem;
  border-radius: 999px;
  filter: blur(60px);
  pointer-events: none;
}

.preloader-glow-one {
  top: 14%;
  left: 16%;
  background: rgba(99, 102, 241, 0.28);
  animation: loader-float 5s ease-in-out infinite;
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
  animation: loader-orbit 10s linear infinite;
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
    0 0 14px color-mix(in srgb, var(--hue) 72%, transparent),
    0 0 32px color-mix(in srgb, var(--hue) 38%, transparent);
  opacity: 0.86;
  transform: translate(var(--x), var(--y)) scale(0.72);
  animation: magnetic-gather 2.2s cubic-bezier(.22, 1, .36, 1) infinite;
  animation-delay: var(--delay);
}

.preloader.is-opening .magnetic-field span {
  animation: magnetic-release 1.05s cubic-bezier(.16, 1, .3, 1) forwards;
  animation-delay: var(--delay);
}

.brand-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.48rem, 2.5vw, 1.35rem);
  width: min(31rem, 88vw);
  min-height: clamp(2.4rem, 8vw, 5rem);
  font-size: clamp(1.65rem, 6.2vw, 4rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
}

.brand-loader span {
  display: inline-block;
  background: linear-gradient(180deg, #ffffff 0%, #c7d2fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 18px 28px rgba(129, 140, 248, 0.22));
  animation: loader-letter 1.5s ease-in-out infinite;
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
  animation: loading-dots 1.2s steps(4, end) infinite;
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
  width: min(18rem, 68vw);
  height: 0.28rem;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
}

.reference-loader-bar {
  width: min(14rem, 58vw);
  height: 0.16rem;
  background: rgba(199, 210, 254, 0.14);
}

.loader-bar div {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #6366f1, #a78bfa, #22c55e);
  box-shadow: 0 0 18px rgba(167, 139, 250, 0.72);
  transition: width 0.28s ease;
}

.preloader.is-opening {
  background:
    radial-gradient(circle at 50% 45%, rgba(167, 139, 250, 0.14), transparent 46%),
    rgba(8, 11, 51, 0);
  backdrop-filter: blur(0) saturate(1);
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
  filter: blur(12px);
  transform: scale(1.08);
  transition: opacity 0.48s ease, transform 0.78s ease, filter 0.78s ease;
}

.preloader.is-opening .brand-loader {
  animation: logo-soft-release 1.12s cubic-bezier(.22, 1, .36, 1) forwards;
}

.preloader.is-opening .loader-reference-text,
.preloader.is-opening .loader-bar {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(0.8rem);
  transition: opacity 0.38s ease, transform 0.55s ease, filter 0.55s ease;
}

.loader-leave-active {
  transition: opacity 0.62s ease, background 0.62s ease, backdrop-filter 0.62s ease;
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
  transition: opacity 0.35s ease, transform 0.55s ease, filter 0.55s ease;
}

.loader-leave-to .preloader-grid,
.loader-leave-to .preloader-glow,
.loader-leave-to .preloader-orbit,
.loader-leave-to .relative.z-10 {
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.94);
}

.loader-leave-to {
  background: transparent;
  backdrop-filter: blur(0);
  opacity: 0;
}

@keyframes loader-letter {
  0%, 100% {
    opacity: 0.76;
    transform: translateY(0) scale(1);
  }
  45% {
    opacity: 1;
    transform: translateY(-0.32rem) scale(1.03);
    filter: drop-shadow(0 18px 34px rgba(167, 139, 250, 0.38));
  }
}

@keyframes loading-dots {
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75%, 100% {
    content: "...";
  }
}

@keyframes magnetic-gather {
  0% {
    opacity: 0;
    transform: translate(var(--x), var(--y)) scale(0.55);
  }
  36% {
    opacity: 0.92;
    transform: translate(var(--near-x), var(--near-y)) scale(1.05);
  }
  64% {
    opacity: 1;
    transform: translate(0, 0) scale(0.78);
  }
  100% {
    opacity: 0.78;
    transform: translate(var(--near-x), var(--near-y)) scale(0.9);
  }
}

@keyframes magnetic-release {
  0% {
    opacity: 0.96;
    transform: translate(var(--near-x), var(--near-y)) scale(0.9);
  }
  62% {
    opacity: 0.78;
    transform: translate(var(--mid-x), var(--mid-y)) scale(1.16);
  }
  100% {
    opacity: 0;
    transform: translate(var(--far-x), var(--far-y)) scale(0.55);
  }
}

@keyframes logo-soft-release {
  0% {
    opacity: 1;
    filter: blur(0) drop-shadow(0 18px 28px rgba(129, 140, 248, 0.22));
    transform: translateY(0) scale(1);
  }
  42% {
    opacity: 1;
    filter: blur(0) drop-shadow(0 22px 36px rgba(167, 139, 250, 0.34));
    transform: translateY(-0.72rem) scale(0.9);
  }
  100% {
    opacity: 0;
    filter: blur(12px) drop-shadow(0 26px 42px rgba(167, 139, 250, 0));
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
