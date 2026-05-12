<template>
  <div>
    <section class="hero">
      <h2>We build websites & apps</h2>
      <p>A software house built with Nuxt.js</p>
      <button>Get in touch</button>
    </section>

    <section class="services">
      <h3>What we do</h3>
      <div class="cards">
        <div class="card">
          <h4>Web Apps</h4>
          <p>Fast, modern websites built with Nuxt.js and Vue.</p>
        </div>
        <div class="card">
          <h4>Mobile UX</h4>
          <p>Responsive designs that work on any screen size.</p>
        </div>
        <div class="card">
          <h4>API & Backend</h4>
          <p>Secure server routes and database integrations.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: #09090b;
  color: white;
  text-align: center;
  gap: 1rem;
}

.hero h2 {
  font-size: 3rem;
  font-weight: 800;
}

.hero p {
  color: #a1a1aa;
  font-size: 1.1rem;
}

.hero button {
  margin-top: 1rem;
  padding: 12px 28px;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
}

.services {
  background: #18181b;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.services h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background: #27272a;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
}

.card h4 {
  font-size: 1.1rem;
  margin-bottom: .75rem;
  color: #a78bfa;
}

.card p {
  color: #a1a1aa;
  font-size: .9rem;
  line-height: 1.6;
}
</style>