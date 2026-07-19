<template>
  <main class="min-h-screen bg-slate-950 text-slate-100">
    <section class="border-b border-white/10 bg-slate-900/80 px-4 py-6">
      <div class="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-300">Kodakode Admin</p>
          <h1 class="mt-2 text-3xl font-black tracking-tight text-white">CMS Control Panel</h1>
          <p class="mt-2 max-w-2xl text-sm text-slate-400">Edit homepage content, dynamic partners, testimonials, services, and SEO-ready blog articles.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <NuxtLink to="/" class="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10">View Site</NuxtLink>
          <button class="rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-950/40 disabled:cursor-not-allowed disabled:opacity-60" :disabled="saving" @click="saveContent">
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[15rem_1fr]">
      <aside class="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          type="button"
          :class="['mb-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition', activeTab === tab.key ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white']"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span class="text-xs opacity-70">{{ tab.count }}</span>
        </button>
      </aside>

      <div class="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
        <div v-if="pending" class="rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-indigo-100">Loading CMS database...</div>
        <div v-else-if="error" class="rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">Failed to load CMS database.</div>

        <div v-else>
          <div v-if="activeTab === 'banner'" class="space-y-5">
            <SectionHeader title="Banner API" note="Title, subtitle, and CTA text for homepage hero." />
            <Field label="Hero subtitle">
              <textarea v-model="content.banner.subtitle" rows="4" class="admin-input"></textarea>
            </Field>
            <div class="grid gap-4 md:grid-cols-2">
              <Field label="Primary CTA">
                <input v-model="content.banner.primaryCta" class="admin-input" />
              </Field>
              <Field label="Secondary CTA">
                <input v-model="content.banner.secondaryCta" class="admin-input" />
              </Field>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-bold text-white">Typing Headlines</h3>
                <button class="admin-small-btn" @click="content.banner.titlePhrases.push('New headline<br>second line')">Add headline</button>
              </div>
              <div v-for="(_, i) in content.banner.titlePhrases" :key="i" class="flex gap-2">
                <input v-model="content.banner.titlePhrases[i]" class="admin-input" />
                <button class="admin-danger-btn" @click="content.banner.titlePhrases.splice(i, 1)">Delete</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'partners'" class="space-y-5">
            <SectionHeader title="Dynamic Partners" note="Logo cards shown in World Wide Partners." />
            <RepeaterAdd label="Add partner" @add="content.partners.push({ name: 'New Partner', logo: '', url: '' })" />
            <div class="grid gap-4">
              <div v-for="(partner, i) in content.partners" :key="i" class="admin-card grid gap-4 md:grid-cols-3">
                <Field label="Name"><input v-model="partner.name" class="admin-input" /></Field>
                <Field label="Logo URL"><input v-model="partner.logo" class="admin-input" /></Field>
                <Field label="Website URL"><input v-model="partner.url" class="admin-input" /></Field>
                <button class="admin-danger-btn md:col-span-3" @click="content.partners.splice(i, 1)">Delete partner</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'testimonials'" class="space-y-5">
            <SectionHeader title="Dynamic Testimonials" note="Realistic proof cards for upselling new visitors." />
            <RepeaterAdd label="Add testimonial" @add="content.testimonials.push({ name: 'New Client', role: '', company: '', result: '', headline: '', text: '', cta: '' })" />
            <div class="grid gap-4">
              <div v-for="(item, i) in content.testimonials" :key="i" class="admin-card space-y-4">
                <div class="grid gap-4 md:grid-cols-4">
                  <Field label="Name"><input v-model="item.name" class="admin-input" /></Field>
                  <Field label="Role"><input v-model="item.role" class="admin-input" /></Field>
                  <Field label="Company"><input v-model="item.company" class="admin-input" /></Field>
                  <Field label="Result"><input v-model="item.result" class="admin-input" /></Field>
                </div>
                <Field label="Headline"><input v-model="item.headline" class="admin-input" /></Field>
                <Field label="Text"><textarea v-model="item.text" rows="3" class="admin-input"></textarea></Field>
                <Field label="Upsell CTA"><textarea v-model="item.cta" rows="2" class="admin-input"></textarea></Field>
                <button class="admin-danger-btn" @click="content.testimonials.splice(i, 1)">Delete testimonial</button>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'services'" class="space-y-5">
            <SectionHeader title="Latest Services" note="Edit text and colors. Icons remain mapped by service key." />
            <div class="grid gap-4">
              <div v-for="service in content.services" :key="service.key" class="admin-card grid gap-4 md:grid-cols-4">
                <Field label="Key"><input v-model="service.key" class="admin-input" /></Field>
                <Field label="Title"><input v-model="service.title" class="admin-input" /></Field>
                <Field label="Category"><input v-model="service.cat" class="admin-input" /></Field>
                <Field label="Color"><input v-model="service.color" type="color" class="h-11 w-full rounded-xl border border-white/10 bg-slate-950 p-1" /></Field>
                <Field label="Description"><textarea v-model="service.desc" rows="3" class="admin-input md:col-span-4"></textarea></Field>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'blog'" class="space-y-5">
            <SectionHeader title="Blog Editor" note="SEO-friendly article editor powered by CKEditor." />
            <RepeaterAdd label="Add article" @add="addBlogPost" />
            <div class="grid gap-5 xl:grid-cols-[18rem_1fr]">
              <div class="space-y-2">
                <button
                  v-for="(post, i) in content.blogPosts"
                  :key="post.slug || i"
                  type="button"
                  :class="['w-full rounded-xl border px-4 py-3 text-left text-sm transition', selectedPostIndex === i ? 'border-indigo-400 bg-indigo-500/20 text-white' : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10']"
                  @click="selectBlogPost(i)"
                >
                  <span class="block font-bold">{{ post.title || 'Untitled article' }}</span>
                  <span class="mt-1 block text-xs text-slate-500">{{ post.slug }}</span>
                </button>
              </div>
              <div v-if="selectedPost" class="admin-card space-y-4">
                <div class="grid gap-4 md:grid-cols-2">
                  <Field label="Title"><input v-model="selectedPost.title" class="admin-input" /></Field>
                  <Field label="Slug"><input v-model="selectedPost.slug" class="admin-input" /></Field>
                  <Field label="Category"><input v-model="selectedPost.category" class="admin-input" /></Field>
                  <Field label="Date"><input v-model="selectedPost.date" class="admin-input" /></Field>
                  <Field label="Cover image"><input v-model="selectedPost.image" class="admin-input" /></Field>
                  <Field label="Image position"><input v-model="selectedPost.imagePosition" class="admin-input" /></Field>
                  <Field label="URL"><input v-model="selectedPost.url" class="admin-input" /></Field>
                  <Field label="Meta title"><input v-model="selectedPost.metaTitle" class="admin-input" /></Field>
                </div>
                <Field label="Meta description"><textarea v-model="selectedPost.metaDescription" rows="2" class="admin-input"></textarea></Field>
                <Field label="Excerpt"><textarea v-model="selectedPost.excerpt" rows="3" class="admin-input"></textarea></Field>
                <div>
                  <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">Article content</label>
                  <div id="ckeditor-host" class="ckeditor-shell"></div>
                </div>
                <button class="admin-danger-btn" @click="deleteSelectedPost">Delete article</button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="message" class="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">{{ message }}</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const tabs = computed(() => [
  { key: 'banner', label: 'Banner', count: 'API' },
  { key: 'partners', label: 'Partners', count: content.partners.length },
  { key: 'testimonials', label: 'Testimonials', count: content.testimonials.length },
  { key: 'services', label: 'Services', count: content.services.length },
  { key: 'blog', label: 'Blog', count: content.blogPosts.length },
])

