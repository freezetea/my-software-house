<template>
  <div class="text-white overflow-x-hidden">

    <!-- HERO -->
    <section
      class="hero-space-section relative min-h-screen flex items-center px-4 md:px-6 py-28 overflow-hidden"
    >
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 right-10 w-60 h-60 bg-indigo-500/14 rounded-full blur-[48px]"></div>
        <div class="absolute bottom-20 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-[56px]"></div>
        <div class="hero-sparkle-field">
          <span
            v-for="sparkle in heroSparkles"
            :key="sparkle.id"
            class="hero-sparkle"
            :style="{
              left: sparkle.left,
              top: sparkle.top,
              width: sparkle.size,
              height: sparkle.size,
              '--sparkle-delay': sparkle.delay,
              '--sparkle-duration': sparkle.duration,
              '--sparkle-drift': sparkle.drift,
              '--sparkle-opacity': sparkle.opacity,
            }"
          ></span>
        </div>
      </div>
      <svg class="hero-orbit-star star-one" width="40" height="40" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#818cf8"/></svg>
      <svg class="hero-orbit-star star-two" width="28" height="28" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#a78bfa"/></svg>
      <svg class="hero-orbit-star star-three" width="18" height="18" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#c4b5fd"/></svg>

      <div class="max-w-6xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-4 py-2 rounded-full mb-8">
            <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
            Open for new projects · Indonesia & Worldwide
          </div>
          <h1 class="text-4xl md:text-[3.5rem] font-black leading-[1.1] mb-6 min-h-[120px] md:min-h-[160px] tracking-tight">
            <span v-html="typedText"></span><span class="text-indigo-400 animate-pulse">|</span>
          </h1>
          <p class="text-slate-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            Our focus is not to sell you our services but to bring you solutions and innovations that will make your business profitable.
          </p>
          <div class="flex flex-wrap gap-3 mb-10">
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="group bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 inline-flex items-center gap-2">
              Let's get started <span class="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <NuxtLink to="/work" class="border border-white/20 hover:border-indigo-400/60 bg-white/5 hover:bg-indigo-600/10 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2">
              View our work
            </NuxtLink>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in techs" :key="tech" class="tech-badge text-xs px-3 py-1.5 rounded-lg transition-all cursor-default">{{ tech }}</span>
          </div>
        </div>

        <!-- hero right — Lottie + stats -->
        <div class="flex flex-col gap-4 mt-8 md:mt-0">
          <div class="relative bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 rounded-3xl p-6 overflow-hidden flex items-center justify-center" style="min-height:260px">
            <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-500/15 rounded-full blur-xl pointer-events-none"></div>
            <div id="lottie-hero" style="width:100%;max-width:260px;height:240px"></div>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div v-for="stat in stats" :key="stat.label" class="bg-white/5 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-4 text-center transition-all hover:-translate-y-0.5">
              <div class="text-xl font-black text-indigo-300 tabular-nums">
                {{ stat.display }}<span class="text-indigo-500 text-sm">{{ stat.suffix }}</span>
              </div>
              <div class="text-slate-500 text-xs mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS — WHITE -->
    <section class="py-20 px-4 md:px-6 bg-white relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-72 h-72 bg-indigo-50 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-3">Global Partners</span>
          <h2 class="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">World Wide Partners</h2>
          <p class="text-gray-500 text-sm mt-2">Trusted by businesses across Indonesia and beyond</p>
        </div>
        <div class="partner-slider grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <a
            v-for="partner in partners"
            :key="partner.name"
            :href="partner.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-center p-7 md:p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
               class="max-h-16 md:max-h-[4.5rem] w-auto object-contain transition-all duration-300"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- ABOUT — WHITE -->
    <section id="about" class="py-20 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"></div>
      <div class="absolute top-10 right-0 w-64 h-64 bg-indigo-50 rounded-full -translate-x-1/2 pointer-events-none"></div>
      <div class="absolute bottom-10 left-0 w-48 h-48 bg-violet-50 rounded-full translate-x-1/4 pointer-events-none"></div>
      <div class="absolute right-8 top-16 opacity-20 pointer-events-none grid grid-cols-6 gap-3">
        <div v-for="n in 36" :key="n" class="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        <div class="relative">
          <div class="relative bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-8 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-200/30 rounded-full blur-xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-violet-200/35 rounded-full blur-xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            <div class="about-company-visual relative z-10 w-full h-72 md:h-80">
              <div class="about-orbit about-orbit-one"></div>
              <div class="about-orbit about-orbit-two"></div>
              <div class="about-node node-one"></div>
              <div class="about-node node-two"></div>
              <div class="about-node node-three"></div>

              <div class="about-laptop">
                <div class="about-browser-bar">
                  <span></span><span></span><span></span>
                </div>
                <div class="about-screen-grid">
                  <div class="about-sidebar"></div>
                  <div class="about-code-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="about-chart">
                    <i style="--h: 42%"></i>
                    <i style="--h: 72%"></i>
                    <i style="--h: 56%"></i>
                    <i style="--h: 86%"></i>
                  </div>
                </div>
              </div>

              <div class="about-code-card">
                <svg viewBox="0 0 80 56" fill="none" aria-hidden="true">
                  <path d="M26 17 16 28l10 11M54 17l10 11-10 11M45 14 35 42" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

              <div class="about-rocket">
                <svg viewBox="0 0 72 72" fill="none" aria-hidden="true">
                  <path d="M38 7c10 5 18 16 20 30L43 52 20 29C22 15 28 9 38 7Z" fill="currentColor"/>
                  <circle cx="39" cy="27" r="7" fill="white" opacity=".92"/>
                  <path d="M24 47c-7 2-11 7-13 14 7-2 12-6 14-13" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
            <svg viewBox="0 0 320 260" class="hidden w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="10" width="100" height="180" rx="14" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
              <rect x="30" y="28" width="80" height="140" rx="6" fill="white"/>
              <rect x="38" y="38" width="64" height="8" rx="4" fill="#7c3aed" opacity="0.8"/>
              <rect x="38" y="52" width="48" height="5" rx="2.5" fill="#a78bfa" opacity="0.5"/>
              <rect x="38" y="64" width="56" height="5" rx="2.5" fill="#818cf8" opacity="0.4"/>
              <rect x="38" y="80" width="64" height="40" rx="6" fill="#ede9fe"/>
              <text x="55" y="106" font-size="22" fill="#7c3aed">📱</text>
              <rect x="38" y="128" width="30" height="8" rx="4" fill="#6366f1"/>
              <rect x="74" y="128" width="28" height="8" rx="4" fill="#e0e7ff"/>
              <rect x="140" y="30" width="160" height="110" rx="8" fill="#ede9fe" stroke="#4f46e5" stroke-width="2"/>
              <rect x="150" y="40" width="140" height="88" rx="4" fill="white"/>
              <rect x="158" y="50" width="40" height="5" rx="2.5" fill="#6366f1" opacity="0.8"/>
              <rect x="158" y="60" width="70" height="5" rx="2.5" fill="#818cf8" opacity="0.4"/>
              <rect x="158" y="70" width="55" height="5" rx="2.5" fill="#a78bfa" opacity="0.5"/>
              <rect x="158" y="82" width="120" height="30" rx="6" fill="#ede9fe" stroke="#c4b5fd" stroke-width="1"/>
              <text x="195" y="103" font-size="18" fill="#6366f1">🌐</text>
              <rect x="158" y="118" width="40" height="6" rx="3" fill="#4f46e5"/>
              <rect x="208" y="142" width="4" height="20" rx="2" fill="#4f46e5"/>
              <rect x="188" y="162" width="44" height="5" rx="2.5" fill="#4f46e5" opacity="0.6"/>
              <rect x="100" y="80" width="55" height="26" rx="13" fill="#4f46e5"/>
              <text x="113" y="97" font-size="11" fill="white" font-weight="bold">Nuxt.js</text>
              <rect x="240" y="155" width="52" height="26" rx="13" fill="#7c3aed"/>
              <text x="248" y="172" font-size="11" fill="white" font-weight="bold">Vue 3</text>
              <rect x="25" y="205" width="60" height="26" rx="13" fill="#6366f1" opacity="0.15" stroke="#6366f1" stroke-width="1"/>
              <text x="33" y="222" font-size="11" fill="#4f46e5" font-weight="bold">Laravel</text>
              <circle cx="70" cy="93" r="6" fill="#22c55e" opacity="0.8">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div class="absolute -bottom-4 -right-4 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-4 shadow-xl shadow-indigo-200">
            <div class="text-2xl font-black text-white">40+</div>
            <div class="text-indigo-200 text-xs">Happy clients</div>
          </div>
        </div>

        <div>
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full mb-5">About Company</div>
          <h2 class="text-3xl md:text-4xl font-black leading-tight mb-5 tracking-tight text-gray-900">
            Web company &<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">software house</span>
          </h2>
          <p class="text-gray-500 leading-relaxed mb-4 text-sm md:text-base">We are kodakode, a web company and software house specializing in custom software development, website development, and mobile apps tailored to business needs.</p>
          <p class="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">Our technology is web-based and cloud computing system — built to scale.</p>
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div
              v-for="card in aboutCards"
              :key="card.title"
              class="group flex h-full min-h-[116px] items-start gap-3 bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200 rounded-2xl p-4 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:shadow-indigo-100/70"
            >
              <div
                class="about-card-icon"
                :style="{ '--icon-from': card.gradientFrom, '--icon-to': card.gradientTo, '--icon-ring': card.ringColor }"
              >
                <svg class="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="card.iconSvg"></svg>
              </div>
              <div>
                <h4 class="text-gray-800 font-bold text-sm mb-0.5">{{ card.title }}</h4>
                <p class="text-gray-500 text-xs leading-relaxed">{{ card.desc }}</p>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4 flex-wrap">
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-7 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold transition-all inline-flex items-center gap-2.5 text-base hover:shadow-lg hover:shadow-indigo-300">
              Learn more →
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="rounded-xl border border-green-200 bg-green-50 px-6 md:px-7 py-3.5 md:py-4 text-green-700 text-base md:text-lg font-semibold hover:bg-green-100 transition-colors inline-flex items-center gap-2.5">
              💬 <span class="text-indigo-600 font-semibold">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES — DARK -->
    <section id="services" class="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #0d1555 0%, #111747 100%)">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent pointer-events-none"></div>
      <div class="absolute top-20 right-20 w-56 h-56 bg-indigo-500/8 rounded-full blur-2xl pointer-events-none"></div>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-500/15 border border-blue-500/30 px-3 py-1.5 rounded-full mb-4">Latest Services</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-6">We Provide Best IT Services</h2>
          <div class="flex flex-wrap justify-center gap-2">
            <button v-for="cat in categories" :key="cat"
              :class="['px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all duration-200',
                activeCategory === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:border-indigo-500/40 hover:text-white']"
              @click="activeCategory = cat">{{ cat }}</button>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div v-for="(svc, i) in filteredServices" :key="svc.title"
            class="group relative flex h-full min-h-[260px] flex-col bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-default">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              :style="`background: linear-gradient(135deg, ${svc.color}12 0%, transparent 100%)`"></div>
            <div
              :class="['service-lottie-icon mb-5 relative z-10', `service-${svc.key}`]"
              :style="{ '--service-color': svc.color, '--service-delay': `${i * 0.08}s` }"
            >
              <span class="service-icon-orbit"></span>
              <span class="service-icon-spark spark-one"></span>
              <span class="service-icon-spark spark-two"></span>
              <svg
                v-if="svc.iconSvg"
                class="service-svg-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                v-html="svc.iconSvg"
              ></svg>
              <div v-else :id="`lottie-service-${svc.key}`" class="w-full h-full"></div>
            </div>
            <h3 class="text-white font-bold mb-2 relative z-10">{{ svc.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed relative z-10 mb-4">{{ svc.desc }}</p>
            <div class="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 flex items-center gap-1"
              :style="`color: ${svc.color}`">Learn more →</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS — WHITE -->
    <section class="py-20 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 opacity-30"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50 rounded-full pointer-events-none"></div>
      <div class="absolute top-8 left-8 opacity-20 pointer-events-none grid grid-cols-5 gap-3">
        <div v-for="n in 25" :key="n" class="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
      </div>
      <div class="max-w-5xl mx-auto relative z-10">
        <div class="text-center mb-14">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full mb-4">Working Process</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Industry Best Practices<br>to the Core</h2>
        </div>
        <div class="working-process-panel mb-12 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-6 md:p-10 overflow-hidden relative">
          <svg viewBox="0 0 700 120" class="process-zigzag-svg w-full" xmlns="http://www.w3.org/2000/svg">
            <polyline points="70,56 210,24 350,56 490,24 630,56" fill="none" stroke="#e0e7ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="8 8"/>
            <path class="process-zigzag-path" d="M70 56 L210 24 L350 56 L490 24 L630 56" fill="none" stroke="url(#processGradient)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" :stroke-dasharray="processStrokeDash"/>
            <defs>
              <linearGradient id="processGradient" x1="70" y1="40" x2="630" y2="40" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4f46e5"/>
                <stop offset="0.52" stop-color="#8b5cf6"/>
                <stop offset="1" stop-color="#22c55e"/>
              </linearGradient>
            </defs>
            <circle r="12" fill="#c4b5fd" opacity="0.24" class="process-travel-halo" :cx="processDot.x" :cy="processDot.y"/>
            <circle r="7" fill="#4f46e5" opacity="0.96" class="process-travel-dot" :cx="processDot.x" :cy="processDot.y"/>
            <circle r="3.5" fill="#22c55e" opacity="0.92" class="process-travel-trail" :cx="processTrail.x" :cy="processTrail.y"/>
            <g v-for="(step, i) in steps" :key="step.num">
              <circle class="process-step-node" :cx="processPoints[i].x" :cy="processPoints[i].y" r="28"
                :fill="i <= activeStep ? '#4f46e5' : '#ede9fe'"
                :stroke="i <= activeStep ? '#4f46e5' : '#c4b5fd'"
                stroke-width="2" style="cursor:pointer"
                @click="activeStep = i"/>
              <text :x="processPoints[i].x" :y="processPoints[i].y + 5" text-anchor="middle" font-size="12" font-weight="bold"
                :fill="i <= activeStep ? 'white' : '#6366f1'">{{ step.num }}</text>
              <text class="process-step-label" :x="processPoints[i].x" y="96" text-anchor="middle" font-size="10"
                :fill="i <= activeStep ? '#4f46e5' : '#9ca3af'" font-weight="600">{{ step.title }}</text>
            </g>
          </svg>
          <div class="mt-4 text-center">
            <div class="text-gray-800 font-bold mb-1">{{ steps[activeStep].title }}</div>
            <div class="text-gray-500 text-sm">{{ steps[activeStep].desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS — DEEP VIOLET -->
    <section class="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #1a0d5e 0%, #0f1147 60%, #0a0d3d 100%)">
      <div class="absolute top-0 right-0 w-72 h-72 bg-violet-600/12 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-52 h-52 bg-indigo-600/8 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute right-8 top-8 opacity-15 pointer-events-none grid grid-cols-5 gap-3">
        <div v-for="n in 25" :key="n" class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
      </div>
      <svg class="absolute top-12 left-12 opacity-30 animate-spin" style="animation-duration:22s" width="24" height="24" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#a78bfa"/></svg>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-violet-300 bg-violet-500/15 border border-violet-500/30 px-3 py-1.5 rounded-full mb-4">Our Testimonials</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight">
            Real Results From<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Growing Businesses</span>
          </h2>
          <p class="text-slate-400 text-sm mt-4 max-w-xl mx-auto">See how founders and teams use our websites, apps, and systems to sell faster, operate smoother, and look more credible online.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="t.name"
            :class="['testimonial-card group relative bg-white/5 border border-white/10 hover:border-violet-500/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 overflow-hidden',
              `testimonial-card-${i}`]">
            <div class="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div class="absolute top-4 right-6 text-6xl text-violet-500/15 font-serif leading-none">"</div>
            <div class="hidden items-center gap-1 mb-1 relative z-10">
              <span v-for="n in 5" :key="n" class="text-yellow-400 text-sm">★</span>
            </div>
            <div class="flex items-center justify-between gap-3 mb-4 relative z-10">
              <div class="flex items-center gap-1">
                <span v-for="n in 5" :key="n" class="text-yellow-400 text-sm">★</span>
              </div>
              <span class="text-[11px] font-semibold text-violet-200 bg-violet-500/15 border border-violet-400/20 px-2.5 py-1 rounded-full">{{ t.result }}</span>
            </div>
            <div class="text-white font-bold text-sm mb-3 relative z-10">{{ t.headline }}</div>
            <p class="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">"{{ t.text }}"</p>
            <div class="text-xs text-violet-200/90 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 mb-5 relative z-10">{{ t.cta }}</div>
            <div class="flex items-center gap-3 pt-4 border-t border-white/5 relative z-10">
              <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600/40 to-indigo-600/40 border border-violet-500/30 flex items-center justify-center text-violet-300 font-black text-base shrink-0">
                {{ t.name.charAt(0) }}
              </div>
              <div>
                <div class="text-white font-bold text-sm">{{ t.name }}</div>
                <div class="text-slate-500 text-xs">{{ t.role }}</div>
                <div class="text-slate-600 text-[11px] mt-0.5">{{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOG — WHITE -->
    <section class="py-20 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-indigo-50 rounded-full translate-x-1/4 pointer-events-none"></div>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full mb-4">Our Blog & News</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Latest Blog, News & Articles</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a v-for="post in blogPosts" :key="post.title" :href="post.url" target="_blank"
            class="group bg-white border border-gray-200 hover:border-indigo-300 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-100 block">
            <div class="relative h-48 overflow-hidden bg-gray-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                :style="{ objectPosition: post.imagePosition }"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-gray-950/10 to-transparent"></div>
              <div class="absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full font-medium bg-gray-950/45 backdrop-blur-sm border border-white/15">{{ post.category }}</div>
            </div>
            <div class="p-5">
              <div class="text-gray-400 text-xs mb-2">{{ post.date }}</div>
              <h3 class="text-gray-800 font-bold text-sm mb-2 group-hover:text-indigo-600 transition-colors leading-snug">{{ post.title }}</h3>
              <p class="text-gray-500 text-xs leading-relaxed mb-4">{{ post.excerpt }}</p>
              <div class="text-indigo-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read more →</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ — LIGHT LAVENDER -->
    <section class="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #f5f3ff 0%, #eef2ff 100%)">
      <div class="absolute top-8 right-8 opacity-20 pointer-events-none grid grid-cols-6 gap-3">
        <div v-for="n in 36" :key="n" class="w-1 h-1 rounded-full bg-indigo-400"></div>
      </div>
      <div class="max-w-2xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-white border border-indigo-200 px-3 py-1.5 rounded-full mb-4 shadow-sm">FAQ</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight text-gray-900">Common Questions</h2>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="(faq, i) in faqs" :key="i"
            :class="['border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm',
              activeFaq === i ? 'border-indigo-300 bg-white shadow-indigo-100 shadow-md' : 'border-gray-200 bg-white hover:border-indigo-200']">
            <button class="w-full text-left px-5 md:px-6 py-4 font-semibold flex justify-between items-center gap-4 text-sm md:text-base text-gray-800"
              @click="activeFaq = activeFaq === i ? null : i">
              {{ faq.q }}
              <span :class="['w-7 h-7 shrink-0 rounded-lg border flex items-center justify-center text-sm transition-all duration-300',
                activeFaq === i ? 'bg-indigo-600 border-indigo-500 text-white rotate-45' : 'bg-indigo-50 border-indigo-200 text-indigo-600']">+</span>
            </button>
            <div v-if="activeFaq === i" class="px-5 md:px-6 pb-5 text-gray-500 text-xs md:text-sm border-t border-gray-100 pt-4 leading-relaxed">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT — WHITE + PURPLE FORM -->
    <section class="py-20 md:py-28 px-4 md:px-6 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500"></div>
      <div class="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full mb-5">Need Any Consultations?</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight mb-4 text-gray-900">
            We're Ready to<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Grow Your Business</span>
          </h2>
          <p class="text-gray-500 text-sm leading-relaxed mb-8">Empower your business with innovative IT solutions. Let's turn your ideas into technology.</p>
          <div class="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-6 relative overflow-hidden mb-6">
            <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-200/24 rounded-full blur-xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div id="lottie-growth" class="relative z-10 w-full h-52"></div>
            <svg viewBox="0 0 280 160" class="hidden w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="30" width="160" height="110" rx="12" fill="#ede9fe" stroke="#6366f1" stroke-width="1.5"/>
              <path d="M20 42 L100 90 L180 42" stroke="#6366f1" stroke-width="2" fill="none"/>
              <path d="M20 140 L70 95" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
              <path d="M180 140 L130 95" stroke="#a78bfa" stroke-width="1.5" opacity="0.5"/>
              <rect x="200" y="20" width="60" height="100" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
              <rect x="208" y="32" width="44" height="70" rx="4" fill="white"/>
              <rect x="216" y="42" width="28" height="4" rx="2" fill="#7c3aed" opacity="0.8"/>
              <rect x="216" y="52" width="20" height="4" rx="2" fill="#a78bfa" opacity="0.5"/>
              <circle cx="230" cy="112" r="4" fill="#4f46e5"/>
              <circle cx="255" cy="25" r="12" fill="#ef4444"/>
              <text x="250" y="30" font-size="11" fill="white" font-weight="bold">1</text>
              <rect x="30" y="155" width="80" height="28" rx="10" fill="#4f46e5"/>
              <text x="44" y="173" font-size="11" fill="white" font-weight="bold">Hi there! 👋</text>
              <circle cx="100" cy="150" r="3" fill="#6366f1" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="112" cy="150" r="3" fill="#6366f1" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0;0.4" dur="1s" begin="0.3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="124" cy="150" r="3" fill="#6366f1" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0;0.3" dur="1s" begin="0.6s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div class="hidden flex-col gap-2">
            <a href="mailto:info@kodakode.com" class="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-sm">📧 info@kodakode.com</a>
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank" class="inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-green-700 hover:bg-green-100 transition-colors text-base font-semibold">💬 Chat on WhatsApp</a>
          </div>
        </div>

        <div class="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-7 md:p-8 shadow-2xl shadow-indigo-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          <h3 class="text-xl font-black mb-6 text-white relative z-10">Send us a message</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 relative z-10">
            <input v-model="form.name" type="text" placeholder="Your name"
              class="bg-white/10 border border-white/20 focus:border-white/50 text-white rounded-xl px-4 py-3 outline-none transition-colors text-sm w-full placeholder-white/40"/>
            <input v-model="form.email" type="email" placeholder="Email address"
              class="bg-white/10 border border-white/20 focus:border-white/50 text-white rounded-xl px-4 py-3 outline-none transition-colors text-sm w-full placeholder-white/40"/>
          </div>
          <textarea v-model="form.message" rows="4" placeholder="Tell us about your project..." maxlength="300"
            class="w-full bg-white/10 border border-white/20 focus:border-white/50 text-white rounded-xl px-4 py-3 outline-none transition-colors resize-none mb-1 font-sans text-sm placeholder-white/40 relative z-10"></textarea>
          <div class="text-right text-xs text-white/40 mb-4 relative z-10">{{ form.message.length }}/300</div>
          <div class="mb-5 relative z-10">
            
          </div>
          <button
            :class="['w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 relative z-10',
              formSent ? 'bg-green-400/20 border border-green-400/40 text-green-300' : 'bg-white text-indigo-700 hover:bg-indigo-50 hover:shadow-xl']"
            @click="submitForm">
            <span v-if="!formSent && !formSending">Get Free Quote →</span>
            <span v-if="formSending" class="flex items-center gap-2">
              <span class="w-4 h-4 border-2 border-indigo-300/30 border-t-indigo-600 rounded-full animate-spin"></span> Sending...
            </span>
            <span v-if="formSent">✓ Message sent! We'll reply within 24h.</span>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-24 px-4 md:px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #2d1b69 0%, #1a1060 50%, #0f1147 100%)">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[220px] bg-indigo-600/14 rounded-full blur-2xl"></div>
        <div class="absolute bottom-0 right-0 w-52 h-52 bg-violet-500/12 rounded-full blur-xl"></div>
      </div>
      <svg class="absolute top-8 left-16 opacity-50 animate-spin" style="animation-duration:20s" width="28" height="28" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#818cf8"/></svg>
      <svg class="absolute bottom-8 right-16 opacity-40 animate-spin" style="animation-duration:28s;animation-direction:reverse" width="20" height="20" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#c4b5fd"/></svg>
      <div class="relative z-10 max-w-2xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 text-xs font-medium text-violet-300 bg-violet-500/15 border border-violet-500/30 px-3 py-1.5 rounded-full mb-6">Let's Work Together</div>
        <h2 class="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
          We're Ready to Growth<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">Your IT Business</span>
        </h2>
        <p class="text-slate-400 mb-10 max-w-md mx-auto text-sm md:text-base leading-relaxed">Empower your business with innovative IT solutions. Let's turn your ideas into technology.</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
            class="group bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 inline-flex items-center gap-2 hover:-translate-y-1">
            Get Free Quote <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
            class="hidden border border-white/20 bg-white/5 hover:border-violet-500/50 hover:bg-violet-600/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 items-center gap-2 hover:-translate-y-1">
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
@media (max-width: 639px) {
  .partner-slider {
    display: flex;
    gap: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    overflow-x: auto;
    padding: 0 1rem 0.75rem;
    scroll-padding-left: 1rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .partner-slider > a {
    flex: 0 0 72%;
    min-height: 7rem;
    scroll-snap-align: start;
  }
}

.about-card-icon {
  position: relative;
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.9rem;
  background: linear-gradient(135deg, var(--icon-from), var(--icon-to));
  box-shadow: 0 12px 24px var(--icon-ring);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card-icon::after {
  content: "";
  position: absolute;
  inset: 0.45rem 0.45rem auto auto;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
}

.group:hover .about-card-icon {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 16px 30px var(--icon-ring);
}

.service-lottie-icon {
  position: relative;
  display: flex;
  width: 4.25rem;
  height: 4.25rem;
  align-items: center;
  justify-content: center;
  border: 1px solid color-mix(in srgb, var(--service-color) 45%, transparent);
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 28% 22%, rgba(255, 255, 255, 0.18), transparent 34%),
    color-mix(in srgb, var(--service-color) 18%, transparent);
  box-shadow: 0 10px 22px color-mix(in srgb, var(--service-color) 14%, transparent);
  overflow: hidden;
  isolation: isolate;
  animation: none;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-lottie-icon::before {
  content: "";
  position: absolute;
  inset: -45%;
  z-index: 0;
  background: conic-gradient(from 0deg, transparent, color-mix(in srgb, var(--service-color) 55%, white 20%), transparent 35%);
  opacity: 0.35;
  animation: none;
}

.service-lottie-icon::after {
  content: "";
  position: absolute;
  inset: 0.45rem;
  z-index: 0;
  border-radius: 1rem;
  background: radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--service-color) 28%, transparent), transparent 68%);
  opacity: 0.65;
  animation: none;
}

.service-lottie-icon > div {
  position: relative;
  z-index: 2;
  transform: scale(1.38);
  transition: transform 0.3s ease;
}

.service-svg-icon {
  position: relative;
  z-index: 2;
  width: 2.45rem;
  height: 2.45rem;
  color: white;
  animation: none;
  transition: transform 0.3s ease;
}

.service-svg-icon :deep(path),
.service-svg-icon :deep(circle),
.service-svg-icon :deep(rect) {
  vector-effect: non-scaling-stroke;
}

.service-icon-orbit {
  position: absolute;
  z-index: 1;
  width: 3.35rem;
  height: 3.35rem;
  border: 1px solid color-mix(in srgb, var(--service-color) 48%, white 12%);
  border-radius: 999px;
  opacity: 0.38;
  animation: none;
}

.service-icon-orbit::after {
  content: "";
  position: absolute;
  top: -0.18rem;
  left: 50%;
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 999px;
  background: white;
  box-shadow: 0 0 8px color-mix(in srgb, var(--service-color) 55%, white 20%);
}

.service-icon-spark {
  position: absolute;
  z-index: 3;
  width: 0.38rem;
  height: 0.38rem;
  border-radius: 999px;
  background: white;
  box-shadow: 0 0 8px color-mix(in srgb, var(--service-color) 55%, white 25%);
  opacity: 0.6;
  animation: none;
}

.spark-one {
  top: 0.9rem;
  right: 0.85rem;
}

.spark-two {
  left: 0.85rem;
  bottom: 0.95rem;
  animation-delay: 0.45s;
}

.service-digital-consulting .service-svg-icon {
  animation-name: service-compass-swing;
}

.service-website-development .service-svg-icon,
.service-custom-software .service-svg-icon {
  animation-name: service-code-pop;
}

.service-mobile-app-solutions .service-svg-icon {
  animation-name: service-phone-bob;
}

.service-ux-ui-design .service-svg-icon {
  animation-name: service-cursor-draw;
}

.service-seo-optimization .service-svg-icon {
  animation-name: service-search-zoom;
}

.service-cloud-solutions .service-svg-icon {
  animation-name: service-cloud-drift;
}

.service-maintenance .service-svg-icon {
  animation-name: service-wrench-turn;
}

.service-website-development { animation-delay: 0.1s; }
.service-mobile-app-solutions { animation-delay: 0.2s; }
.service-ux-ui-design { animation-delay: 0.3s; }
.service-seo-optimization { animation-delay: 0.4s; }
.service-custom-software { animation-delay: 0.5s; }
.service-cloud-solutions { animation-delay: 0.6s; }
.service-maintenance { animation-delay: 0.7s; }

.group:hover .service-lottie-icon {
  border-color: color-mix(in srgb, var(--service-color) 75%, white 12%);
  box-shadow: 0 18px 42px color-mix(in srgb, var(--service-color) 34%, transparent);
  transform: translateY(-3px) scale(1.04);
}

.group:hover .service-lottie-icon > div {
  transform: scale(1.52);
}

.group:hover .service-svg-icon {
  filter: drop-shadow(0 10px 16px color-mix(in srgb, var(--service-color) 45%, transparent));
  transform: translateY(-1px) rotate(-3deg) scale(1.08);
}

@keyframes service-tile-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-0.35rem) rotate(1.5deg); }
}

