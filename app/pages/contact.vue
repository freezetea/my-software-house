<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 py-24">
    <div class="w-full max-w-lg">
      <span class="text-xs uppercase tracking-widest text-violet-400 border border-violet-800 px-4 py-1 rounded-full">Contact us</span>
      <h2 class="text-4xl font-black text-white mt-6 mb-2">Let's work together</h2>
      <p class="text-zinc-400 mb-10">Tell us about your project and we'll get back to you within 24 hours.</p>

      <div class="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          class="bg-zinc-900 border border-zinc-700 focus:border-violet-500 text-white rounded-lg px-4 py-3 outline-none transition-colors"
        />
        <input
          type="email"
          placeholder="Your email"
          class="bg-zinc-900 border border-zinc-700 focus:border-violet-500 text-white rounded-lg px-4 py-3 outline-none transition-colors"
        />
        <textarea
          placeholder="Tell us about your project"
          rows="5"
          class="bg-zinc-900 border border-zinc-700 focus:border-violet-500 text-white rounded-lg px-4 py-3 outline-none transition-colors resize-none"
        />
        <button class="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-lg transition-colors">
          Send message
        </button>
      </div>
    </div>
  </div>
</template>