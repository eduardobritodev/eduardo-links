<template>
    <footer>
        <div class="container">
            <p>Tecnologia por <a href="https://eduardobrito.dev">Eduardo Brito | Dev.</a></p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 260px;
    margin: 0 auto 10px;
}

footer .container {
    text-align: center;
    color: var(--color-gray);
    font-family: var(--font-p);
    font-size: var(--f1);
    font-weight: 600;
    background: linear-gradient(45deg, var(--color-blue), var(--color-blue-hover));
    color: var(--color-white);
    text-decoration: none;
    padding: 15px 0;
    border-radius: 20px;
    transition: color 0.3s ease;
    width: 100%;
}

footer .container a {
    color: var(--color-white);
}

footer .container a:hover {
    color: var(--color-black);
}
</style>