@keyframes service-shine-spin {
  to { transform: rotate(360deg); }
}

@keyframes service-core-pulse {
  0%, 100% { opacity: 0.42; transform: scale(0.86); }
  50% { opacity: 0.86; transform: scale(1.08); }
}

@keyframes service-icon-breathe {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-0.12rem) scale(1.08); }
}

@keyframes service-orbit {
  to { transform: rotate(360deg); }
}

@keyframes service-spark {
  0%, 100% { opacity: 0.32; transform: scale(0.65); }
  50% { opacity: 1; transform: scale(1.25); }
}

@keyframes service-compass-swing {
  0%, 100% { transform: rotate(-8deg) scale(1); }
  50% { transform: rotate(10deg) scale(1.08); }
}

@keyframes service-code-pop {
  0%, 100% { transform: translateY(0) scale(1); }
  35% { transform: translateY(-0.18rem) scale(1.12); }
  70% { transform: translateY(0.08rem) scale(0.98); }
}

@keyframes service-phone-bob {
  0%, 100% { transform: translateY(0) rotate(-2deg) scale(1); }
  50% { transform: translateY(-0.3rem) rotate(3deg) scale(1.08); }
}

@keyframes service-cursor-draw {
  0%, 100% { transform: translate(-0.08rem, 0.08rem) rotate(-5deg) scale(1); }
  50% { transform: translate(0.16rem, -0.16rem) rotate(4deg) scale(1.1); }
}

