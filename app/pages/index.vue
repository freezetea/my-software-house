<template>
  <div>

    <!-- HERO -->
    <section class="min-h-screen bg-zinc-950 relative flex items-center px-6 py-24 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>
      </div>
      <div class="max-w-4xl mx-auto w-full relative z-10">
        <div class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-violet-400 border border-violet-800 px-4 py-1 rounded-full mb-6 animate-pulse">
          <span class="w-2 h-2 bg-violet-400 rounded-full"></span>
          Available for new projects
        </div>
        <h1 class="text-6xl font-black text-white mt-2 mb-4 leading-tight">
          Bring innovation<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">to every solution</span>
        </h1>
        <p class="text-zinc-400 text-lg max-w-xl mb-8">
          We don't just sell services — we bring solutions and innovations that make your business profitable through custom web and app development.
        </p>
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/contact"
            class="group bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5">
            Let's get started
            <span class="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
          </NuxtLink>
          <NuxtLink to="/work"
            class="border border-zinc-700 hover:border-violet-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5">
            View our work
          </NuxtLink>
        </div>

        <!-- Floating tech badges -->
        <div class="flex flex-wrap gap-3 mt-12">
          <span v-for="tech in techs" :key="tech"
            class="text-xs bg-zinc-900 border border-zinc-700 text-zinc-400 px-3 py-1 rounded-full hover:border-violet-500 hover:text-violet-400 transition-colors cursor-default">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- ANIMATED STATS -->
    <section class="bg-violet-600 py-14 px-6">
      <div class="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
        <div v-for="stat in stats" :key="stat.label" class="group">
          <div class="text-4xl font-black text-white tabular-nums">
            {{ stat.display }}<span class="text-violet-300">{{ stat.suffix }}</span>
          </div>
          <div class="text-violet-200 text-sm mt-1">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="bg-zinc-900 py-24 px-6">
      <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-xs uppercase tracking-widest text-violet-400">About us</span>
          <h2 class="text-4xl font-black text-white mt-3 mb-4">Web company &<br>software house</h2>
          <p class="text-zinc-400 leading-relaxed mb-6">
            We are a software house specialising in custom web development using Nuxt.js and Vue 3 — tailored to your business needs. Our technology is web-based and built for scale.
          </p>
          <NuxtLink to="/contact"
            class="group bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 inline-flex items-center gap-2">
            Learn more
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="card in aboutCards" :key="card.title"
            class="bg-zinc-800 hover:bg-zinc-700 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default">
            <div class="text-2xl mb-2">{{ card.icon }}</div>
            <h4 class="text-white font-bold mb-1">{{ card.title }}</h4>
            <p class="text-zinc-400 text-sm">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="bg-zinc-950 py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-xs uppercase tracking-widest text-violet-400">What we offer</span>
          <h2 class="text-4xl font-black text-white mt-3">We provide the best IT services</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="svc in services" :key="svc.title"
            class="group border border-zinc-800 hover:border-violet-600 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 cursor-default">
            <div class="text-3xl mb-3 transition-transform group-hover:scale-110 duration-300">{{ svc.icon }}</div>
            <h3 class="text-white font-bold mb-2">{{ svc.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ svc.desc }}</p>
            <div class="mt-4 text-violet-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Learn more →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="bg-zinc-900 py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-xs uppercase tracking-widest text-violet-400">How we work</span>
          <h2 class="text-4xl font-black text-white mt-3">Industry best practices to the core</h2>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="(step, i) in steps" :key="step.num"
            :class="['group flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer',
              activeStep === i
                ? 'border-violet-500 bg-violet-900/20'
                : 'border-zinc-800 hover:border-zinc-600']"
            @click="activeStep = i">
            <div :class="['w-12 h-12 shrink-0 rounded-full font-black text-lg flex items-center justify-center transition-colors duration-300',
              activeStep === i ? 'bg-violet-600 text-white' : 'bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700']">
              {{ step.num }}
            </div>
            <div>
              <h4 class="text-white font-bold mb-1">{{ step.title }}</h4>
              <p class="text-zinc-400 text-sm">{{ step.desc }}</p>
              <div v-if="activeStep === i" class="mt-3 text-violet-300 text-sm animate-pulse">
                ● Currently active phase
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-zinc-950 py-24 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-xs uppercase tracking-widest text-violet-400">Testimonials</span>
          <h2 class="text-4xl font-black text-white mt-3">What our clients say</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name"
            class="bg-zinc-900 border border-zinc-800 hover:border-violet-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20">
            <div class="text-yellow-400 text-sm mb-3">★★★★★</div>
            <p class="text-zinc-300 text-sm leading-relaxed mb-4">"{{ t.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-violet-700 flex items-center justify-center text-white font-bold text-sm">
                {{ t.name.charAt(0) }}
              </div>
              <div>
                <div class="text-white font-bold text-sm">{{ t.name }}</div>
                <div class="text-zinc-500 text-xs">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-zinc-900 py-24 px-6">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-14">
          <span class="text-xs uppercase tracking-widest text-violet-400">FAQ</span>
          <h2 class="text-4xl font-black text-white mt-3">Common questions</h2>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="(faq, i) in faqs" :key="i"
            class="border border-zinc-800 rounded-xl overflow-hidden">
            <button
              class="w-full text-left px-6 py-4 text-white font-semibold flex justify-between items-center hover:bg-zinc-800 transition-colors"
              @click="activeFaq = activeFaq === i ? null : i">
              {{ faq.q }}
              <span class="text-violet-400 text-xl transition-transform duration-300"
                :style="activeFaq === i ? 'transform: rotate(45deg)' : ''">+</span>
            </button>
            <div v-if="activeFaq === i" class="px-6 py-4 text-zinc-400 text-sm border-t border-zinc-800 leading-relaxed">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-gradient-to-br from-violet-700 to-indigo-700 py-20 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div class="relative z-10">
        <h2 class="text-4xl font-black text-white mb-4">Ready to grow your business?</h2>
        <p class="text-violet-200 mb-8 max-w-md mx-auto">We're ready to turn your ideas into powerful digital solutions.</p>
        <NuxtLink to="/contact"
          class="group bg-white text-violet-600 hover:bg-violet-50 px-10 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-xl inline-flex items-center gap-2">
          Get a free quote
          <span class="transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeStep = ref(0)
