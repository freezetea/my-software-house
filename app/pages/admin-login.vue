<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <section class="flex min-h-screen items-center justify-center px-4 py-16">
      <div class="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-indigo-950/30">
        <div class="mb-7 text-center">
          <img
            src="https://kodakode.com/wp-content/uploads/2023/02/kodakode-logo-biru-teks-putih-300x106.png"
            alt="Kodakode"
            class="mx-auto h-16 w-auto object-contain"
          />
          <p class="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">Kodakode Admin</p>
          <h1 class="mt-3 text-3xl font-black tracking-tight">Login Panel</h1>
          <p class="mt-2 text-sm text-slate-400">Masuk untuk mengelola banner, partners, testimonials, services, dan blog.</p>
        </div>

        <form class="space-y-4" @submit.prevent="login">
          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">Username</span>
            <input v-model="form.username" autocomplete="username" class="login-input" />
          </label>

          <label class="block">
            <span class="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</span>
            <input v-model="form.password" type="password" autocomplete="current-password" class="login-input" />
          </label>

          <button class="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-indigo-950/40 disabled:cursor-not-allowed disabled:opacity-60" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <div v-if="message" class="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 p-3 text-sm text-red-100">{{ message }}</div>

        <div class="mt-6 rounded-2xl border border-indigo-400/15 bg-indigo-500/10 p-4 text-xs leading-relaxed text-indigo-100">
          Default local login: <strong>admin</strong> / <strong>kodakode2026</strong>. Untuk production, ubah lewat env <code>ADMIN_USERNAME</code>, <code>ADMIN_PASSWORD</code>, dan <code>ADMIN_SESSION_SECRET</code>.
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const form = reactive({ username: 'admin', password: '' })
const loading = ref(false)
const message = ref('')

async function login() {
  loading.value = true
  message.value = ''

  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: form,
    })
    await navigateTo(typeof route.query.redirect === 'string' ? route.query.redirect : '/admin')
  } catch (error) {
    message.value = error?.data?.statusMessage || 'Login gagal'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-input {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(2, 6, 23, 0.72);
  padding: 0.85rem 1rem;
  color: white;
  outline: none;
}

.login-input:focus {
  border-color: rgba(129, 140, 248, 0.76);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
}
</style>