@keyframes service-search-zoom {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.14) rotate(-4deg); }
}

@keyframes service-cloud-drift {
  0%, 100% { transform: translateX(-0.12rem) scale(1); }
  50% { transform: translateX(0.22rem) scale(1.08); }
}

@keyframes service-wrench-turn {
  0%, 100% { transform: rotate(-8deg) scale(1); }
  50% { transform: rotate(12deg) scale(1.08); }
}

.about-company-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
}

.about-orbit {
  position: absolute;
  border: 1px solid rgba(99, 102, 241, 0.22);
  border-radius: 999px;
  pointer-events: none;
}

.about-orbit-one {
  width: 82%;
  height: 58%;
  animation: about-spin 14s linear infinite;
}

.about-orbit-two {
  width: 58%;
  height: 78%;
  border-color: rgba(167, 139, 250, 0.22);
  animation: about-spin 18s linear infinite reverse;
}

.about-node {
  position: absolute;
  z-index: 3;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 22px rgba(34, 197, 94, 0.65);
  animation: about-pulse 1.8s ease-in-out infinite;
}

.node-one { top: 18%; left: 24%; }
.node-two { right: 18%; top: 32%; background: #818cf8; box-shadow: 0 0 22px rgba(129, 140, 248, 0.65); animation-delay: 0.25s; }
.node-three { left: 30%; bottom: 16%; background: #a78bfa; box-shadow: 0 0 22px rgba(167, 139, 250, 0.65); animation-delay: 0.5s; }

.about-laptop {
  position: relative;
  z-index: 2;
  width: min(86%, 24rem);
  height: 13.5rem;
  overflow: hidden;
  border: 1px solid rgba(99, 102, 241, 0.28);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 18px 44px rgba(79, 70, 229, 0.16);
  animation: about-float 4.5s ease-in-out infinite;
}

.about-browser-bar {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  height: 2rem;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(99, 102, 241, 0.14);
  background: rgba(237, 233, 254, 0.8);
}

.about-browser-bar span {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #818cf8;
}

.about-screen-grid {
  display: grid;
  grid-template-columns: 4.5rem 1fr;
  grid-template-rows: 1fr 3rem;
  gap: 0.85rem;
  height: calc(100% - 2rem);
  padding: 1rem;
}

.about-sidebar,
.about-code-lines,
.about-chart {
  border-radius: 1rem;
  background: rgba(99, 102, 241, 0.1);
}

.about-sidebar {
  grid-row: span 2;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.18), rgba(167, 139, 250, 0.12));
}

