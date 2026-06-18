<template>
  <div class="min-h-screen bg-zinc-950 px-6 py-24 text-white overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-5xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-widest text-violet-300 border border-violet-800 bg-violet-500/10 px-4 py-1 rounded-full">Our work</span>
        <h2 class="text-4xl md:text-5xl font-black text-white mt-6 mb-4 tracking-tight">Projects we're proud of</h2>
        <p class="text-zinc-400 max-w-md mx-auto">A selection of websites and apps we've built for our clients.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="work-card group bg-zinc-900/80 rounded-2xl overflow-hidden border border-zinc-800 hover:border-violet-500/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-950/40"
        >
          <div class="project-preview" :class="project.previewClass">
            <div class="preview-glow"></div>

            <div v-if="project.type === 'shop'" class="mock-browser shop-scene">
              <div class="mock-top"><span></span><span></span><span></span></div>
              <div class="shop-grid">
                <div class="product-card featured"></div>
                <div class="product-card"></div>
                <div class="product-card"></div>
              </div>
              <div class="floating-cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 6h15l-2 8H8L6 3H3" />
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                </svg>
              </div>
              <div class="price-pill">$29</div>
            </div>

            <div v-else-if="project.type === 'metrics'" class="mock-browser metrics-scene">
              <div class="mock-top"><span></span><span></span><span></span></div>
              <div class="metric-row">
                <span></span><span></span><span></span>
              </div>
              <svg class="chart-line" viewBox="0 0 220 90" fill="none">
                <path d="M8 72 C42 40 58 62 84 35 S132 16 154 34 S186 72 212 18" />
              </svg>
              <div class="bar-chart">
                <span style="--h:42%"></span>
                <span style="--h:68%"></span>
                <span style="--h:54%"></span>
                <span style="--h:82%"></span>
                <span style="--h:62%"></span>
              </div>
            </div>

            <div v-else-if="project.type === 'stay'" class="stay-scene">
              <div class="hotel-card">
                <div class="hotel-sun"></div>
                <div class="hotel-window"></div>
                <div class="hotel-window"></div>
                <div class="hotel-door"></div>
              </div>
              <div class="calendar-card">
                <div class="calendar-top"></div>
                <div class="calendar-days">
                  <span v-for="n in 12" :key="n" :class="{ active: n === 8 }"></span>
                </div>
              </div>
              <div class="booking-check">Booked</div>
            </div>

            <div v-else class="folio-scene">
              <div class="art-frame frame-one"></div>
              <div class="art-frame frame-two"></div>
              <div class="art-frame frame-three"></div>
              <svg class="brush" viewBox="0 0 80 80" fill="none">
                <path d="M53 10 70 27 34 63c-5 5-13 5-18 0s-5-13 0-18L53 10Z" fill="currentColor" opacity=".9"/>
                <path d="M18 62c-3 8-8 10-8 10s2-9 8-13" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
              </svg>
              <div class="color-dots"><span></span><span></span><span></span></div>
            </div>
          </div>

          <div class="p-6">
            <span class="text-xs uppercase tracking-widest" :class="project.accent">{{ project.category }}</span>
            <h3 class="text-white font-bold text-xl mt-1 mb-2">{{ project.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tag in project.tags" :key="tag" class="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: 'ShopFast',
    category: 'E-commerce',
    desc: 'A full-stack e-commerce platform built with Nuxt.js and Stripe payments.',
    tags: ['Nuxt.js', 'Stripe', 'Tailwind'],
    type: 'shop',
    previewClass: 'shop-preview',
    accent: 'text-violet-300',
  },
  {
    title: 'DashMetrics',
    category: 'SaaS',
    desc: 'An analytics dashboard with real-time charts and team collaboration.',
    tags: ['Vue 3', 'Supabase', 'Chart.js'],
    type: 'metrics',
    previewClass: 'metrics-preview',
    accent: 'text-teal-300',
  },
  {
    title: 'StayEasy',
    category: 'Booking',
    desc: 'A hotel booking platform with availability calendar and payments.',
    tags: ['Nuxt.js', 'Prisma', 'PostgreSQL'],
    type: 'stay',
    previewClass: 'stay-preview',
    accent: 'text-amber-300',
  },
  {
    title: 'ArtFolio',
    category: 'Portfolio',
    desc: 'A creative portfolio site with animations and a headless CMS.',
    tags: ['Nuxt.js', 'Sanity', 'GSAP'],
    type: 'folio',
    previewClass: 'folio-preview',
    accent: 'text-pink-300',
  },
]
</script>

