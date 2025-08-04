<template>
    <div class="page">
        <SectionTopo/>
        <!-- Linha divisória -->
        <div class="divider">
            <hr>
        </div>
        <p class="section-call">Explore meus projetos e entre em contato para colaborações!</p>
        <SectionCards/>
        <SectionFooter/>
    </div>
</template>

<script setup>
import SectionTopo from '../components/app/inicio/partials/SectionTopo.vue';
import SectionCards from '../components/app/inicio/partials/SectionCards.vue';
import SectionFooter from '../components/app/inicio/partials/SectionFooter.vue';
</script>

<style scoped>
/* ===== LINHA DIVISÓRIA ===== */
.divider {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.divider hr {
    border: none;
    border-top: 2px solid var(--color-white);
    width: 100%;
    max-width: 600px;
}

.section-call {
    color: var(--color-white);
    font-family: var(--font-p);
    font-size: var(--f3);
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
}

/* ===== RESPONSIVIDADE ===== */

/* Tablets */
@media (max-width: 768px) {
    .topo {
        flex-direction: column;
        padding: 2rem 1rem 0;
    }
    
    .topo-content {
        padding: 1rem 0 0;
    }
    
    .topo h1 {
        font-size: 1.8rem;
    }
    
    .topo p {
        font-size: 1rem;
    }
    
    .profile-image {
        width: 140px;
        height: 140px;
        margin-bottom: 1rem;
    }
    
    .divider hr {
        max-width: 100%;
    }
    
    .card {
        padding: 1.2rem;
    }
    
    .section-title h2 {
        font-size: 1.3rem;
    }
}

/* Mobile */
@media (max-width: 480px) {
    .topo {
        padding: 1.5rem 1rem 0;
    }
    
    .topo h1 {
        font-size: 1.5rem;
    }
    
    .topo p {
        font-size: 0.9rem;
    }
    
    .profile-image {
        width: 120px;
        height: 120px;
    }
    
    .link-list {
        gap: 1rem;
    }
    
    .section-title {
        margin: 1.5rem 0 0.5rem;
    }
    
    .section-title h2 {
        font-size: 1.2rem;
    }
    
    .card {
        padding: 1rem;
    }
    
    .card h3 {
        font-size: 1.1rem;
    }
    
    .card p {
        font-size: 0.85rem;
    }
    
    .button {
        padding: 0.7rem 1.2rem;
        font-size: 0.85rem;
    }
}

/* Mobile pequeno */
@media (max-width: 320px) {
    .topo-content {
        padding: 0;
    }
    
    .profile-image {
        width: 100px;
        height: 100px;
    }
    
    .button {
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
    }
}
</style>