.about-code-lines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.55rem;
  padding: 1rem;
}

.about-code-lines span {
  height: 0.55rem;
  border-radius: 999px;
  background: linear-gradient(90deg, #6366f1, #a78bfa);
  transform-origin: left;
  animation: about-line 2.4s ease-in-out infinite;
}

.about-code-lines span:nth-child(2) { width: 76%; animation-delay: 0.15s; }
.about-code-lines span:nth-child(3) { width: 58%; animation-delay: 0.3s; }
.about-code-lines span:nth-child(4) { width: 88%; animation-delay: 0.45s; }

.about-chart {
  display: flex;
  align-items: end;
  gap: 0.55rem;
  padding: 0.65rem 1rem;
}

.about-chart i {
  width: 0.7rem;
  height: var(--h);
  border-radius: 999px;
  background: linear-gradient(180deg, #22c55e, #6366f1);
  animation: about-bar 1.8s ease-in-out infinite;
}

.about-chart i:nth-child(2) { animation-delay: 0.15s; }
.about-chart i:nth-child(3) { animation-delay: 0.3s; }
.about-chart i:nth-child(4) { animation-delay: 0.45s; }

.about-code-card {
  position: absolute;
  z-index: 4;
  right: 4%;
  top: 14%;
  width: 5.25rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.1rem;
  color: white;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  box-shadow: 0 18px 36px rgba(79, 70, 229, 0.3);
  animation: about-card 3.2s ease-in-out infinite;
}

.about-code-card svg {
  width: 3.3rem;
}

.about-rocket {
  position: absolute;
  z-index: 4;
  left: 5%;
  bottom: 11%;
  width: 4.5rem;
  color: #6366f1;
  filter: drop-shadow(0 10px 16px rgba(99, 102, 241, 0.24));
  animation: about-rocket 3.8s ease-in-out infinite;
}

@keyframes about-spin {
  to { transform: rotate(360deg); }
}

@keyframes about-float {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-0.75rem) rotate(1deg); }
}

@keyframes about-pulse {
  0%, 100% { opacity: 0.48; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.16); }
}