const activeTab = ref('banner')
const saving = ref(false)
const message = ref('')
const selectedPostIndex = ref(0)
const editor = ref(null)
const ckeditorReady = ref(false)

const content = reactive({
  banner: { titlePhrases: [], subtitle: '', primaryCta: '', secondaryCta: '' },
  partners: [],
  testimonials: [],
  services: [],
  blogPosts: [],
})

const { data, pending, error } = await useFetch('/api/content')

if (data.value) {
  Object.assign(content, clone(data.value))
}

const selectedPost = computed(() => content.blogPosts[selectedPostIndex.value])

const Field = defineComponent({
  props: { label: { type: String, required: true } },
  setup(props, { slots }) {
    return () => h('label', { class: 'block' }, [
      h('span', { class: 'mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400' }, props.label),
      slots.default?.(),
    ])
  },
})

const SectionHeader = defineComponent({
  props: { title: { type: String, required: true }, note: { type: String, required: true } },
  setup(props) {
    return () => h('div', { class: 'border-b border-white/10 pb-4' }, [
      h('h2', { class: 'text-2xl font-black text-white' }, props.title),
      h('p', { class: 'mt-2 text-sm text-slate-400' }, props.note),
    ])
  },
})

const RepeaterAdd = defineComponent({
  emits: ['add'],
  props: { label: { type: String, required: true } },
  setup(props, { emit }) {
    return () => h('button', {
      type: 'button',
      class: 'rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-200 hover:bg-indigo-500/20',
      onClick: () => emit('add'),
    }, props.label)
  },
})

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function addBlogPost() {
  content.blogPosts.push({
    title: 'New SEO Article',
    slug: `new-article-${Date.now()}`,
    category: 'Development',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    excerpt: '',
    image: '',
    imagePosition: 'center',
    url: '/blog/new-article',
    metaTitle: '',
    metaDescription: '',
    content: '<h2>New Article</h2><p>Write your content here.</p>',
  })
  selectBlogPost(content.blogPosts.length - 1)
}

