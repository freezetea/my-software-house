<template>
  <div class="text-white overflow-x-hidden">

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center px-4 md:px-6 py-28 overflow-hidden" style="background: linear-gradient(135deg, #0a0d3d 0%, #0f1147 50%, #1a1060 100%)">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[80px] animate-pulse"></div>
        <div class="absolute bottom-20 left-10 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px]"></div>
      </div>
      <svg class="absolute top-20 left-10 opacity-40 animate-spin" style="animation-duration:20s" width="40" height="40" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#818cf8"/></svg>
      <svg class="absolute bottom-32 right-20 opacity-30 animate-spin" style="animation-duration:30s;animation-direction:reverse" width="28" height="28" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#a78bfa"/></svg>
      <svg class="absolute top-1/2 right-10 opacity-20 animate-spin" style="animation-duration:25s" width="18" height="18" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#c4b5fd"/></svg>

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
            <span v-for="tech in techs" :key="tech" class="text-xs bg-white/5 border border-white/10 text-slate-400 px-3 py-1.5 rounded-lg hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default">{{ tech }}</span>
          </div>
        </div>

        <!-- hero right — Lottie + stats -->
        <div class="hidden md:flex flex-col gap-4">
          <div class="relative bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 rounded-3xl p-6 overflow-hidden flex items-center justify-center" style="min-height:260px">
            <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none"></div>
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
            class="group flex items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
               class="max-h-14 w-auto object-contain transition-all duration-300"
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
            <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-200/40 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-28 h-28 bg-violet-200/50 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            <div id="lottie-about-company" class="relative z-10 w-full h-72 md:h-80"></div>
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
              class="group flex items-start gap-3 bg-white hover:bg-indigo-50 border border-indigo-100 hover:border-indigo-200 rounded-2xl p-4 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg hover:shadow-indigo-100/70"
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
              class="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2 text-sm hover:shadow-lg hover:shadow-indigo-300">
              Learn more →
            </a>
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank"
              class="text-gray-500 text-sm hover:text-indigo-600 transition-colors inline-flex items-center gap-1">
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
      <div class="absolute top-20 right-20 w-72 h-72 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none"></div>
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
            :class="['group relative bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-default',
              i % 3 === 1 ? 'md:mt-6' : '']">
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              :style="`background: linear-gradient(135deg, ${svc.color}12 0%, transparent 100%)`"></div>
            <div
              class="service-lottie-icon mb-5 relative z-10"
              :style="{ '--service-color': svc.color }"
            >
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
        <div class="mb-12 bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-6 md:p-10 overflow-hidden relative">
          <svg viewBox="0 0 700 120" class="w-full hidden md:block" xmlns="http://www.w3.org/2000/svg">
            <line x1="70" y1="40" x2="630" y2="40" stroke="#e0e7ff" stroke-width="2" stroke-dasharray="6 4"/>
            <circle r="5" fill="#6366f1" opacity="0.7">
              <animateMotion dur="3s" repeatCount="indefinite" path="M70,40 L630,40"/>
            </circle>
            <g v-for="(step, i) in steps" :key="step.num">
              <circle :cx="70 + i*140" cy="40" r="28"
                :fill="activeStep === i ? '#4f46e5' : '#ede9fe'"
                :stroke="activeStep === i ? '#4f46e5' : '#c4b5fd'"
                stroke-width="2" style="cursor:pointer"
                @click="activeStep = i"/>
              <text :x="70 + i*140" y="45" text-anchor="middle" font-size="12" font-weight="bold"
                :fill="activeStep === i ? 'white' : '#6366f1'">{{ step.num }}</text>
              <text :x="70 + i*140" y="82" text-anchor="middle" font-size="10"
                :fill="activeStep === i ? '#4f46e5' : '#9ca3af'" font-weight="600">{{ step.title }}</text>
            </g>
          </svg>
          <div class="mt-4 text-center">
            <div class="text-gray-800 font-bold mb-1">{{ steps[activeStep].title }}</div>
            <div class="text-gray-500 text-sm">{{ steps[activeStep].desc }}</div>
          </div>
        </div>
        <div class="flex flex-col gap-3 md:hidden">
          <div v-for="(step, i) in steps" :key="step.num"
            :class="['flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer',
              activeStep === i ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 bg-gray-50']"
            @click="activeStep = i">
            <div :class="['w-10 h-10 shrink-0 rounded-xl font-black text-sm flex items-center justify-center border',
              activeStep === i ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-white border-gray-200 text-indigo-600']">
              {{ step.num }}
            </div>
            <div>
              <h4 class="text-gray-800 font-bold text-sm mb-1">{{ step.title }}</h4>
              <p class="text-gray-500 text-xs">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS — DEEP VIOLET -->
    <section class="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden" style="background: linear-gradient(135deg, #1a0d5e 0%, #0f1147 60%, #0a0d3d 100%)">
      <div class="absolute top-0 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute right-8 top-8 opacity-15 pointer-events-none grid grid-cols-5 gap-3">
        <div v-for="n in 25" :key="n" class="w-1.5 h-1.5 rounded-full bg-violet-400"></div>
      </div>
      <svg class="absolute top-12 left-12 opacity-30 animate-spin" style="animation-duration:22s" width="24" height="24" viewBox="0 0 40 40"><path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" fill="#a78bfa"/></svg>
      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 text-xs font-medium text-violet-300 bg-violet-500/15 border border-violet-500/30 px-3 py-1.5 rounded-full mb-4">Our Testimonials</div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tight">
            What Our Clients Say<br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">About Solutions</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="t.name"
            :class="['group relative bg-white/5 border border-white/10 hover:border-violet-500/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 overflow-hidden',
              i === 1 ? 'md:mt-8' : '']">
            <div class="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <div class="absolute top-4 right-6 text-6xl text-violet-500/15 font-serif leading-none">"</div>
            <div class="flex items-center gap-1 mb-1 relative z-10">
              <span v-for="n in 5" :key="n" class="text-yellow-400 text-sm">★</span>
            </div>
            <div class="text-white font-bold text-sm mb-3 relative z-10">Excellent Works</div>
            <p class="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">"{{ t.text }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t border-white/5 relative z-10">
              <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600/40 to-indigo-600/40 border border-violet-500/30 flex items-center justify-center text-violet-300 font-black text-base shrink-0">
                {{ t.name.charAt(0) }}
              </div>
              <div>
                <div class="text-white font-bold text-sm">{{ t.name }}</div>
                <div class="text-slate-500 text-xs">{{ t.role }}</div>
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
            <div class="absolute top-0 right-0 w-28 h-28 bg-indigo-200/30 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
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
            <a href="https://api.whatsapp.com/send/?phone=6287784794214" target="_blank" class="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-sm">💬 Chat on WhatsApp</a>
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
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/15 rounded-full blur-2xl"></div>
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
  box-shadow: 0 14px 32px color-mix(in srgb, var(--service-color) 20%, transparent);
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-lottie-icon > div {
  transform: scale(1.38);
  transition: transform 0.3s ease;
}