@keyframes about-line {
  0%, 100% { transform: scaleX(0.58); opacity: 0.5; }
  50% { transform: scaleX(1); opacity: 1; }
}

@keyframes about-bar {
  0%, 100% { transform: scaleY(0.65); opacity: 0.58; }
  50% { transform: scaleY(1); opacity: 1; }
}

@keyframes about-card {
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-0.65rem) rotate(-4deg); }
}

@keyframes about-rocket {
  0%, 100% { transform: translate(0, 0) rotate(-10deg); }
  50% { transform: translate(0.8rem, -0.8rem) rotate(8deg); }
}
</style>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'

const phrases = [
  'Bring innovation<br>to every solution',
  'Custom website<br>development',
  'Mobile app<br>solutions',
  'Your idea.<br>Our technology.',
]
const typedText = ref(phrases[0])
let pIdx = 0
let cIdx = phrases[0].replace('<br>', '\n').length
let deleting = true
let typingTimer = null

function typeLoop() {
  const phrase = phrases[pIdx].replace('<br>', '\n')
  typedText.value = phrase.slice(0, cIdx).replace('\n', '<br>')
  if (!deleting) {
    cIdx++
    if (cIdx > phrase.length) { deleting = true; typingTimer = setTimeout(typeLoop, 2600); return }
  } else {
    cIdx--
    if (cIdx < 0) { deleting = false; cIdx = 0; pIdx = (pIdx + 1) % phrases.length; typingTimer = setTimeout(typeLoop, 650); return }
  }
  typingTimer = setTimeout(typeLoop, deleting ? 42 : 78)
}

const stats = ref([
  { label: 'Projects', target: 50, display: 0, suffix: '+' },
  { label: 'Clients', target: 40, display: 0, suffix: '+' },
  { label: 'Retention', target: 98, display: 0, suffix: '%' },
])

const techs = ['Nuxt.js', 'Vue 3', 'React', 'Laravel', 'Flutter', 'MySQL', 'AWS', 'Vercel']
const heroSparkles = [
  { id: 1, left: '9%', top: '18%', size: '3px', delay: '0s', duration: '4.8s', drift: '14px', opacity: '0.72' },
  { id: 2, left: '18%', top: '70%', size: '2px', delay: '0.8s', duration: '5.6s', drift: '-10px', opacity: '0.55' },
  { id: 3, left: '30%', top: '12%', size: '4px', delay: '1.4s', duration: '6.2s', drift: '18px', opacity: '0.68' },
  { id: 4, left: '43%', top: '82%', size: '2px', delay: '0.2s', duration: '5.2s', drift: '-16px', opacity: '0.6' },
  { id: 5, left: '54%', top: '22%', size: '3px', delay: '1.1s', duration: '5.8s', drift: '12px', opacity: '0.72' },
  { id: 6, left: '63%', top: '66%', size: '2px', delay: '0.5s', duration: '6.4s', drift: '-14px', opacity: '0.54' },
  { id: 7, left: '74%', top: '16%', size: '5px', delay: '1.8s', duration: '7s', drift: '20px', opacity: '0.62' },
  { id: 8, left: '83%', top: '48%', size: '3px', delay: '0.9s', duration: '5.4s', drift: '-18px', opacity: '0.66' },
  { id: 9, left: '91%', top: '78%', size: '2px', delay: '1.6s', duration: '6.8s', drift: '16px', opacity: '0.48' },
  { id: 10, left: '68%', top: '36%', size: '2px', delay: '0.35s', duration: '4.9s', drift: '10px', opacity: '0.7' },
  { id: 11, left: '22%', top: '42%', size: '2px', delay: '2s', duration: '6.1s', drift: '-12px', opacity: '0.5' },
  { id: 12, left: '47%', top: '48%', size: '3px', delay: '1.25s', duration: '5.7s', drift: '15px', opacity: '0.58' },
]

const partners = [
  { name: 'Go-Nanny', logo: 'https://kodakode.com/wp-content/uploads/2025/07/6.png', url: 'https://go-nanny.id/' },
  { name: '2M Design Lab', logo: 'https://kodakode.com/wp-content/uploads/2025/07/8.png', url: 'https://www.2mdesignlab.com/' },
  { name: 'Bali Culinary Professionals', logo: 'https://kodakode.com/wp-content/uploads/2025/07/9.png', url: 'https://baliculinaryprofessionals.com/' },
  { name: 'Amaze Vacations', logo: 'https://kodakode.com/wp-content/uploads/2025/07/10.png', url: 'https://www.amazevacations.com/' },
  { name: 'Apex Bali', logo: 'https://kodakode.com/wp-content/uploads/2025/07/5.png', url: 'https://apexbali.com' },
  { name: 'Skal Bali', logo: 'https://kodakode.com/wp-content/uploads/2025/07/4.png', url: 'https://www.skalbali.com/' },
  { name: 'Mahasridana', logo: 'https://kodakode.com/wp-content/uploads/2025/07/2.png', url: 'https://mahasridana.com/' },
  { name: 'YPI Asia', logo: 'https://kodakode.com/wp-content/uploads/2025/07/1.png', url: 'https://www.ypi-asia.com/' },
]



const aboutCards = [
  {
    title: 'IT Consulting',
    desc: 'Smart strategies to boost performance and security.',
    gradientFrom: '#4f46e5',
    gradientTo: '#7c3aed',
    ringColor: 'rgba(79, 70, 229, 0.24)',
    iconSvg: '<path d="M12 3v3"/><path d="M18.5 5.5 16.4 7.6"/><path d="M21 12h-3"/><path d="M5.5 5.5l2.1 2.1"/><path d="M3 12h3"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a5 5 0 1 1 8 0c-.7.7-1 1.4-1 2H9c0-.6-.3-1.3-1-2Z"/>',
  },
  {
    title: 'Business Growth',
    desc: 'Tailored strategies that drive sustainable growth.',
    gradientFrom: '#0891b2',
    gradientTo: '#10b981',
    ringColor: 'rgba(16, 185, 129, 0.24)',
    iconSvg: '<path d="M3 19h18"/><path d="M7 15l4-4 3 3 6-7"/><path d="M15 7h5v5"/>',
  },
  {
    title: 'Security First',
    desc: 'Built with best practices and cloud security.',
    gradientFrom: '#2563eb',
    gradientTo: '#0f766e',
    ringColor: 'rgba(37, 99, 235, 0.24)',
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  },
  {
    title: 'Fast Delivery',
    desc: 'On-time delivery with agile development.',
    gradientFrom: '#f59e0b',
    gradientTo: '#ef4444',
    ringColor: 'rgba(245, 158, 11, 0.26)',
    iconSvg: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  },
]

const categories = ['All', 'Development', 'Design', 'Marketing']
const activeCategory = ref('All')