const activeFaq = ref(null)

const techs = ['Nuxt.js', 'Vue 3', 'Tailwind CSS', 'TypeScript', 'Pinia', 'Supabase', 'Vercel', 'Git']

const aboutCards = [
  { icon: '💡', title: 'IT Consulting', desc: 'Smart strategies to boost your performance.' },
  { icon: '📈', title: 'Business Growth', desc: 'Tailored solutions that drive growth.' },
  { icon: '🔒', title: 'Security First', desc: 'Built with best practices in mind.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Shipped on time, every time.' },
]

const services = [
  { icon: '🌐', title: 'Website Development', desc: 'Powerful digital experiences through creative design and robust Nuxt.js development.' },
  { icon: '📱', title: 'Mobile App Solutions', desc: 'Seamless, user-friendly apps that connect your brand with customers anywhere.' },
  { icon: '🎨', title: 'UX/UI Design', desc: 'Intuitive, engaging interfaces that turn users into loyal customers.' },
  { icon: '🔍', title: 'SEO Optimization', desc: 'Data-driven SEO strategies that boost visibility and reach the right audience.' },
  { icon: '💡', title: 'Digital Consulting', desc: 'Strategies that drive innovation, efficiency, and measurable growth.' },
  { icon: '⚙️', title: 'API & Backend', desc: 'Secure Nitro server routes and database integrations built to scale.' },
]

const steps = [
  { num: '01', title: 'Discover', desc: 'We understand your goals, challenges, and define exactly what needs to be built.' },
  { num: '02', title: 'Planning', desc: 'We create a clear strategy, timeline, and technical roadmap for your project.' },
  { num: '03', title: 'Design & Dev', desc: 'We turn ideas into functional, beautiful digital solutions using modern tech.' },
  { num: '04', title: 'Testing', desc: 'We ensure quality, performance, and reliability before anything goes live.' },
  { num: '05', title: 'Deliver', desc: 'We launch, support, and continue driving your success post-delivery.' },
]

const testimonials = [
  { name: 'Andrew Bricker', role: 'CEO & Founder', text: 'Their expertise and clear communication made the entire process smooth and efficient. Highly recommended!' },
  { name: 'Jose McMichael', role: 'Senior Manager', text: 'A reliable partner that truly understands our business goals and turns them into effective digital solutions.' },
  { name: 'Marcel Shannon', role: 'Senior Manager', text: 'Excellent service from start to finish — innovative, responsive, and results-driven.' },
]

const faqs = [
  { q: 'What technologies do you use?', a: 'We specialise in Nuxt.js, Vue 3, Tailwind CSS, TypeScript, and Supabase. We pick the best stack for your project.' },
  { q: 'How long does a project take?', a: 'A typical landing page takes 1–2 weeks. A full web app takes 4–12 weeks depending on complexity.' },
  { q: 'Do you offer post-launch support?', a: 'Yes — we offer ongoing maintenance and SLA-backed support packages after every project.' },
  { q: 'Can you work with an existing codebase?', a: 'Absolutely. We can audit, refactor, or extend your existing Vue or Nuxt.js project.' },
]

// Animated counters
const stats = ref([
  { label: 'Projects shipped', target: 84, display: 0, suffix: '+' },
  { label: 'Years in business', target: 6, display: 0, suffix: 'y' },
  { label: 'Client retention', target: 98, display: 0, suffix: '%' },
])

onMounted(() => {
  stats.value.forEach((stat, i) => {
    let start = 0
    const duration = 1500
    const step = stat.target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= stat.target) {
        start = stat.target
        clearInterval(timer)
      }
      stats.value[i].display = Math.floor(start)
    }, 16)
  })
})
</script>