<style scoped>
.work-card {
  will-change: transform;
}

.project-preview {
  position: relative;
  display: flex;
  height: 13.5rem;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  isolation: isolate;
}

.project-preview::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
  opacity: 0.55;
  animation: preview-grid 8s linear infinite;
}

.preview-glow {
  position: absolute;
  width: 14rem;
  height: 14rem;
  border-radius: 999px;
  filter: blur(42px);
  opacity: 0.7;
  animation: preview-float 5s ease-in-out infinite;
}

.shop-preview {
  background: linear-gradient(135deg, #2e1065, #111827);
}

.shop-preview .preview-glow {
  background: rgba(139, 92, 246, 0.55);
}

.metrics-preview {
  background: linear-gradient(135deg, #042f2e, #111827);
}

.metrics-preview .preview-glow {
  background: rgba(20, 184, 166, 0.45);
}

.stay-preview {
  background: linear-gradient(135deg, #451a03, #111827);
}

.stay-preview .preview-glow {
  background: rgba(245, 158, 11, 0.42);
}

.folio-preview {
  background: linear-gradient(135deg, #4a044e, #111827);
}

.folio-preview .preview-glow {
  background: rgba(236, 72, 153, 0.44);
}

.mock-browser {
  position: relative;
  z-index: 1;
  width: min(80%, 19rem);
  height: 9.5rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.78);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.mock-top {
  display: flex;
  gap: 0.35rem;
  height: 1.7rem;
  align-items: center;
  padding: 0 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mock-top span {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
}

.shop-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 0.6rem;
  padding: 0.8rem;
}

.product-card {
  min-height: 2.4rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.82), rgba(99, 102, 241, 0.36));
  animation: card-pop 2.4s ease-in-out infinite;
}

.product-card.featured {
  grid-row: span 2;
  min-height: 5.4rem;
  animation-delay: 0.2s;
}

.floating-cart {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  width: 2.8rem;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: white;
  color: #7c3aed;
  box-shadow: 0 14px 30px rgba(124, 58, 237, 0.45);
  animation: bob 2.2s ease-in-out infinite;
}

.floating-cart svg {
  width: 1.35rem;
}

.price-pill {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.18);
  border: 1px solid rgba(74, 222, 128, 0.45);
  color: #bbf7d0;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.35rem 0.7rem;
  animation: pulse-soft 1.8s ease-in-out infinite;
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.55rem;
  padding: 0.75rem 0.8rem 0;
}

.metric-row span {
  height: 1.55rem;
  border-radius: 0.55rem;
  background: rgba(45, 212, 191, 0.18);
  border: 1px solid rgba(94, 234, 212, 0.18);
}

.chart-line {
  position: absolute;
  left: 1.2rem;
  right: 1.2rem;
  bottom: 1rem;
  width: calc(100% - 2.4rem);
  height: 4.8rem;
}

.chart-line path {
  stroke: #5eead4;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 260;
  animation: draw-line 2.8s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.75));
}

.bar-chart {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  height: 4.4rem;
  align-items: end;
  gap: 0.35rem;
}

.bar-chart span {
  width: 0.5rem;
  height: var(--h);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  animation: bar-rise 1.9s ease-in-out infinite;
}

.stay-scene,
.folio-scene {
  position: relative;
  z-index: 1;
  width: min(82%, 19rem);
  height: 10rem;
}

.hotel-card,
.calendar-card,
.booking-check {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.76);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(12px);
}

.hotel-card {
  left: 0.5rem;
  top: 0.5rem;
  width: 9rem;
  height: 7rem;
  animation: bob 2.8s ease-in-out infinite;
}

.hotel-sun {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 999px;
  background: #fbbf24;
  box-shadow: 0 0 24px rgba(251, 191, 36, 0.75);
}

.hotel-window {
  position: absolute;
  top: 2.3rem;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.8);
}

.hotel-window:nth-child(2) {
  left: 1.2rem;
}