function deleteSelectedPost() {
  if (!selectedPost.value) return
  content.blogPosts.splice(selectedPostIndex.value, 1)
  selectedPostIndex.value = Math.max(0, selectedPostIndex.value - 1)
  refreshEditor()
}

async function saveContent() {
  saving.value = true
  message.value = ''
  syncEditorContent()

  try {
    const response = await $fetch('/api/content', {
      method: 'POST',
      body: clone(content),
    })
    message.value = `Saved. Updated at ${response.updatedAt}.`
  } catch (saveError) {
    message.value = saveError?.data?.statusMessage || saveError?.message || 'Unable to save CMS content.'
  } finally {
    saving.value = false
  }
}

function syncEditorContent() {
  if (editor.value && selectedPost.value) {
    selectedPost.value.content = editor.value.getData()
  }
}

async function selectBlogPost(index) {
  syncEditorContent()
  selectedPostIndex.value = index
  await refreshEditor()
}

async function loadCkeditor() {
  if (window.ClassicEditor) {
    ckeditorReady.value = true
    return
  }

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-ckeditor]')
    if (existing) {
      existing.addEventListener('load', resolve, { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.ckeditor.com/ckeditor5/41.4.2/classic/ckeditor.js'
    script.defer = true
    script.dataset.ckeditor = 'true'
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })

  ckeditorReady.value = true
}

async function refreshEditor() {
  await nextTick()
  if (activeTab.value !== 'blog' || !selectedPost.value || !ckeditorReady.value) return

  if (editor.value) {
    await editor.value.destroy()
    editor.value = null
  }

  const host = document.getElementById('ckeditor-host')
  if (!host) return
  host.innerHTML = ''
  const textarea = document.createElement('textarea')
  host.appendChild(textarea)
  editor.value = await window.ClassicEditor.create(textarea)
  editor.value.setData(selectedPost.value.content || '')
}

watch(activeTab, async (tab) => {
  if (tab === 'blog') {
    await refreshEditor()
  } else {
    syncEditorContent()
  }
})

onMounted(async () => {
  try {
    await loadCkeditor()
    if (activeTab.value === 'blog') await refreshEditor()
  } catch {
    message.value = 'CKEditor failed to load. Check your internet connection because the editor is loaded from CDN.'
  }
})

onBeforeUnmount(async () => {
  if (editor.value) {
    await editor.value.destroy()
  }
})
</script>

<style scoped>
.admin-input {
  width: 100%;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(2, 6, 23, 0.72);
  padding: 0.75rem 0.9rem;
  color: white;
  outline: none;
}

.admin-input:focus {
  border-color: rgba(129, 140, 248, 0.7);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
}

.admin-card {
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.6);
  padding: 1rem;
}

.admin-small-btn {
  border-radius: 0.75rem;
  border: 1px solid rgba(129, 140, 248, 0.36);
  background: rgba(99, 102, 241, 0.12);
  padding: 0.55rem 0.8rem;
  color: #c7d2fe;
  font-size: 0.82rem;
  font-weight: 800;
}

.admin-danger-btn {
  width: fit-content;
  border-radius: 0.75rem;
  border: 1px solid rgba(248, 113, 113, 0.25);
  background: rgba(239, 68, 68, 0.1);
  padding: 0.55rem 0.85rem;
  color: #fecaca;
  font-size: 0.82rem;
  font-weight: 800;
}

.ckeditor-shell :deep(.ck-editor__main > .ck-editor__editable) {
  min-height: 22rem;
  color: #111827;
}
</style>