const allServices = [
  { key: 'digital-consulting', title: 'Digital Consulting', desc: 'Digital strategies that drive innovation and measurable growth.', cat: 'Marketing', color: '#f59e0b', iconSvg: '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2.1 5-5 2.1 2.1-5 5-2.1Z"/><path d="M12 3.5v2"/><path d="M12 18.5v2"/><path d="M3.5 12h2"/><path d="M18.5 12h2"/>' },
  { key: 'website-development', title: 'Website Development', desc: 'Powerful digital experiences through creative design and development.', cat: 'Development', color: '#6366f1', iconSvg: '<rect x="3" y="4" width="18" height="14" rx="3"/><path d="M3 9h18"/><path d="m9 13-2 2 2 2"/><path d="m15 13 2 2-2 2"/><path d="M12 18v2"/><path d="M8 20h8"/>' },
  { key: 'mobile-app-solutions', title: 'Mobile App Solutions', desc: 'Seamless apps that connect your brand with customers anywhere.', cat: 'Development', color: '#8b5cf6', iconSvg: '<rect x="7" y="2.8" width="10" height="18.4" rx="2.6"/><path d="M10.5 6h3"/><path d="M10 16h4"/><path d="M9.5 10.2h5"/><path d="M9.5 12.4h3.5"/><circle cx="17.5" cy="7" r="2.2"/><path d="M17.5 5.5v3"/><path d="M16 7h3"/>' },
  { key: 'ux-ui-design', title: 'UX/UI Design', desc: 'Intuitive experiences that turn users into loyal customers.', cat: 'Design', color: '#ec4899', iconSvg: '<rect x="3.5" y="4" width="17" height="14" rx="3"/><path d="M7 8h5"/><path d="M7 11h3"/><circle cx="16.5" cy="10.5" r="2"/><path d="m14.8 16.2 1.2-3.7 3.1 2.3-2 .4 1.1 2-1.7.9-1.1-2-1.4 1.5z"/>' },
  { key: 'seo-optimization', title: 'SEO Optimization', desc: 'Boost your visibility with data-driven SEO strategies.', cat: 'Marketing', color: '#10b981', iconSvg: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/><path d="M7.5 11.5 9.5 13.5 13.5 8.5"/><path d="M4 20h16"/><path d="M7 17v3"/><path d="M12 15v5"/><path d="M17 12v8"/>' },
  { key: 'custom-software', title: 'Custom Software', desc: 'Tailor-made software solutions for unique business needs.', cat: 'Development', color: '#3b82f6', iconSvg: '<rect x="3" y="5" width="18" height="13" rx="3"/><path d="M7 9.5 5.5 11 7 12.5"/><path d="m10.5 13 2-4"/><path d="M15 9.5 16.5 11 15 12.5"/><circle cx="18" cy="17" r="2.6"/><path d="M18 15.8v2.4"/><path d="M16.8 17h2.4"/>' },
  { key: 'cloud-solutions', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and web-based systems.', cat: 'Development', color: '#06b6d4', iconSvg: '<path d="M7 17h10a4 4 0 0 0 .8-7.9 5.5 5.5 0 0 0-10.6-1.6A4.7 4.7 0 0 0 7 17Z"/><path d="M8 20h8"/><path d="M12 17v3"/><circle cx="6" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M7.5 20h3"/><path d="M13.5 20h3"/>' },
  { key: 'maintenance', title: 'Maintenance', desc: 'Ongoing support to keep your systems running smoothly.', cat: 'Development', color: '#a78bfa', iconSvg: '<path d="M14.5 5.5a4.5 4.5 0 0 0-5.6 5.8l-5.1 5.1a2.2 2.2 0 0 0 3.1 3.1l5.1-5.1a4.5 4.5 0 0 0 5.8-5.6l-3.1 3.1-2.6-.7-.7-2.6 3.1-3.1Z"/><path d="M16.5 18.5 18 20l3-3"/>' },
]

const legacyServices = [
  { icon: '💡', title: 'Digital Consulting', desc: 'Digital strategies that drive innovation and measurable growth.', cat: 'Marketing', color: '#f59e0b' },
  { icon: '🌐', title: 'Website Development', desc: 'Powerful digital experiences through creative design and development.', cat: 'Development', color: '#6366f1' },
  { icon: '📱', title: 'Mobile App Solutions', desc: 'Seamless apps that connect your brand with customers anywhere.', cat: 'Development', color: '#8b5cf6' },
  { icon: '🎨', title: 'UX/UI Design', desc: 'Intuitive experiences that turn users into loyal customers.', cat: 'Design', color: '#ec4899' },
  { icon: '🔍', title: 'SEO Optimization', desc: 'Boost your visibility with data-driven SEO strategies.', cat: 'Marketing', color: '#10b981' },
  { icon: '⚙️', title: 'Custom Software', desc: 'Tailor-made software solutions for unique business needs.', cat: 'Development', color: '#3b82f6' },
  { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and web-based systems.', cat: 'Development', color: '#06b6d4' },
  { icon: '🛠️', title: 'Maintenance', desc: 'Ongoing support to keep your systems running smoothly.', cat: 'Development', color: '#a78bfa' },
]

const filteredServices = computed(() =>
  activeCategory.value === 'All' ? allServices : allServices.filter(s => s.cat === activeCategory.value)
)

const activeStep = ref(0)
const processProgress = ref(0)
const steps = [
  { num: '01', title: 'Discover', desc: 'Understand your goals, challenges, and define exactly what needs to be built.' },
  { num: '02', title: 'Planning', desc: 'Create a clear strategy, timeline, and technical roadmap for your project.' },
  { num: '03', title: 'Design & Dev', desc: 'Turn ideas into functional, beautiful digital solutions using modern tech.' },
  { num: '04', title: 'Testing', desc: 'Ensure quality, performance, and reliability before anything goes live.' },
  { num: '05', title: 'Project Deliver', desc: 'Launch, support, and continue driving your success post-delivery.' },
]
const processPoints = [
  { x: 70, y: 56 },
  { x: 210, y: 24 },
  { x: 350, y: 56 },
  { x: 490, y: 24 },
  { x: 630, y: 56 },
]
const processCycleMs = 18000
const processTravelRatio = 0.9
const processPathLength = 574

function getProcessPoint(progress) {
  const clamped = Math.min(Math.max(progress, 0), 0.999)
  const segmentProgress = clamped * (processPoints.length - 1)
  const index = Math.min(Math.floor(segmentProgress), processPoints.length - 2)
  const local = segmentProgress - index
  const from = processPoints[index]
  const to = processPoints[index + 1]

  return {
    x: from.x + (to.x - from.x) * local,
    y: from.y + (to.y - from.y) * local,
  }
}

const processTravelProgress = computed(() => Math.min(processProgress.value / processTravelRatio, 1))
const processDot = computed(() => getProcessPoint(processTravelProgress.value))
const processTrail = computed(() => getProcessPoint(Math.max(processTravelProgress.value - 0.025, 0)))
const processStrokeDash = computed(() => `${Math.max(processTravelProgress.value * processPathLength, 12)} ${processPathLength}`)

const testimonials = [
  {
    name: 'Andrew D. Bricker',
    role: 'Founder',
    company: 'Bali hospitality brand',
    result: '+38% inquiries',
    headline: 'The website finally feels like our business.',
    text: 'We came in with scattered ideas and left with a site that made our offer clear. Within the first month, more guests contacted us directly instead of asking basic questions over chat.',
    cta: 'Best for founders who need a website that explains, sells, and builds trust before the first call.',
  },
  {
    name: 'Jose T. McMichael',
    role: 'Operations Manager',
    company: 'Service-based company',
    result: '2x faster workflow',
    headline: 'They built the system around how our team actually works.',
    text: 'The dashboard removed a lot of manual follow-up from our daily routine. It feels simple for the team, but the automation behind it saves hours every week.',
    cta: 'A strong fit if your business is growing but your operations are still handled manually.',
  },
  {
    name: 'Marcel A. Shannon',
    role: 'Marketing Lead',
    company: 'Digital-first SME',
    result: 'Better conversion',
    headline: 'More polished, more credible, and easier to act on.',
    text: 'The new design helped visitors understand what we do much faster. The pages feel professional without being heavy, and our campaign traffic now has a clearer path to convert.',
    cta: 'Ideal for teams that already have traffic and want to turn more visitors into real leads.',
  },
]

const legacyTestimonials = [
  { name: 'Andrew D. Bricker', role: 'CEO & Founder', text: 'Their expertise and clear communication made the entire process smooth and efficient. Highly recommended for website development.' },
  { name: 'Jose T. McMichael', role: 'Senior Manager', text: 'A reliable partner that truly understands our business goals and turns them into effective digital solutions especially website development.' },
  { name: 'Marcel A. Shannon', role: 'Senior Manager', text: 'Excellent service from start to finish — innovative, responsive, and results-driven.' },
]

const blogPosts = [
  { title: 'Turn Ideas into Digital Products: The Journey from Concept to Code', category: 'Development', date: 'October 10, 2025', excerpt: 'How we transform your business ideas into powerful digital solutions using modern web technologies.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', imagePosition: 'center', url: 'https://kodakode.com/turn-ideas-into-digital-products-the-from-concept-to-code/' },
  { title: 'Why Your Business Needs a Mobile App in 2025', category: 'Mobile', date: 'September 20, 2025', excerpt: 'Mobile apps are no longer a luxury - they are a necessity for businesses looking to stay competitive.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80', imagePosition: 'center', url: 'https://kodakode.com/blog-standard/' },
  { title: 'The Power of SEO: Getting Your Business Found Online', category: 'Marketing', date: 'August 15, 2025', excerpt: 'Learn how strategic SEO can dramatically increase your online visibility and drive more customers.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80', imagePosition: 'center', url: 'https://kodakode.com/blog-standard/' },
]

const legacyBlogPosts = [
  { title: 'Turn Ideas into Digital Products: The Journey from Concept to Code', category: 'Development', date: 'October 10, 2025', excerpt: 'How we transform your business ideas into powerful digital solutions using modern web technologies.', icon: '💻', bg1: '#4f46e5', bg2: '#7c3aed', url: 'https://kodakode.com/turn-ideas-into-digital-products-the-from-concept-to-code/' },
  { title: 'Why Your Business Needs a Mobile App in 2025', category: 'Mobile', date: 'September 20, 2025', excerpt: 'Mobile apps are no longer a luxury — they are a necessity for businesses looking to stay competitive.', icon: '📱', bg1: '#7c3aed', bg2: '#ec4899', url: 'https://kodakode.com/blog-standard/' },
  { title: 'The Power of SEO: Getting Your Business Found Online', category: 'Marketing', date: 'August 15, 2025', excerpt: 'Learn how strategic SEO can dramatically increase your online visibility and drive more customers.', icon: '🔍', bg1: '#0891b2', bg2: '#4f46e5', url: 'https://kodakode.com/blog-standard/' },
]

const activeFaq = ref(null)
const faqs = [
  { q: 'What services does kodakode offer?', a: 'We offer website development, mobile app development, UI/UX design, digital consulting, SEO optimization, and cloud computing solutions.' },
  { q: 'How long does a project take?', a: 'A landing page takes 1–2 weeks. A full web app or mobile app takes 4–12 weeks depending on complexity.' },
  { q: 'Do you work with clients outside Indonesia?', a: 'Yes! We are a global partner and work with clients worldwide. Our team communicates in both English and Indonesian.' },
  { q: 'How can I get started?', a: 'Click "Get a Quote" or message us on WhatsApp at 087784794214. We will get back to you within 24 hours.' },
  { q: 'Do you provide post-launch support?', a: 'Yes — we provide ongoing maintenance, updates, and SLA-backed support packages for all our projects.' },
]

const form = ref({ name: '', email: '', message: ''})
const formSending = ref(false)
const formSent = ref(false)

function submitForm() {
  if (formSent.value || formSending.value) return
  formSending.value = true
  setTimeout(() => {
    formSending.value = false
    formSent.value = true
    setTimeout(() => { formSent.value = false }, 4000)
  }, 1200)
}

let serviceAnimations = []
let processFrame = 0
let processStart = 0
let revealObserver = null
let lottiePromise = null
let statTimers = []

function loadServiceLotties() {
  return
}

function ensureLottie() {
  if (window.lottie) return Promise.resolve(window.lottie)
  if (lottiePromise) return lottiePromise

  lottiePromise = new Promise((resolve) => {
    const existing = document.querySelector('script[data-kodakode-lottie]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.lottie), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
    script.async = true
    script.defer = true
    script.dataset.kodakodeLottie = 'true'
    script.onload = () => resolve(window.lottie)
    document.head.appendChild(script)
  })

  return lottiePromise
}

function observeLottie(id, path) {
  const el = document.getElementById(id)
  if (!el) return

  const load = async () => {
    if (el.dataset.lottieLoaded) return
    el.dataset.lottieLoaded = 'true'
    const lottie = await ensureLottie()
    if (!lottie) return
    serviceAnimations.push(lottie.loadAnimation({
      container: el,
      renderer: 'canvas',
      loop: true,
      autoplay: true,
      rendererSettings: {
        clearCanvas: true,
        progressiveLoad: true,
      },
      path,
    }))
  }

  if (!('IntersectionObserver' in window)) {
    load()
    return
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      observer.disconnect()
      const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 120))
      idle(load)
    }
  }, { rootMargin: '160px', threshold: 0.12 })

  observer.observe(el)
}

