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
          <button class="rounded-xl border border-red-400/20 px-4 py-2 text-sm font-semibold text-red-100 hover:bg-red-500/10" @click="logout">Logout</button>
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
          @click="setActiveTab(tab.key)"
        >
          {{ tab.label }}
          <span class="text-xs opacity-70">{{ tab.count }}</span>
        </button>
      </aside>

      <div class="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
        <div v-if="loadingContent" class="rounded-xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-indigo-100">Loading CMS database...</div>
        <div v-else-if="contentError" class="rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">
          <div class="font-bold">Failed to load CMS database.</div>
          <div class="mt-1 text-red-100/80">{{ contentError }}</div>
          <button class="mt-3 rounded-lg border border-red-200/20 px-3 py-1.5 text-xs font-bold text-red-50 hover:bg-red-500/10" @click="loadContent">Retry</button>
        </div>

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
            <div class="flex flex-wrap items-center gap-3">
              <RepeaterAdd label="Add partner" @add="addPartner" />
              <button class="admin-ghost-btn" type="button" @click="saveContent">Save partners</button>
            </div>
            <EmptyState v-if="!content.partners.length" title="No partners yet" note="Add your first partner logo and website link." />
            <div class="grid gap-4 md:grid-cols-2">
              <div v-for="(partner, i) in content.partners" :key="i" class="admin-card overflow-hidden p-0">
                <div
                  class="image-drop-zone min-h-[11rem]"
                  @dragover.prevent
                  @drop.prevent="handleImageDrop($event, partner, 'logo')"
                >
                  <img v-if="partner.logo" :src="partner.logo" :alt="partner.name || 'Partner logo'" class="max-h-24 max-w-[78%] object-contain" />
                  <div v-else class="text-center">
                    <div class="text-sm font-black text-white">Drop partner logo</div>
                    <div class="mt-1 text-xs text-slate-400">or paste an image URL below</div>
                  </div>
                  <label class="admin-upload-btn">
                    Choose logo
                    <input class="sr-only" type="file" accept="image/*" @change="handleImagePick($event, partner, 'logo')" />
                  </label>
                </div>
                <div class="space-y-4 p-4">
                  <Field label="Partner name"><input v-model="partner.name" class="admin-input" placeholder="Apex Bali" /></Field>
                  <Field label="Instant picture / thumbnail URL">
                    <input v-model="partner.logo" class="admin-input" placeholder="https://.../logo.png" />
                  </Field>
                  <Field label="Website link">
                    <div class="flex gap-2">
                      <input v-model="partner.url" class="admin-input" placeholder="https://example.com" />
                      <a v-if="partner.url" :href="partner.url" target="_blank" rel="noopener noreferrer" class="admin-link-btn">Open</a>
                    </div>
                  </Field>
                  <div class="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
                    <div class="text-xs text-slate-500">Partner #{{ i + 1 }}</div>
                    <div class="flex flex-wrap gap-2">
                      <button class="admin-ghost-btn" type="button" @click="duplicatePartner(i)">Duplicate</button>
                      <button class="admin-danger-btn" type="button" @click="deletePartner(i)">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="activeTab === 'testimonials'" class="space-y-5">
            <SectionHeader title="Dynamic Testimonials" note="Realistic proof cards for upselling new visitors." />
            <RepeaterAdd label="Add testimonial" @add="addTestimonial" />
            <EmptyState v-if="!content.testimonials.length" title="No testimonials yet" note="Add client proof that makes new visitors trust the service faster." />
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
            <RepeaterAdd label="Add service" @add="addService" />
            <EmptyState v-if="!content.services.length" title="No services yet" note="Add your service list for the homepage latest services section." />
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
            <div class="flex flex-wrap items-center gap-3">
              <RepeaterAdd label="Add article" @add="addBlogPost" />
              <button class="admin-ghost-btn" type="button" @click="duplicateSelectedPost">Duplicate article</button>
              <button class="admin-ghost-btn" type="button" @click="saveContent">Save blog</button>
            </div>
            <EmptyState v-if="!content.blogPosts.length" title="No blog articles yet" note="Add an article to begin editing SEO content." />
            <div class="grid gap-5 xl:grid-cols-[18rem_1fr]">
              <div class="space-y-2">
                <button
                  v-for="(post, i) in content.blogPosts"
                  :key="post.slug || i"
                  type="button"
                  :class="['w-full rounded-xl border px-4 py-3 text-left text-sm transition', selectedPostIndex === i ? 'border-indigo-400 bg-indigo-500/20 text-white' : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/10']"
                  @click="selectBlogPost(i)"
                >
                  <span v-if="post.image" class="mb-3 block h-24 overflow-hidden rounded-lg bg-slate-900">
                    <img :src="post.image" :alt="post.title || 'Blog featured image'" class="h-full w-full object-cover" :style="{ objectPosition: post.imagePosition || 'center' }" />
                  </span>
                  <span class="block font-bold">{{ post.title || 'Untitled article' }}</span>
                  <span class="mt-1 block text-xs text-slate-500">{{ post.slug }}</span>
                  <span v-if="normalizedTags(post).length" class="mt-2 flex flex-wrap gap-1">
                    <span v-for="tag in normalizedTags(post).slice(0, 3)" :key="tag" class="admin-tag-small">{{ tag }}</span>
                  </span>
                </button>
              </div>
              <div v-if="selectedPost" class="admin-card space-y-4">
                <div
                  class="featured-image-zone"
                  @dragover.prevent
                  @drop.prevent="handleImageDrop($event, selectedPost, 'image')"
                >
                  <img v-if="selectedPost.image" :src="selectedPost.image" :alt="selectedPost.title || 'Featured image'" class="h-full w-full object-cover" :style="{ objectPosition: selectedPost.imagePosition || 'center' }" />
                  <div v-else class="relative z-10 text-center">
                    <div class="text-sm font-black text-white">Click or drag featured image</div>
                    <div class="mt-1 text-xs text-slate-400">Use a natural article thumbnail that invites visitors to read.</div>
                  </div>
                  <label class="admin-upload-btn absolute bottom-4 right-4 z-20">
                    Choose image
                    <input class="sr-only" type="file" accept="image/*" @change="handleImagePick($event, selectedPost, 'image')" />
                  </label>
                </div>
                <div class="grid gap-4 md:grid-cols-2">
                  <Field label="Title"><input v-model="selectedPost.title" class="admin-input" /></Field>
                  <Field label="Slug"><input v-model="selectedPost.slug" class="admin-input" /></Field>
                  <Field label="Category"><input v-model="selectedPost.category" class="admin-input" /></Field>
                  <Field label="Date"><input v-model="selectedPost.date" class="admin-input" /></Field>
                  <Field label="Featured image URL"><input v-model="selectedPost.image" class="admin-input" /></Field>
                  <Field label="Image position"><input v-model="selectedPost.imagePosition" class="admin-input" /></Field>
                  <Field label="Website / article link">
                    <div class="flex gap-2">
                      <input v-model="selectedPost.url" class="admin-input" />
                      <a v-if="selectedPost.url" :href="selectedPost.url" target="_blank" rel="noopener noreferrer" class="admin-link-btn">Open</a>
                    </div>
                  </Field>
                  <Field label="Meta title"><input v-model="selectedPost.metaTitle" class="admin-input" /></Field>
                </div>
                <div class="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div class="text-xs font-bold uppercase tracking-wide text-slate-400">Tags</div>
                      <div class="mt-1 text-xs text-slate-500">Add keywords for article grouping and SEO planning.</div>
                    </div>
                    <button class="admin-small-btn" type="button" @click="addTag(selectedPost)">Add tag</button>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <div v-for="(_, tagIndex) in normalizedTags(selectedPost)" :key="tagIndex" class="admin-tag-editor">
                      <input v-model="selectedPost.tags[tagIndex]" placeholder="SEO" />
                      <button type="button" @click="removeTag(selectedPost, tagIndex)">×</button>
                    </div>
                  </div>
                </div>
                <Field label="Meta description"><textarea v-model="selectedPost.metaDescription" rows="2" class="admin-input"></textarea></Field>
                <Field label="Excerpt"><textarea v-model="selectedPost.excerpt" rows="3" class="admin-input"></textarea></Field>
                <div>
                  <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">Article content</label>
                  <div id="ckeditor-host" class="ckeditor-shell"></div>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div class="text-xs text-slate-500">CRUD ready: create, read, update, delete article content.</div>
                  <div class="flex flex-wrap gap-2">
                    <a v-if="selectedPost.url" :href="selectedPost.url" target="_blank" rel="noopener noreferrer" class="admin-link-btn">Read article</a>
                    <button class="admin-danger-btn" type="button" @click="deleteSelectedPost">Delete article</button>
                  </div>
                </div>
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
import { computed, defineComponent, h, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

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
const loadingContent = ref(true)
const contentError = ref('')
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

const EmptyState = defineComponent({
  props: {
    title: { type: String, required: true },
    note: { type: String, required: true },
  },
  setup(props) {
    return () => h('div', { class: 'rounded-xl border border-dashed border-white/15 bg-white/[0.03] p-5 text-sm' }, [
      h('div', { class: 'font-black text-white' }, props.title),
      h('p', { class: 'mt-1 text-slate-400' }, props.note),
    ])
  },
})

const fallbackContent = {
  banner: {
    titlePhrases: [
      'Proper technology<br>brings proper solutions',
      'Custom website<br>development',
      'Mobile app<br>solutions',
      'Your idea.<br>Our technology.',
    ],
    subtitle: 'Proper technology brings proper solutions. We build web, app, and software systems that help your business look credible, run smoother, and grow faster.',
    primaryCta: "Let's get started",
    secondaryCta: 'View our work',
  },
  partners: [
    { name: 'Go-Nanny', logo: 'https://kodakode.com/wp-content/uploads/2025/07/6.png', url: 'https://go-nanny.id/' },
    { name: '2M Design Lab', logo: 'https://kodakode.com/wp-content/uploads/2025/07/8.png', url: 'https://www.2mdesignlab.com/' },
    { name: 'Bali Culinary Professionals', logo: 'https://kodakode.com/wp-content/uploads/2025/07/9.png', url: 'https://baliculinaryprofessionals.com/' },
    { name: 'Amaze Vacations', logo: 'https://kodakode.com/wp-content/uploads/2025/07/10.png', url: 'https://www.amazevacations.com/' },
    { name: 'Apex Bali', logo: 'https://kodakode.com/wp-content/uploads/2025/07/5.png', url: 'https://apexbali.com' },
    { name: 'Skal Bali', logo: 'https://kodakode.com/wp-content/uploads/2025/07/4.png', url: 'https://www.skalbali.com/' },
    { name: 'Mahasridana', logo: 'https://kodakode.com/wp-content/uploads/2025/07/2.png', url: 'https://mahasridana.com/' },
    { name: 'YPI Asia', logo: 'https://kodakode.com/wp-content/uploads/2025/07/1.png', url: 'https://www.ypi-asia.com/' },
  ],
  testimonials: [
    { name: 'Andrew D. Bricker', role: 'Founder', company: 'Bali hospitality brand', result: '+38% inquiries', headline: 'The website finally feels like our business.', text: 'We came in with scattered ideas and left with a site that made our offer clear.', cta: 'Best for founders who need a website that explains, sells, and builds trust before the first call.' },
  ],
  services: [
    { key: 'digital-consulting', title: 'Digital Consulting', desc: 'Digital strategies that drive innovation and measurable growth.', cat: 'Marketing', color: '#f59e0b' },
    { key: 'website-development', title: 'Website Development', desc: 'Powerful digital experiences through creative design and development.', cat: 'Development', color: '#6366f1' },
    { key: 'mobile-app-solutions', title: 'Mobile App Solutions', desc: 'Seamless apps that connect your brand with customers anywhere.', cat: 'Development', color: '#8b5cf6' },
    { key: 'ux-ui-design', title: 'UX/UI Design', desc: 'Intuitive experiences that turn users into loyal customers.', cat: 'Design', color: '#ec4899' },
    { key: 'seo-optimization', title: 'SEO Optimization', desc: 'Boost your visibility with data-driven SEO strategies.', cat: 'Marketing', color: '#10b981' },
    { key: 'custom-software', title: 'Custom Software', desc: 'Tailor-made software solutions for unique business needs.', cat: 'Development', color: '#3b82f6' },
    { key: 'cloud-solutions', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and web-based systems.', cat: 'Development', color: '#06b6d4' },
    { key: 'maintenance', title: 'Maintenance', desc: 'Ongoing support to keep your systems running smoothly.', cat: 'Development', color: '#a78bfa' },
  ],
  blogPosts: [
    { title: 'Turn Ideas into Digital Products: The Journey from Concept to Code', slug: 'turn-ideas-into-digital-products', category: 'Development', date: 'October 10, 2025', excerpt: 'How we transform your business ideas into powerful digital solutions using modern web technologies.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', imagePosition: 'center', url: 'https://kodakode.com/turn-ideas-into-digital-products-the-from-concept-to-code/', metaTitle: 'Turn Ideas into Digital Products', metaDescription: 'A practical look at how business ideas become polished digital products.', content: '<h2>From Concept to Code</h2><p>A strong product starts with clear goals, user journeys, and a build plan that keeps business outcomes visible.</p>' },
  ],
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function normalizeContent(source) {
  return {
    banner: {
      ...clone(fallbackContent.banner),
      ...(source?.banner || {}),
      titlePhrases: Array.isArray(source?.banner?.titlePhrases) && source.banner.titlePhrases.length
        ? source.banner.titlePhrases
        : clone(fallbackContent.banner.titlePhrases),
    },
    partners: Array.isArray(source?.partners) && source.partners.length ? source.partners : clone(fallbackContent.partners),
    testimonials: Array.isArray(source?.testimonials) && source.testimonials.length ? source.testimonials : clone(fallbackContent.testimonials),
    services: Array.isArray(source?.services) && source.services.length ? source.services : clone(fallbackContent.services),
    blogPosts: Array.isArray(source?.blogPosts) && source.blogPosts.length
      ? source.blogPosts.map((post) => ({
        ...post,
        tags: normalizeTagArray(post?.tags),
      }))
      : clone(fallbackContent.blogPosts).map((post) => ({ ...post, tags: normalizeTagArray(post.tags) })),
  }
}

function normalizeTagArray(tags) {
  if (Array.isArray(tags)) {
    return tags.filter(Boolean)
  }

  if (typeof tags === 'string') {
    return tags.split(',').map((tag) => tag.trim()).filter(Boolean)
  }

  return []
}

function normalizedTags(post) {
  if (!post) return []
  if (!Array.isArray(post.tags)) {
    post.tags = normalizeTagArray(post.tags)
  }

  return post.tags
}

async function setActiveTab(tab) {
  if (activeTab.value === tab) return

  safeSyncEditorContent()

  if (activeTab.value === 'blog') {
    await destroyEditor()
  }

  activeTab.value = tab

  if (tab === 'blog') {
    await refreshEditor()
  }
}

async function loadContent() {
  loadingContent.value = true
  contentError.value = ''

  try {
    const response = await $fetch('/api/content')
    Object.assign(content, normalizeContent(response))
    selectedPostIndex.value = 0
    await refreshEditor()
  } catch (loadError) {
    contentError.value = loadError?.data?.statusMessage || loadError?.message || 'Unable to reach /api/content'
  } finally {
    loadingContent.value = false
  }
}

function addPartner() {
  content.partners.unshift({ name: 'New Partner', logo: '', url: '' })
}

function duplicatePartner(index) {
  const partner = content.partners[index]
  if (!partner) return
  content.partners.splice(index + 1, 0, {
    ...clone(partner),
    name: `${partner.name || 'Partner'} Copy`,
  })
}

function deletePartner(index) {
  content.partners.splice(index, 1)
}

function addTestimonial() {
  content.testimonials.push({ name: 'New Client', role: '', company: '', result: '', headline: '', text: '', cta: '' })
}

function addService() {
  content.services.push({
    key: `new-service-${Date.now()}`,
    title: 'New Service',
    desc: '',
    cat: 'Development',
    color: '#6366f1',
  })
}

function addBlogPost() {
  content.blogPosts.unshift({
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
    tags: ['SEO'],
    content: '<h2>New Article</h2><p>Write your content here.</p>',
  })
  void selectBlogPost(0)
}

function deleteSelectedPost() {
  if (!selectedPost.value) return
  content.blogPosts.splice(selectedPostIndex.value, 1)
  selectedPostIndex.value = Math.max(0, selectedPostIndex.value - 1)
  void refreshEditor()
}

function duplicateSelectedPost() {
  if (!selectedPost.value) return
  safeSyncEditorContent()
  const copy = clone(selectedPost.value)
  copy.title = `${copy.title || 'Article'} Copy`
  copy.slug = `${copy.slug || 'article'}-copy-${Date.now()}`
  content.blogPosts.splice(selectedPostIndex.value + 1, 0, copy)
  void selectBlogPost(selectedPostIndex.value + 1)
}

function addTag(post) {
  normalizedTags(post)
  post.tags.push('')
}

function removeTag(post, index) {
  normalizedTags(post)
  post.tags.splice(index, 1)
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

async function handleImagePick(event, target, field) {
  const file = event.target?.files?.[0]
  if (!file) return
  target[field] = await readFileAsDataUrl(file)
  event.target.value = ''
}

async function handleImageDrop(event, target, field) {
  const file = event.dataTransfer?.files?.[0]
  if (file?.type?.startsWith('image/')) {
    target[field] = await readFileAsDataUrl(file)
    return
  }

  const text = event.dataTransfer?.getData('text/plain')?.trim()
  if (text) {
    target[field] = text
  }
}

async function saveContent() {
  saving.value = true
  message.value = ''
  safeSyncEditorContent()

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

async function logout() {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await navigateTo('/admin-login')
}

function syncEditorContent() {
  if (editor.value && selectedPost.value) {
    selectedPost.value.content = editor.value.getData()
  }
}

function safeSyncEditorContent() {
  try {
    syncEditorContent()
  } catch (error) {
    console.error('Failed to sync CKEditor content.', error)
  }
}

async function selectBlogPost(index) {
  safeSyncEditorContent()
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

  await destroyEditor()

  const host = document.getElementById('ckeditor-host')
  if (!host) return
  host.innerHTML = ''
  const textarea = document.createElement('textarea')
  host.appendChild(textarea)
  editor.value = await window.ClassicEditor.create(textarea)
  editor.value.setData(selectedPost.value.content || '')
}

async function destroyEditor() {
  if (!editor.value) return

  try {
    await editor.value.destroy()
  } catch (error) {
    console.error('Failed to destroy CKEditor instance.', error)
  } finally {
    editor.value = null
  }
}

onMounted(async () => {
  try {
    await loadContent()
    await loadCkeditor()
    if (activeTab.value === 'blog') await refreshEditor()
  } catch {
    message.value = 'CKEditor failed to load. Check your internet connection because the editor is loaded from CDN.'
  }
})

onBeforeUnmount(async () => {
  await destroyEditor()
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

.admin-ghost-btn,
.admin-link-btn {
  width: fit-content;
  border-radius: 0.75rem;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: rgba(15, 23, 42, 0.62);
  padding: 0.55rem 0.85rem;
  color: #dbeafe;
  font-size: 0.82rem;
  font-weight: 800;
  white-space: nowrap;
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.admin-ghost-btn:hover,
.admin-link-btn:hover {
  border-color: rgba(129, 140, 248, 0.58);
  background: rgba(79, 70, 229, 0.16);
  transform: translateY(-1px);
}

.image-drop-zone,
.featured-image-zone {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.22), transparent 15rem),
    linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.72));
}

.image-drop-zone::before,
.featured-image-zone::before {
  content: "";
  position: absolute;
  inset: 0.75rem;
  border: 1px dashed rgba(199, 210, 254, 0.24);
  border-radius: 1rem;
  pointer-events: none;
}

.featured-image-zone {
  min-height: 18rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.admin-upload-btn {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  border-radius: 999px;
  border: 1px solid rgba(129, 140, 248, 0.36);
  background: rgba(15, 23, 42, 0.84);
  padding: 0.55rem 0.85rem;
  color: #eef2ff;
  font-size: 0.76rem;
  font-weight: 900;
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.34);
}

.admin-tag-small {
  border-radius: 999px;
  border: 1px solid rgba(129, 140, 248, 0.28);
  background: rgba(99, 102, 241, 0.12);
  padding: 0.2rem 0.45rem;
  color: #c7d2fe;
  font-size: 0.68rem;
  font-weight: 800;
}

.admin-tag-editor {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgba(129, 140, 248, 0.28);
  background: rgba(99, 102, 241, 0.12);
}

.admin-tag-editor input {
  width: 7rem;
  border: 0;
  background: transparent;
  padding: 0.5rem 0.15rem 0.5rem 0.7rem;
  color: white;
  font-size: 0.78rem;
  font-weight: 800;
  outline: none;
}

.admin-tag-editor button {
  padding: 0.35rem 0.65rem;
  color: #fecaca;
  font-size: 1rem;
  font-weight: 900;
}

.ckeditor-shell :deep(.ck-editor__main > .ck-editor__editable) {
  min-height: 22rem;
  color: #111827;
}
</style>
