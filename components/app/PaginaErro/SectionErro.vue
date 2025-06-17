<template>
  <div class="error-404">
    <div class="container">
      <div class="error-illustration">
        <div class="number">4</div>
        <div class="ghost">👻</div>
        <div class="number">4</div>
      </div>
      
      <h1>Página não encontrada!</h1>
      <p>Ops! A página que você está procurando não existe ou foi movida.</p>
      
      <div class="actions">
        <NuxtLink to="/" class="btn-home">
          🏠 Ir para Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Página não encontrada - 404',
  meta: [
    { name: 'description', content: 'A página que você procura não foi encontrada' }
  ]
})
</script>

<style scoped>
.error-404 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  padding: 20px;
}

.container {
  text-align: center;
}

.error-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2rem;
  font-size: 6rem;
  font-weight: bold;
}

.number {
  color: #e2e8f0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.ghost {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

h1 {
  font-size: 2.5rem;
  color: var(--color-blue);
  font-family: var(--font-h);
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  color: #718096;
  font-family: var(--font-p);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-home,
.btn-back {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: var(--font-p);
}

.btn-home {
  background: #4299e1;
  color: white;
}

.btn-home:hover {
  background: #3182ce;
  transform: translateY(-2px);
}

.btn-back {
  background: #edf2f7;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.btn-back:hover {
  background: #e2e8f0;
  transform: translateY(-2px);
}

</style>