function waitForElementBox(el) {
  if (!el) return Promise.resolve(false)
  const rect = el.getBoundingClientRect()
  if (rect.width > 0 && rect.height > 0) return Promise.resolve(true)

  return new Promise((resolve) => {
    let frame = 0
    const started = Date.now()
    const check = () => {
      const nextRect = el.getBoundingClientRect()
      if (nextRect.width > 0 && nextRect.height > 0) {
        resolve(true)
        return
      }
      if (Date.now() - started > 1800) {
        resolve(false)
        return
      }
      frame = requestAnimationFrame(check)
    }
    frame = requestAnimationFrame(check)
  })
}

async function loadLottieNow(id, path) {
  const el = document.getElementById(id)
  if (!el || el.dataset.lottieLoaded) return
  const hasBox = await waitForElementBox(el)
  if (!hasBox) return
  el.innerHTML = ''
  el.dataset.lottieLoaded = 'true'
  const lottie = await ensureLottie()
  if (!lottie) return

  const animation = lottie.loadAnimation({
    container: el,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
      progressiveLoad: true,
    },
    path,
  })

  animation.addEventListener?.('DOMLoaded', () => {
    el.dataset.lottieReady = 'true'
  })

  serviceAnimations.push(animation)
}

function startProcessTimer() {
  if (processFrame) return
  processStart = performance.now()

  const tick = (now) => {
    const progress = ((now - processStart) % processCycleMs) / processCycleMs
    const travelProgress = Math.min(progress / processTravelRatio, 1)
    processProgress.value = progress
    activeStep.value = Math.min(steps.length - 1, Math.floor(travelProgress * (steps.length - 1)))
    processFrame = requestAnimationFrame(tick)
  }

  processFrame = requestAnimationFrame(tick)
}

onMounted(() => {
  typingTimer = setTimeout(typeLoop, 4200)
  nextTick(() => {
    loadLottieNow('lottie-hero', '/Web_Development.json')
  })

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-in')
        if (entry.target.querySelector('.working-process-panel')) startProcessTimer()
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.16 })

  document.querySelectorAll('section').forEach((section, index) => {
    section.classList.add('section-reveal')
    section.classList.add(`section-reveal-${index % 5}`)
    section.style.setProperty('--section-delay', `${Math.min(index * 0.04, 0.22)}s`)
    revealObserver.observe(section)
  })

  stats.value.forEach((stat, i) => {
    let start = 0
    const step = stat.target / 55
    const timer = setInterval(() => {
      start += step
      if (start >= stat.target) { start = stat.target; clearInterval(timer) }
      stats.value[i].display = Math.floor(start)
    }, 40)
    statTimers.push(timer)
  })

  setTimeout(() => {
    observeLottie('lottie-growth', '/Seo isometric composition with human characters.json')
  }, 1800)
})

watch(activeCategory, async () => {
  await nextTick()
  loadServiceLotties()
})

onUnmounted(() => {
  clearTimeout(typingTimer)
  if (processFrame) cancelAnimationFrame(processFrame)
  statTimers.forEach(timer => clearInterval(timer))
  revealObserver?.disconnect()
  serviceAnimations.forEach(animation => animation.destroy())
})
</script>

<style scoped>
section {
  overflow: clip;
}

@supports not (overflow: clip) {
  section {
    overflow: hidden;
  }
}

.section-reveal {
  opacity: 0;
  transform: translateY(18px) scale(0.992);
  transition: opacity 0.48s ease, transform 0.52s cubic-bezier(.22, 1, .36, 1);
  transition-delay: var(--section-delay, 0s);
  transform-origin: center;
}

.section-reveal-0 {
  transform: translateY(20px) scale(0.992);
}

.section-reveal-1 {
  transform: translateX(-18px) scale(0.994);
}

.section-reveal-2 {
  transform: translateX(18px) scale(0.994);
}

.section-reveal-3 {
  transform: translateY(14px) scale(0.982);
}

.section-reveal-4 {
  transform: translateY(18px) scale(0.992);
}

.section-reveal.section-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.section-reveal:not(.section-in) * {
  animation-play-state: paused !important;
}

.hero-space-section {
  background:
    radial-gradient(circle at 72% 32%, rgba(129, 140, 248, 0.24), transparent 22rem),
    radial-gradient(circle at 12% 18%, rgba(34, 197, 94, 0.08), transparent 18rem),
    linear-gradient(135deg, #0a0d3d 0%, #0f1147 50%, #1a1060 100%);
}

.hero-space-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.34) 0 1px, transparent 1.4px),
    radial-gradient(circle, rgba(167, 139, 250, 0.28) 0 1px, transparent 1.5px);
  background-position: 12px 18px, 46px 24px;
  background-size: 92px 92px, 138px 138px;
  opacity: 0.32;
}

.hero-sparkle-field {
  position: absolute;
  inset: 0;
}

.hero-sparkle {
  position: absolute;
  border-radius: 999px;
  background: white;
  opacity: var(--sparkle-opacity);
  box-shadow:
    0 0 12px rgba(255, 255, 255, 0.68),
    0 0 22px rgba(129, 140, 248, 0.42);
  animation: hero-sparkle-twinkle var(--sparkle-duration) ease-in-out var(--sparkle-delay) infinite;
}

.hero-sparkle::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  border: 1px solid rgba(196, 181, 253, 0.22);
  transform: scale(0.75);
  opacity: 0;
  animation: hero-sparkle-ring var(--sparkle-duration) ease-in-out var(--sparkle-delay) infinite;
}

.hero-orbit-star {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  transform-box: fill-box;
  transform-origin: center;
  opacity: 0.3;
}

.hero-orbit-star path {
  transform-origin: center;
  animation: hero-star-spin 12s linear infinite;
}

.star-one {
  left: 8%;
  top: 18%;
  opacity: 0.42;
  animation: hero-star-orbit-one 24s ease-in-out infinite;
}

.star-two {
  right: 10%;
  bottom: 18%;
  opacity: 0.34;
  animation: hero-star-orbit-two 29s ease-in-out infinite reverse;
}

.star-three {
  right: 8%;
  top: 47%;
  opacity: 0.26;
  animation: hero-star-orbit-three 31s ease-in-out infinite;
}

.tech-badge {
  color: #dbeafe;
  border: 1px solid rgba(129, 140, 248, 0.28);
  background:
    linear-gradient(135deg, rgba(79, 70, 229, 0.24), rgba(124, 58, 237, 0.16)),
    rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.tech-badge:hover {
  color: white;
  border-color: rgba(167, 139, 250, 0.58);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.18);
}

.partner-slider > a,
#services .grid > .group,
.working-process-panel,
.testimonial-card,
a.group,
.about-company-visual,
.about-card-icon {
  position: relative;
  isolation: isolate;
}

.partner-slider > a::after,
#services .grid > .group::after,
.working-process-panel::after,
.testimonial-card::after,
a.group::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(115deg, transparent 18%, rgba(255, 255, 255, 0.2) 44%, transparent 68%);
  opacity: 0;
  transform: translateX(-120%) skewX(-12deg);
  transition: opacity 0.28s ease, transform 0.72s cubic-bezier(.22, 1, .36, 1);
}

.partner-slider > a:hover::after,
#services .grid > .group:hover::after,
.working-process-panel:hover::after,
.testimonial-card:hover::after,
a.group:hover::after {
  opacity: 1;
  transform: translateX(120%) skewX(-12deg);
}

