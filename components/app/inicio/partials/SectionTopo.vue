<template>
    <section class="topo">
        <img src="../../../../assets/images/eduardo2.webp" alt="Foto de perfil" class="profile-image">
        <div class="topo-content">
            <h1>Boas-vindas aos meus links!</h1>
            <p>Olá! Sou Eduardo Brito, desenvolvedor front-end freelancer focado em criar interfaces intuitivas e experiências interativas que elevam a navegação na web.</p>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.topo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem 2rem 0;
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.topo-content {
    padding: 0 2rem;
    max-width: 600px;
}

.profile-image {
    width: 184px;
    height: 184px;
    border-radius: 20%;
    object-fit: cover;
    border: 4px solid var(--color-blue);
    box-shadow: 0 8px 24px rgba(0, 123, 255, 0.3);
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-image:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 123, 255, 0.4);
}

.topo h1 {
    font-family: var(--font-h);
    font-size: var(--f6);
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--color-blue), var(--color-blue-hover));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: left;
}

.topo p {
    font-size: var(--f3);
    line-height: 1.6;
    color: var(--color-gray);
    font-family: var(--font-p);
    text-align: left;
}
</style>