.hotel-window:nth-child(3) {
  left: 3.2rem;
}

.hotel-door {
  position: absolute;
  left: 1.4rem;
  bottom: 0;
  width: 2rem;
  height: 2.3rem;
  border-radius: 0.55rem 0.55rem 0 0;
  background: rgba(245, 158, 11, 0.8);
}

.calendar-card {
  right: 0.4rem;
  bottom: 0.2rem;
  width: 9rem;
  height: 6.6rem;
  padding: 0.75rem;
  animation: card-pop 2.6s ease-in-out infinite;
}

.calendar-top {
  height: 0.65rem;
  margin-bottom: 0.6rem;
  border-radius: 999px;
  background: rgba(251, 191, 36, 0.85);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.35rem;
}

.calendar-days span {
  aspect-ratio: 1;
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.16);
}

.calendar-days span.active {
  background: #22c55e;
  box-shadow: 0 0 18px rgba(34, 197, 94, 0.75);
  animation: pulse-soft 1.5s ease-in-out infinite;
}

.booking-check {
  left: 5.8rem;
  top: 1.2rem;
  color: #fef3c7;
  font-size: 0.72rem;
  font-weight: 900;
  padding: 0.42rem 0.7rem;
  animation: slide-pill 2.4s ease-in-out infinite;
}

.art-frame {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
}

.frame-one {
  left: 0.8rem;
  top: 1rem;
  width: 8rem;
  height: 6rem;
  background: linear-gradient(135deg, #f0abfc, #7c3aed);
  animation: frame-tilt 3s ease-in-out infinite;
}

.frame-two {
  right: 1rem;
  top: 0.6rem;
  width: 7rem;
  height: 8.2rem;
  background: linear-gradient(135deg, #fb7185, #db2777);
  animation: frame-tilt 3.4s ease-in-out infinite reverse;
}

.frame-three {
  left: 5rem;
  bottom: 0.2rem;
  width: 7rem;
  height: 4.6rem;
  background: linear-gradient(135deg, #38bdf8, #a78bfa);
  animation: bob 2.7s ease-in-out infinite;
}

.brush {
  position: absolute;
  right: 3.5rem;
  bottom: 0.55rem;
  width: 4rem;
  color: white;
  filter: drop-shadow(0 12px 22px rgba(236, 72, 153, 0.45));
  animation: brush-paint 2.8s ease-in-out infinite;
}

.color-dots {
  position: absolute;
  left: 1rem;
  bottom: 0.8rem;
  display: flex;
  gap: 0.4rem;
}

.color-dots span {
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 999px;
  background: #f472b6;
  animation: pulse-soft 1.5s ease-in-out infinite;
}

.color-dots span:nth-child(2) {
  background: #38bdf8;
  animation-delay: 0.2s;
}

.color-dots span:nth-child(3) {
  background: #fbbf24;
  animation-delay: 0.4s;
}

@keyframes preview-grid {
  to { background-position: 24px 24px; }
}

@keyframes preview-float {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(1rem, -0.7rem, 0) scale(1.08); }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-0.5rem); }
}

@keyframes card-pop {
  0%, 100% { transform: scale(1); opacity: 0.82; }
  50% { transform: scale(1.04); opacity: 1; }
}

@keyframes pulse-soft {
  0%, 100% { transform: scale(1); opacity: 0.72; }
  50% { transform: scale(1.08); opacity: 1; }
}

@keyframes draw-line {
  0% { stroke-dashoffset: 260; }
  45%, 100% { stroke-dashoffset: 0; }
}

@keyframes bar-rise {
  0%, 100% { transform: scaleY(0.72); }
  50% { transform: scaleY(1); }
}

@keyframes slide-pill {
  0%, 100% { transform: translateX(0); opacity: 0.75; }
  50% { transform: translateX(0.6rem); opacity: 1; }
}

@keyframes frame-tilt {
  0%, 100% { transform: rotate(-3deg) translateY(0); }
  50% { transform: rotate(2deg) translateY(-0.45rem); }
}

@keyframes brush-paint {
  0%, 100% { transform: rotate(-12deg) translate(0, 0); }
  50% { transform: rotate(8deg) translate(-0.5rem, -0.35rem); }
}
</style>