.section-reveal::after {
  content: "";
  position: absolute;
  right: clamp(1.5rem, 8vw, 6rem);
  top: clamp(1.25rem, 7vw, 5rem);
  z-index: 0;
  width: 5.5rem;
  height: 5.5rem;
  pointer-events: none;
  border-radius: 999px;
  background:
    radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.2) 0 2px, transparent 3px),
    radial-gradient(circle at 24% 28%, rgba(34, 197, 94, 0.18) 0 1.5px, transparent 2.5px),
    radial-gradient(circle at 70% 72%, rgba(167, 139, 250, 0.22) 0 1.5px, transparent 2.5px);
  opacity: 0;
  transform: translate3d(0, 0.8rem, 0) scale(0.72) rotate(-12deg);
}

.section-reveal.section-in::after {
  animation: section-sparkle-pop 1.1s cubic-bezier(.22, 1, .36, 1) calc(var(--section-delay, 0s) + 0.1s) both;
}

.hero-space-section::after {
  display: none;
}

.about-company-visual::after {
  content: "";
  position: absolute;
  inset: 12%;
  z-index: 0;
  border-radius: 999px;
  border: 1px solid rgba(99, 102, 241, 0.12);
  transform: rotate(-8deg);
  animation: webflow-orbit-ring 16s linear infinite;
}

.about-card-icon::before {
  content: "";
  position: absolute;
  inset: -5px;
  z-index: 0;
  border-radius: inherit;
  border: 1px solid var(--icon-ring);
  opacity: 0.38;
  transform: scale(0.82);
  animation: icon-ring-breathe 3.8s ease-in-out infinite;
}

.section-in .partner-slider > a,
.section-in a.group {
  animation: webflow-card-rise 0.68s cubic-bezier(.22, 1, .36, 1) both;
}

.section-in .partner-slider > a:nth-child(2),
.section-in a.group:nth-child(2) {
  animation-delay: 0.07s;
}

.section-in .partner-slider > a:nth-child(3),
.section-in a.group:nth-child(3) {
  animation-delay: 0.14s;
}

.section-in .partner-slider > a:nth-child(4),
.section-in a.group:nth-child(4) {
  animation-delay: 0.21s;
}

.section-in .partner-slider > a:nth-child(n+5),
.section-in a.group:nth-child(n+5) {
  animation-delay: 0.28s;
}

.working-process-panel::before {
  content: "";
  position: absolute;
  inset: -30% auto auto -10%;
  width: 18rem;
  height: 18rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.2), transparent 62%);
  animation: none;
  pointer-events: none;
}

.working-process-panel svg {
  position: relative;
  z-index: 1;
  animation: none;
}

.process-step-node {
  transition: fill 0.34s ease, stroke 0.34s ease, transform 0.34s ease;
  transform-box: fill-box;
  transform-origin: center;
}

.process-step-node:hover {
  transform: scale(1.08);
}

@media (max-width: 767px) {
  .process-zigzag-svg {
    margin-bottom: 0.25rem;
  }

  .process-step-label {
    display: none;
  }
}

.process-zigzag-path {
  transition: stroke-dasharray 0.12s linear;
}

.process-travel-dot,
.process-travel-halo,
.process-travel-trail {
  transform-box: fill-box;
  transform-origin: center;
}

.process-travel-halo {
  filter: blur(0.2px);
  animation: process-dot-pulse 2.8s ease-in-out infinite;
}

.process-travel-trail {
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.45));
}

.testimonial-card {
  min-height: 100%;
}

.section-in .testimonial-card-0 {
  animation: testimonial-from-top 0.72s cubic-bezier(.22, 1, .36, 1) 0.06s both;
}

.section-in .testimonial-card-1 {
  animation: testimonial-from-bottom 0.72s cubic-bezier(.22, 1, .36, 1) 0.22s both;
}

.section-in .testimonial-card-2 {
  animation: testimonial-from-top 0.72s cubic-bezier(.22, 1, .36, 1) 0.38s both;
}

.section-in .service-lottie-icon {
  animation: none;
}

.section-in .service-lottie-icon::before {
  animation: none;
}

.section-in .service-lottie-icon::after {
  animation: service-core-pulse 4.2s ease-in-out calc(var(--service-delay, 0s) + 0.58s) infinite;
}

.section-in .service-svg-icon {
  animation: service-icon-breathe 4.2s ease-in-out var(--service-delay, 0s) infinite;
}

.section-in .service-icon-orbit {
  animation: none;
}

.section-in .service-icon-spark {
  animation: service-spark 4.4s ease-in-out calc(var(--service-delay, 0s) + 0.58s) infinite;
}

@keyframes marquee {
  from { transform: translateX(0) }
  to { transform: translateX(-50%) }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes process-glow-drift {
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.72; }
  50% { transform: translate3d(24rem, 4rem, 0) scale(1.18); opacity: 0.35; }
}

@keyframes hero-star-spin {
  to { transform: rotate(360deg); }
}

@keyframes hero-star-orbit-one {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  28% { transform: translate3d(4.5rem, 1.8rem, 0) rotate(42deg) scale(1.08); }
  58% { transform: translate3d(2.2rem, 5.2rem, 0) rotate(96deg) scale(0.92); }
  82% { transform: translate3d(-2.6rem, 2.2rem, 0) rotate(142deg) scale(1.04); }
}

@keyframes hero-star-orbit-two {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  30% { transform: translate3d(-5rem, -1.5rem, 0) rotate(-38deg) scale(1.1); }
  62% { transform: translate3d(-2.8rem, -5rem, 0) rotate(-92deg) scale(0.94); }
  84% { transform: translate3d(2.2rem, -2.4rem, 0) rotate(-150deg) scale(1.03); }
}

@keyframes hero-star-orbit-three {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
  35% { transform: translate3d(-3.8rem, 2.2rem, 0) rotate(54deg) scale(1.12); }
  68% { transform: translate3d(-1.2rem, -3.8rem, 0) rotate(126deg) scale(0.9); }
}

@keyframes hero-sparkle-twinkle {
  0%, 100% {
    opacity: calc(var(--sparkle-opacity) * 0.45);
    transform: translate3d(0, 0, 0) scale(0.72);
  }
  48% {
    opacity: var(--sparkle-opacity);
    transform: translate3d(var(--sparkle-drift), -0.55rem, 0) scale(1);
  }
}

@keyframes hero-sparkle-ring {
  0%, 100% {
    opacity: 0;
    transform: scale(0.65);
  }
  48% {
    opacity: 1;
    transform: scale(1.28);
  }
}

@keyframes section-sparkle-pop {
  0% {
    opacity: 0;
    transform: translate3d(0, 1.1rem, 0) scale(0.72) rotate(-14deg);
    filter: blur(1px);
  }
  48% {
    opacity: 0.72;
    transform: translate3d(-0.5rem, -0.15rem, 0) scale(1.08) rotate(8deg);
    filter: blur(0);
  }
  100% {
    opacity: 0.38;
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
    filter: blur(0);
  }
}

@keyframes webflow-card-rise {
  from {
    opacity: 0;
    transform: translate3d(0, 1.25rem, 0) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes webflow-orbit-ring {
  to { transform: rotate(352deg); }
}

@keyframes icon-ring-breathe {
  0%, 100% {
    opacity: 0.24;
    transform: scale(0.84);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.08);
  }
}

@keyframes process-dot-pulse {
  0%, 100% { opacity: 0.18; transform: scale(0.92); }
  50% { opacity: 0.36; transform: scale(1.16); }
}

@keyframes service-icon-dash-pop {
  0% {
    opacity: 0;
    transform: translate3d(3.4rem, -0.4rem, 0) rotate(14deg) scale(0.7);
  }
  58% {
    opacity: 1;
    transform: translate3d(-0.42rem, 0, 0) rotate(-5deg) scale(1.08);
  }
  78% {
    transform: translate3d(0.15rem, 0, 0) rotate(2deg) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
}

@keyframes service-icon-scramble {
  0% {
    opacity: 0;
    transform: translate3d(1rem, -0.6rem, 0) rotate(18deg) scale(0.68);
  }
  20% {
    opacity: 0.55;
    transform: translate3d(-0.5rem, 0.42rem, 0) rotate(-12deg) scale(1.1);
  }
  42% {
    opacity: 0.85;
    transform: translate3d(0.35rem, -0.25rem, 0) rotate(8deg) scale(0.92);
  }
  70% {
    opacity: 1;
    transform: translate3d(-0.12rem, 0.1rem, 0) rotate(-3deg) scale(1.04);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
  }
}

@keyframes process-panel-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-0.28rem); }
}

@keyframes testimonial-from-top {
  from {
    opacity: 0;
    transform: translateY(-36px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes testimonial-from-bottom {
  from {
    opacity: 0;
    transform: translateY(36px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-reveal,
  .testimonial-card,
  .hero-sparkle,
  .hero-sparkle::after,
  .hero-orbit-star,
  .hero-orbit-star path,
  .working-process-panel svg,
  .working-process-panel::before,
  .section-reveal::after,
  .about-company-visual::after,
  .about-card-icon::before {
    animation: none !important;
    transition: none !important;
    opacity: 1;
    transform: none;
  }
}
</style>