.service-svg-icon {
  width: 2.45rem;
  height: 2.45rem;
  color: white;
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.18));
  transition: transform 0.3s ease, filter 0.3s ease;
}

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
</style>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from 'vue'

const typedText = ref('')
const phrases = [
  'Bring innovation<br>to every solution',
  'Custom website<br>development',
  'Mobile app<br>solutions',
  'Your idea.<br>Our technology.',
]
let pIdx = 0, cIdx = 0, deleting = false, typingTimer = null

function typeLoop() {
  const phrase = phrases[pIdx].replace('<br>', '\n')
  typedText.value = phrase.slice(0, cIdx).replace('\n', '<br>')
  if (!deleting) {
    cIdx++
    if (cIdx > phrase.length) { deleting = true; typingTimer = setTimeout(typeLoop, 1800); return }
  } else {
    cIdx--
    if (cIdx < 0) { deleting = false; cIdx = 0; pIdx = (pIdx + 1) % phrases.length; typingTimer = setTimeout(typeLoop, 400); return }
  }
  typingTimer = setTimeout(typeLoop, deleting ? 28 : 55)
}

const stats = ref([
  { label: 'Projects', target: 50, display: 0, suffix: '+' },
  { label: 'Clients', target: 40, display: 0, suffix: '+' },
  { label: 'Retention', target: 98, display: 0, suffix: '%' },
])

const techs = ['Nuxt.js', 'Vue 3', 'React', 'Laravel', 'Flutter', 'MySQL', 'AWS', 'Vercel']

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
const steps = [
  { num: '01', title: 'Discover', desc: 'Understand your goals, challenges, and define exactly what needs to be built.' },
  { num: '02', title: 'Planning', desc: 'Create a clear strategy, timeline, and technical roadmap for your project.' },
  { num: '03', title: 'Design & Dev', desc: 'Turn ideas into functional, beautiful digital solutions using modern tech.' },
  { num: '04', title: 'Testing', desc: 'Ensure quality, performance, and reliability before anything goes live.' },
  { num: '05', title: 'Project Deliver', desc: 'Launch, support, and continue driving your success post-delivery.' },
]

const testimonials = [
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

function loadServiceLotties() {
  if (!window.lottie) return

  serviceAnimations.forEach(animation => animation.destroy())
  serviceAnimations = []

  filteredServices.value.forEach((svc) => {
    const el = document.getElementById(`lottie-service-${svc.key}`)
    if (!el) return

    serviceAnimations.push(window.lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: svc.lottie,
    }))
  })
}

onMounted(() => {
  typeLoop()

  stats.value.forEach((stat, i) => {
    let start = 0
    const step = stat.target / 90
    const timer = setInterval(() => {
      start += step
      if (start >= stat.target) { start = stat.target; clearInterval(timer) }
      stats.value[i].display = Math.floor(start)
    }, 16)
  })

  // load lottie after a short delay to ensure DOM is ready
  setTimeout(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
    script.onload = () => {
      // hero lottie
      const heroEl = document.getElementById('lottie-hero')
      if (heroEl) {
        window.lottie.loadAnimation({
          container: heroEl,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/Web_Development.json'
        })
      }

      const aboutCompanyEl = document.getElementById('lottie-about-company')
      if (aboutCompanyEl) {
        window.lottie.loadAnimation({
          container: aboutCompanyEl,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/Software_House_Alive.json'
        })
      }

      const growthEl = document.getElementById('lottie-growth')
      if (growthEl) {
        window.lottie.loadAnimation({
          container: growthEl,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/Seo isometric composition with human characters.json'
        })
      }

      loadServiceLotties()
    }
    document.head.appendChild(script)
  }, 500)
})

watch(activeCategory, async () => {
  await nextTick()
  loadServiceLotties()
})

onUnmounted(() => {
  clearTimeout(typingTimer)
  serviceAnimations.forEach(animation => animation.destroy())
})
</script>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0) }
  to { transform: translateX(-50%) }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
